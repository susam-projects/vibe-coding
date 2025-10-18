import './apps.css'

export default function NotepadApp() {
  return (
    <div className="notepad-app">
      Welcome to Windows Desktop Simulator!
      {'\n\n'}
      This is a simple notepad window. You can drag this window around the screen by clicking and holding the
      title bar.
      {'\n\n'}
      Try double-clicking the folders on the desktop to open them!
      {'\n\n'}
      You can also launch applications from the Start menu.
    </div>
  )
}
