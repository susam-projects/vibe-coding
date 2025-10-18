import { getAppList } from '../apps/appRegistry'

interface StartMenuProps {
  isOpen: boolean
  onItemClick: (appId: string) => void
}

export default function StartMenu({ isOpen, onItemClick }: StartMenuProps) {
  if (!isOpen) return null

  const apps = getAppList()

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
              <div className="start-menu-item-text">{app.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
