import './apps.css'

export default function AboutApp() {
  return (
    <div className="about-app">
      <div className="about-icon">💻</div>
      <h2 className="about-title">Windows Desktop Simulator</h2>
      <p className="about-description">
        A desktop environment simulation built with React, TypeScript and Vite.
      </p>
      <div className="about-features">
        <div className="about-features-title">Features:</div>
        <ul>
          <li>Draggable windows</li>
          <li>Window management (minimize, close)</li>
          <li>Taskbar with active windows</li>
          <li>Live clock</li>
          <li>Desktop icons and folders</li>
          <li>File explorer with navigation</li>
          <li>Start menu with applications</li>
        </ul>
      </div>
    </div>
  )
}
