import Window from './Window'
import Taskbar from './Taskbar'
import DesktopIcon from './DesktopIcon'
import { fileSystem } from '../fileSystem'
import { useWindowManager } from '../hooks/useWindowManager'
import './Desktop.css'

export default function Desktop() {
  const {
    windows,
    handleDragStart,
    handleDrag,
    handleDragEnd,
    handleMinimize,
    handleClose,
    bringToFront,
    handleAppLaunch,
    handleFolderOpen,
  } = useWindowManager()

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
      <Taskbar windows={windows} onWindowToggle={handleMinimize} onAppLaunch={handleAppLaunch} />
    </div>
  )
}
