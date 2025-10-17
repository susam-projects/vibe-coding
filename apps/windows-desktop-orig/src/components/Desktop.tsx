import { useState, useRef } from 'react'
import Window from './Window'
import Taskbar from './Taskbar'
import type { WindowData } from '../types'

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
        Try interacting with other windows too!
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
    id: 'explorer',
    title: 'File Explorer',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ padding: '8px', background: '#f0f0f0', borderRadius: '4px', fontSize: '13px' }}>
          📁 This PC
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {['Documents', 'Pictures', 'Downloads'].map((folder) => (
            <div
              key={folder}
              style={{
                textAlign: 'center',
                padding: '12px',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f0f0')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{ fontSize: '48px' }}>📁</div>
              <div style={{ fontSize: '12px', marginTop: '8px' }}>{folder}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    x: 650,
    y: 150,
    width: 600,
    height: 450,
    zIndex: 101,
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
            <li>Component-based React architecture</li>
          </ul>
        </div>
      </div>
    ),
    x: 300,
    y: 250,
    width: 450,
    height: 450,
    zIndex: 102,
    minimized: false,
  },
]

export default function Desktop() {
  const [windows, setWindows] = useState<WindowData[]>(initialWindows)
  const highestZIndex = useRef(102)
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

  return (
    <div className="desktop">
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
