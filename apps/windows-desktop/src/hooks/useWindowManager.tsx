import { useState, useRef } from 'react'
import type { WindowData } from '../types'
import type { FileSystemItem } from '../fileSystem'
import { getAppDefinition } from '../apps/appRegistry'
import FileExplorer from '../apps/FileExplorer'

export function useWindowManager() {
  const [windows, setWindows] = useState<WindowData[]>([])
  const highestZIndex = useRef(100)
  const windowIdCounter = useRef(0)
  const dragOffset = useRef({ x: 0, y: 0 })

  const handleDragStart = (id: string, offsetX: number, offsetY: number) => {
    dragOffset.current = { x: offsetX, y: offsetY }
    bringToFront(id)
  }

  const handleDrag = (id: string, clientX: number, clientY: number) => {
    setWindows((prevWindows) =>
      prevWindows.map((win) => {
        if (win.id !== id) return win

        const newX = clientX - dragOffset.current.x
        const newY = clientY - dragOffset.current.y

        return {
          ...win,
          x: Math.max(0, Math.min(newX, window.innerWidth - win.width)),
          y: Math.max(0, Math.min(newY, window.innerHeight - win.height - 48)),
        }
      })
    )
  }

  const handleDragEnd = () => {
    // Drag ended - can add any cleanup logic here if needed
  }

  const bringToFront = (id: string) => {
    setWindows((prevWindows) => {
      const maxZIndex = Math.max(...prevWindows.map((w) => w.zIndex), 99)

      return prevWindows.map((win) => {
        if (win.id === id && win.zIndex < maxZIndex) {
          highestZIndex.current++
          return { ...win, zIndex: highestZIndex.current }
        }
        return win
      })
    })
  }

  const handleMinimize = (id: string) => {
    setWindows((prevWindows) =>
      prevWindows.map((win) => {
        if (win.id === id) {
          const newMinimized = !win.minimized
          if (!newMinimized) {
            highestZIndex.current++
            return { ...win, minimized: newMinimized, zIndex: highestZIndex.current }
          }
          return { ...win, minimized: newMinimized }
        }
        return win
      })
    )
  }

  const handleClose = (id: string) => {
    setWindows((prevWindows) => prevWindows.filter((win) => win.id !== id))
  }

  const openWindow = (windowData: Omit<WindowData, 'zIndex'>) => {
    windowIdCounter.current++
    highestZIndex.current++

    const newWindow: WindowData = {
      ...windowData,
      zIndex: highestZIndex.current,
    }

    setWindows((prevWindows) => [...prevWindows, newWindow])
  }

  const focusOrCreateWindow = (id: string, createFn: () => Omit<WindowData, 'zIndex'>) => {
    const existingWindow = windows.find((win) => win.id === id)

    if (existingWindow) {
      if (existingWindow.minimized) {
        handleMinimize(existingWindow.id)
      } else {
        bringToFront(existingWindow.id)
      }
      return
    }

    openWindow(createFn())
  }

  const handleAppLaunch = (appId: string) => {
    focusOrCreateWindow(appId, () => {
      const appDef = getAppDefinition(appId)
      if (!appDef) throw new Error(`Unknown app: ${appId}`)

      return {
        id: appId,
        title: appDef.title,
        content: appDef.content,
        x: 100 + ((windowIdCounter.current * 30) % 300),
        y: 100 + ((windowIdCounter.current * 30) % 200),
        width: appDef.defaultWidth,
        height: appDef.defaultHeight,
        minimized: false,
      }
    })
  }

  const handleFolderOpen = (item: FileSystemItem) => {
    if (item.type !== 'folder') return

    focusOrCreateWindow(`explorer-${item.id}`, () => ({
      id: `explorer-${item.id}`,
      title: item.name,
      content: <FileExplorer initialPath={[item.id]} />,
      x: 150 + ((windowIdCounter.current * 30) % 300),
      y: 100 + ((windowIdCounter.current * 30) % 200),
      width: 700,
      height: 500,
      minimized: false,
    }))
  }

  return {
    windows,
    handleDragStart,
    handleDrag,
    handleDragEnd,
    handleMinimize,
    handleClose,
    bringToFront,
    handleAppLaunch,
    handleFolderOpen,
  }
}
