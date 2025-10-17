import type { FileSystemItem } from '../fileSystem'

interface DesktopIconProps {
  item: FileSystemItem
  onDoubleClick: (item: FileSystemItem) => void
}

export default function DesktopIcon({ item, onDoubleClick }: DesktopIconProps) {
  const handleDoubleClick = () => {
    onDoubleClick(item)
  }

  return (
    <div className="desktop-icon" onDoubleClick={handleDoubleClick}>
      <div className="desktop-icon-image">{item.icon}</div>
      <div className="desktop-icon-label">{item.name}</div>
    </div>
  )
}
