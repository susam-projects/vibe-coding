import { useRef, useEffect } from 'react'
import type { WindowData } from '../types'

interface WindowProps {
  window: WindowData
  onDragStart: (id: string, offsetX: number, offsetY: number) => void
  onDrag: (id: string, clientX: number, clientY: number) => void
  onDragEnd: () => void
  onMinimize: (id: string) => void
  onClose: (id: string) => void
  onBringToFront: (id: string) => void
}

export default function Window({
  window: windowData,
  onDragStart,
  onDrag,
  onDragEnd,
  onMinimize,
  onClose,
  onBringToFront,
}: WindowProps) {
  const windowRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        onDrag(windowData.id, e.clientX, e.clientY)
      }
    }

    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false
        onDragEnd()
      }
    }

    if (isDragging.current) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [windowData.id, onDrag, onDragEnd])

  const handleTitleBarMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return // Only left click

    const rect = windowRef.current?.getBoundingClientRect()
    if (!rect) return

    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top

    isDragging.current = true
    onDragStart(windowData.id, offsetX, offsetY)
    e.preventDefault()
  }

  const handleMouseDown = () => {
    onBringToFront(windowData.id)
  }

  if (windowData.minimized) {
    return null
  }

  return (
    <div
      ref={windowRef}
      className={`window ${isDragging.current ? 'dragging' : ''}`}
      style={{
        left: `${windowData.x}px`,
        top: `${windowData.y}px`,
        width: `${windowData.width}px`,
        height: `${windowData.height}px`,
        zIndex: windowData.zIndex,
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="window-titlebar"
        onMouseDown={handleTitleBarMouseDown}
      >
        <span className="window-title">{windowData.title}</span>
        <div className="window-controls">
          <button
            className="window-control minimize"
            onClick={(e) => {
              e.stopPropagation()
              onMinimize(windowData.id)
            }}
          >
            −
          </button>
          <button
            className="window-control close"
            onClick={(e) => {
              e.stopPropagation()
              onClose(windowData.id)
            }}
          >
            ×
          </button>
        </div>
      </div>
      <div className="window-content">{windowData.content}</div>
    </div>
  )
}
