import { useState, useEffect } from 'react'
import StartMenu from './StartMenu'
import type { WindowData } from '../types'

interface TaskbarProps {
  windows: WindowData[]
  onWindowToggle: (id: string) => void
  onAppLaunch: (appId: string) => void
}

export default function Taskbar({ windows, onWindowToggle, onAppLaunch }: TaskbarProps) {
  const [time, setTime] = useState('')
  const [startMenuOpen, setStartMenuOpen] = useState(false)

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

  const handleStartMenuItemClick = (appId: string) => {
    setStartMenuOpen(false)
    onAppLaunch(appId)
  }

  return (
    <>
      <StartMenu isOpen={startMenuOpen} onItemClick={handleStartMenuItemClick} />
      <div className="taskbar">
        <button
          className={`start-button ${startMenuOpen ? 'active' : ''}`}
          onClick={() => setStartMenuOpen(!startMenuOpen)}
        >
          ⊞
        </button>
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
    </>
  )
}
