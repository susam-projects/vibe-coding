import { useState, useEffect } from 'react'
import './App.css'
import IceTexture from './components/IceTexture'

function App() {
  const [notes, setNotes] = useState([])
  const [editingNote, setEditingNote] = useState(null)
  const [isEditorOpen, setIsEditorOpen] = useState(false)

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('icy-notes')
    if (savedNotes.length > 2) {
      try {
        setNotes(JSON.parse(savedNotes))
      } catch (e) {
        console.error('Failed to load notes:', e)
      }
    } else {
      // Initialize with test data if no saved notes
      setNotes(getTestData())
    }
  }, [])

  // Test data generator
  const getTestData = () => {
    const now = new Date()

    return [
      {
        id: 1,
        title: 'State Management Refactor',
        content: 'Finally cracked it. The issue was in how we were batching updates—too eager, too optimistic. Sometimes the solution is to slow down, let each piece settle before moving to the next.',
        createdAt: new Date(now - 2 * 60 * 1000).toISOString(), // 2 minutes ago
        updatedAt: new Date(now - 2 * 60 * 1000).toISOString()
      },
      {
        id: 2,
        title: '3am Debugging',
        content: 'The tests keep failing but only in CI. Works perfectly local. There\'s something about this isolation that makes everything clearer though—just me, the terminal, and the problem. No distractions.',
        createdAt: new Date(now - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
        updatedAt: new Date(now - 3 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 3,
        title: 'API Design Decision',
        content: 'REST vs GraphQL debate with the team yesterday. We went with REST. Sometimes the simpler path is the right one, even if it feels less exciting. Consistency matters more than novelty.',
        createdAt: new Date(now - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
        updatedAt: new Date(now - 2 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 4,
        title: 'Performance Win',
        content: 'Cut load time by 40% today. Turns out we were over-fetching on every render. The solution was right there in the docs, but sometimes you need distance to see what\'s close.',
        createdAt: new Date(now - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
        updatedAt: new Date(now - 5 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 5,
        title: 'Technical Debt',
        content: 'Found code I wrote a month ago. Already feels ancient. The shortcuts I took made sense then, but now they\'re cracks in the foundation. Need to address these before they spread.',
        createdAt: new Date(now - 12 * 24 * 60 * 60 * 1000).toISOString(), // 12 days ago
        updatedAt: new Date(now - 12 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 6,
        title: 'Initial Architecture',
        content: 'Looking back at our first whiteboard session. We were so confident about microservices. Now we\'re gradually consolidating. Growth isn\'t always expansion—sometimes it\'s learning what to let go.',
        createdAt: new Date(now - 35 * 24 * 60 * 60 * 1000).toISOString(), // 35 days ago
        updatedAt: new Date(now - 35 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 7,
        title: 'MVP Launch Notes',
        content: 'The first version shipped three months ago. So much has changed since then. Features we thought were critical are barely used. The ones users actually needed? We didn\'t even consider them. Distance teaches.',
        createdAt: new Date(now - 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days ago
        updatedAt: new Date(now - 90 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 8,
        title: '',
        content: 'Why did we choose this stack? I remember the excitement but not the reasoning. Some decisions crystallize and become permanent. We build on top of them and forget they were ever choices.',
        createdAt: new Date(now - 150 * 24 * 60 * 60 * 1000).toISOString(), // 150 days ago
        updatedAt: new Date(now - 150 * 24 * 60 * 60 * 1000).toISOString()
      }
    ]
  }

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('icy-notes', JSON.stringify(notes))
  }, [notes])

  const createNote = () => {
    const newNote = {
      id: Date.now(),
      title: '',
      content: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    setEditingNote(newNote)
    setIsEditorOpen(true)
  }

  const openNote = (note) => {
    setEditingNote({ ...note })
    setIsEditorOpen(true)
  }

  const saveNote = () => {
    if (!editingNote) return

    // Don't save if both title and content are empty
    if (!editingNote.title.trim() && !editingNote.content.trim()) {
      setIsEditorOpen(false)
      setEditingNote(null)
      return
    }

    const updatedNote = {
      ...editingNote,
      updatedAt: new Date().toISOString()
    }

    const existingIndex = notes.findIndex(n => n.id === updatedNote.id)
    if (existingIndex >= 0) {
      // Update existing note
      const newNotes = [...notes]
      newNotes[existingIndex] = updatedNote
      setNotes(newNotes)
    } else {
      // Add new note
      setNotes([updatedNote, ...notes])
    }

    setIsEditorOpen(false)
    setEditingNote(null)
  }

  const deleteNote = (id, e) => {
    e.stopPropagation()
    setNotes(notes.filter(n => n.id !== id))
  }

  const closeEditor = () => {
    saveNote()
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now - date
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return 'just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`

    return date.toLocaleDateString()
  }

  const getNoteAgeClass = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24))

    if (diffDays > 60) return 'very-old'
    if (diffDays > 7) return 'old'
    return ''
  }

  const getIceIntensity = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24))

    if (diffDays > 60) return 'heavy'
    if (diffDays > 7) return 'medium'
    return 'light'
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Glacial</h1>
        <button className="add-note-btn" onClick={createNote}>
          + New Note
        </button>
      </header>

      <div className="notes-container">
        {notes.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">❄️</div>
            <div className="empty-state-text">
              Nothing here yet<br />
              Start capturing what matters
            </div>
          </div>
        ) : (
          <div className="notes-grid">
            {notes.map(note => (
              <div
                key={note.id}
                className={`note-card ${getNoteAgeClass(note.updatedAt)}`}
                onClick={() => openNote(note)}
              >
                <IceTexture
                  intensity={getIceIntensity(note.updatedAt)}
                  seed={note.id}
                />
                <div className="note-header">
                  <h3 className="note-title">
                    {note.title || 'Untitled'}
                  </h3>
                  <button
                    className="delete-btn"
                    onClick={(e) => deleteNote(note.id, e)}
                    aria-label="Delete note"
                  >
                    <span>×</span>
                  </button>
                </div>
                <div className="note-content">
                  {note.content.slice(0, 150)}
                  {note.content.length > 150 ? '...' : ''}
                </div>
                <div className="note-timestamp">
                  {formatDate(note.updatedAt)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isEditorOpen && editingNote && (
        <div className="editor-overlay" onClick={closeEditor}>
          <div className="editor-modal" onClick={(e) => e.stopPropagation()}>
            <div className="editor-header">
              <input
                type="text"
                className="editor-title"
                placeholder="Note title..."
                value={editingNote.title}
                onChange={(e) => setEditingNote({ ...editingNote, title: e.target.value })}
                autoFocus
              />
              <button className="close-btn" onClick={closeEditor}>
                <span>×</span>
              </button>
            </div>
            <textarea
              className="editor-content"
              placeholder="Start writing your thoughts..."
              value={editingNote.content}
              onChange={(e) => setEditingNote({ ...editingNote, content: e.target.value })}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
