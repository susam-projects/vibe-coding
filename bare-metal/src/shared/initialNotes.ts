import { Note } from './types';

export const initialNotes: Note[] = [
  {
    id: crypto.randomUUID(),
    title: 'Welcome to Bare Metal Notes',
    content: 'This is a note-taking app with a unique industrial metal aesthetic. Each note is rendered as a metal plate secured with screws in the corners.',
    createdAt: new Date('2024-01-15T10:30:00'),
  },
  {
    id: crypto.randomUUID(),
    title: 'Design Philosophy',
    content: 'The design incorporates brushed metal textures, realistic shadows, and subtle rust effects to create an authentic industrial feel. Every element is carefully crafted to evoke the sensation of working with physical metal sheets.',
    createdAt: new Date('2024-01-16T14:20:00'),
  },
  {
    id: crypto.randomUUID(),
    title: 'Technical Implementation',
    content: 'Built with React 19, TypeScript, and CSS modules. The metal textures use a combination of SVG filters, CSS gradients, and blend modes to achieve the realistic appearance.',
    createdAt: new Date('2024-01-17T09:15:00'),
  },
  {
    id: crypto.randomUUID(),
    title: 'Future Ideas',
    content: 'Potential enhancements:\n- Drag and drop to reorder notes\n- Color coding with different metal finishes\n- Export notes as JSON\n- Local storage persistence\n- Dark/light mode variants',
    createdAt: new Date('2024-01-18T16:45:00'),
  },
];
