import type { ReactNode } from 'react'
import NotepadApp from './NotepadApp'
import AboutApp from './AboutApp'
import FileExplorer from './FileExplorer'

export interface AppDefinition {
  id: string
  title: string
  icon: string
  defaultWidth: number
  defaultHeight: number
  content: ReactNode
}

export const apps: Record<string, AppDefinition> = {
  notepad: {
    id: 'notepad',
    title: 'Notepad',
    icon: '📝',
    defaultWidth: 500,
    defaultHeight: 400,
    content: <NotepadApp />,
  },
  about: {
    id: 'about',
    title: 'About',
    icon: 'ℹ️',
    defaultWidth: 450,
    defaultHeight: 470,
    content: <AboutApp />,
  },
  explorer: {
    id: 'explorer',
    title: 'File Explorer',
    icon: '📁',
    defaultWidth: 700,
    defaultHeight: 500,
    content: <FileExplorer initialPath={[]} />,
  },
}

export function getAppDefinition(appId: string): AppDefinition | null {
  return apps[appId] || null
}

export function getAppList(): AppDefinition[] {
  return Object.values(apps)
}
