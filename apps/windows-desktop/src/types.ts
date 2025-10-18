import type { ReactNode } from 'react'

export interface WindowData {
  id: string
  title: string
  content: ReactNode
  x: number
  y: number
  width: number
  height: number
  zIndex: number
  minimized: boolean
}
