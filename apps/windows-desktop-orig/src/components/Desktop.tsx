import { useState, useRef } from 'react'
import Window from './Window'
import Taskbar from './Taskbar'
import DesktopIcon from './DesktopIcon'
import FileExplorer from './FileExplorer'
import type { WindowData } from '../types'
import type { FileSystemItem } from '../fileSystem'
import { fileSystem } from '../fileSystem'

const initialWindows: WindowData[] = [
  {
    id: 'notepad',
    title: 'Notepad',
    content: (
      <div style={{ fontFamily: "'Consolas', monospace", fontSize: '14px', whiteSpace: 'pre-wrap' }}>
        Welcome to Windows Desktop Simulator!
        {'\n\n'}
        This is a simple notepad window. You can drag this window around the screen by clicking and holding the title bar.
        {'\n\n'}
        Try double-clicking the folders on the desktop to open them!
      </div>
    ),
    x: 100,
    y: 100,
    width: 500,
    height: 400,
    zIndex: 100,
    minimized: false,
  },
  {
    id: 'about',
    title: 'About',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '24px' }}>
        <div style={{ fontSize: '64px' }}>💻</div>
        <h2 style={{ margin: 0, fontSize: '18px' }}>Windows Desktop Simulator</h2>
        <p style={{ textAlign: 'center', color: '#666', fontSize: '13px', margin: 0 }}>
          A desktop environment simulation built with React, TypeScript and Vite.
        </p>
        <div style={{ marginTop: '16px', padding: '16px', background: '#f8f9fa', borderRadius: '8px', width: '100%' }}>
          <div style={{ fontSize: '12px', color: '#666' }}>Features:</div>
          <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13px' }}>
            <li>Draggable windows</li>
            <li>Window management (minimize, close)</li>
            <li>Taskbar with active windows</li>
            <li>Live clock</li>
            <li>Desktop icons and folders</li>
            <li>File explorer with navigation</li>
          </ul>
        </div>
      </div>
    ),
    x: 300,
    y: 250,
    width: 450,
    height: 450,
    zIndex: 101,
    minimized: false,
  },
]

export default function Desktop() {
  const [windows, setWindows] = useState<WindowData[]>(initialWindows)
  const highestZIndex = useRef(101)
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
      const maxZIndex = Math.max(...prevWindows.map((w) => w.zIndex))

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
          // If restoring, bring to front
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

  const handleFolderOpen = (item: FileSystemItem) => {
    if (item.type !== 'folder') return

    // Check if window for this folder already exists
    const existingWindow = windows.find((win) => win.id === `explorer-${item.id}`)
    if (existingWindow) {
      // Bring to front and restore if minimized
      if (existingWindow.minimized) {
        handleMinimize(existingWindow.id)
      } else {
        bringToFront(existingWindow.id)
      }
      return
    }

    // Create new explorer window
    windowIdCounter.current++
    highestZIndex.current++

    const newWindow: WindowData = {
      id: `explorer-${item.id}`,
      title: item.name,
      content: <FileExplorer initialPath={[item.id]} />,
      x: 150 + (windowIdCounter.current * 30) % 300,
      y: 100 + (windowIdCounter.current * 30) % 200,
      width: 700,
      height: 500,
      zIndex: highestZIndex.current,
      minimized: false,
    }

    setWindows((prevWindows) => [...prevWindows, newWindow])
  }

  return (
    <div className="desktop">
      <div className="desktop-icons">
        {fileSystem.map((item) => (
          <DesktopIcon key={item.id} item={item} onDoubleClick={handleFolderOpen} />
        ))}
      </div>
      <div id="windows-container">
        {windows.map((window) => (
          <Window
            key={window.id}
            window={window}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            onMinimize={handleMinimize}
            onClose={handleClose}
            onBringToFront={bringToFront}
          />
        ))}
      </div>
      <Taskbar windows={windows} onWindowToggle={handleMinimize} />
    </div>
  )
}
