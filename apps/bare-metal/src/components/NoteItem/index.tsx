import { Note } from '../../shared/types';
import { Screw } from '../Screw';
import styles from './styles.module.css';

interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
}

export function NoteItem({ note, onDelete }: NoteItemProps) {
  return (
    <div className={styles.note}>
      <Screw className={`${styles.screw} ${styles.screwTopLeft}`} />
      <Screw className={`${styles.screw} ${styles.screwTopRight}`} />
      <Screw className={`${styles.screw} ${styles.screwBottomLeft}`} />
      <Screw className={`${styles.screw} ${styles.screwBottomRight}`} />

      <div className={styles.content}>
        <h3 className={styles.title}>{note.title}</h3>
        <p className={styles.text}>{note.content}</p>
        <div className={styles.footer}>
          <small className={styles.date}>
            {new Date(note.createdAt).toLocaleString()}
          </small>
          <button
            className={styles.deleteButton}
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
