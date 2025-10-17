export interface FileSystemItem {
  id: string
  name: string
  type: 'folder' | 'file'
  icon: string
  children?: FileSystemItem[]
}

export const fileSystem: FileSystemItem[] = [
  {
    id: 'documents',
    name: 'Documents',
    type: 'folder',
    icon: '📁',
    children: [
      {
        id: 'work',
        name: 'Work',
        type: 'folder',
        icon: '📁',
        children: [
          { id: 'report', name: 'Report.docx', type: 'file', icon: '📄' },
          { id: 'presentation', name: 'Presentation.pptx', type: 'file', icon: '📊' },
        ],
      },
      {
        id: 'personal',
        name: 'Personal',
        type: 'folder',
        icon: '📁',
        children: [
          { id: 'notes', name: 'Notes.txt', type: 'file', icon: '📝' },
          { id: 'ideas', name: 'Ideas.txt', type: 'file', icon: '📝' },
        ],
      },
      { id: 'resume', name: 'Resume.pdf', type: 'file', icon: '📄' },
    ],
  },
  {
    id: 'pictures',
    name: 'Pictures',
    type: 'folder',
    icon: '📁',
    children: [
      {
        id: 'vacation',
        name: 'Vacation 2024',
        type: 'folder',
        icon: '📁',
        children: [
          { id: 'beach1', name: 'Beach1.jpg', type: 'file', icon: '🖼️' },
          { id: 'beach2', name: 'Beach2.jpg', type: 'file', icon: '🖼️' },
          { id: 'sunset', name: 'Sunset.jpg', type: 'file', icon: '🖼️' },
        ],
      },
      {
        id: 'family',
        name: 'Family',
        type: 'folder',
        icon: '📁',
        children: [
          { id: 'family1', name: 'Family_2024.jpg', type: 'file', icon: '🖼️' },
        ],
      },
      { id: 'wallpaper', name: 'Wallpaper.png', type: 'file', icon: '🖼️' },
    ],
  },
  {
    id: 'downloads',
    name: 'Downloads',
    type: 'folder',
    icon: '📁',
    children: [
      { id: 'installer', name: 'installer.exe', type: 'file', icon: '⚙️' },
      { id: 'archive', name: 'archive.zip', type: 'file', icon: '🗜️' },
      { id: 'readme', name: 'README.txt', type: 'file', icon: '📝' },
    ],
  },
  {
    id: 'projects',
    name: 'Projects',
    type: 'folder',
    icon: '📁',
    children: [
      {
        id: 'web-app',
        name: 'Web App',
        type: 'folder',
        icon: '📁',
        children: [
          { id: 'index', name: 'index.html', type: 'file', icon: '🌐' },
          { id: 'style', name: 'style.css', type: 'file', icon: '🎨' },
          { id: 'script', name: 'script.js', type: 'file', icon: '📜' },
        ],
      },
    ],
  },
]

export function findItemByPath(path: string[]): FileSystemItem | null {
  if (path.length === 0) return null

  let current: FileSystemItem | undefined = fileSystem.find((item) => item.id === path[0])

  for (let i = 1; i < path.length && current; i++) {
    current = current.children?.find((item) => item.id === path[i])
  }

  return current || null
}

export function getItemsAtPath(path: string[]): FileSystemItem[] {
  if (path.length === 0) return fileSystem

  const folder = findItemByPath(path)
  return folder?.children || []
}
