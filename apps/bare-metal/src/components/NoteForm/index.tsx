import { useState } from 'react';
import styles from './styles.module.css';

interface NoteFormProps {
  onAdd: (title: string, content: string) => void;
}

export function NoteForm({ onAdd }: NoteFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onAdd(title, content);
      setTitle('');
      setContent('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Create New Note</h2>
      <div className={styles.inputGroup}>
        <input
          type="text"
          className={styles.input}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <textarea
          className={styles.textarea}
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Add Note
      </button>
    </form>
  );
}
