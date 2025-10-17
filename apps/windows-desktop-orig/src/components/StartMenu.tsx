interface StartMenuProps {
  isOpen: boolean
  onItemClick: (appId: string) => void
}

interface MenuItem {
  id: string
  name: string
  icon: string
}

const apps: MenuItem[] = [
  { id: 'explorer', name: 'File Explorer', icon: '📁' },
  { id: 'notepad', name: 'Notepad', icon: '📝' },
  { id: 'about', name: 'About', icon: 'ℹ️' },
]

export default function StartMenu({ isOpen, onItemClick }: StartMenuProps) {
  if (!isOpen) return null

  return (
    <div className="start-menu">
      <div className="start-menu-header">Windows Desktop</div>
      <div className="start-menu-apps">
        <div className="start-menu-section">
          <div className="start-menu-section-title">Applications</div>
          {apps.map((app) => (
            <div
              key={app.id}
              className="start-menu-item"
              onClick={() => onItemClick(app.id)}
            >
              <div className="start-menu-item-icon">{app.icon}</div>
              <div className="start-menu-item-text">{app.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
