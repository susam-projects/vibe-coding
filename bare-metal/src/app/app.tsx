import { useState } from 'react';
import { Note } from '../shared/types';
import { initialNotes } from '../shared/initialNotes';
import { NoteForm } from '../components/NoteForm';
import { NoteList } from '../components/NoteList';
import { Modal } from '../components/Modal';
import styles from './app.module.css';

export function App() {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNote = (title: string, content: string) => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      content,
      createdAt: new Date(),
    };
    setNotes([newNote, ...notes]);
    setIsModalOpen(false);
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Bare Metal Notes</h1>
          <button
            className={styles.addButton}
            onClick={() => setIsModalOpen(true)}
          >
            + Add Note
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <NoteList notes={notes} onDelete={handleDeleteNote} />
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NoteForm onAdd={handleAddNote} />
      </Modal>
    </div>
  );
}

export default App;
