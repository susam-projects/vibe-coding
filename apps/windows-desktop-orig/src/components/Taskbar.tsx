import { useState, useEffect } from 'react'
import type { WindowData } from '../types'

interface TaskbarProps {
  windows: WindowData[]
  onWindowToggle: (id: string) => void
}

export default function Taskbar({ windows, onWindowToggle }: TaskbarProps) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      setTime(`${hours}:${minutes}`)
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [])

  // Sort windows by z-index (most recent first)
  const sortedWindows = [...windows].sort((a, b) => b.zIndex - a.zIndex)

  return (
    <div className="taskbar">
      <button className="start-button">⊞</button>
      <div className="taskbar-apps">
        {sortedWindows.map((window) => (
          <button
            key={window.id}
            className={`taskbar-app ${!window.minimized ? 'active' : ''}`}
            onClick={() => onWindowToggle(window.id)}
          >
            {window.title}
          </button>
        ))}
      </div>
      <div className="taskbar-clock">{time}</div>
    </div>
  )
}
