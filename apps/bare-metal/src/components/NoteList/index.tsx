import { Note } from '../../shared/types';
import { NoteItem } from '../NoteItem';
import { NoteItemV2 } from '../NoteItemV2';
import styles from './styles.module.css';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void;
}

export function NoteList({ notes, onDelete }: NoteListProps) {
  if (notes.length === 0) {
    return (
      <p className={styles.emptyMessage}>
        No notes yet. Add your first note!
      </p>
    );
  }

  return (
    <div className={styles.notesList}>
      {notes.map((note, index) => {
        const ItemComponent = index % 2 === 0 ? NoteItem : NoteItemV2;
        return (
          <ItemComponent key={note.id} note={note} onDelete={onDelete} />
        );
      })}
    </div>
  );
}
