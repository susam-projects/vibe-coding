import { useState } from 'react'
import type { FileSystemItem } from '../fileSystem'
import { getItemsAtPath, findItemByPath } from '../fileSystem'

interface FileExplorerProps {
  initialPath: string[]
}

export default function FileExplorer({ initialPath }: FileExplorerProps) {
  const [currentPath, setCurrentPath] = useState<string[]>(initialPath)
  const items = getItemsAtPath(currentPath)

  const handleItemDoubleClick = (item: FileSystemItem) => {
    if (item.type === 'folder') {
      setCurrentPath([...currentPath, item.id])
    }
  }

  const handleBreadcrumbClick = (index: number) => {
    setCurrentPath(currentPath.slice(0, index + 1))
  }

  const getBreadcrumbPath = () => {
    const breadcrumbs: { name: string; index: number }[] = [{ name: 'This PC', index: -1 }]

    currentPath.forEach((_id, index) => {
      const pathToItem = currentPath.slice(0, index + 1)
      const item = findItemByPath(pathToItem)
      if (item) {
        breadcrumbs.push({ name: item.name, index })
      }
    })

    return breadcrumbs
  }

  return (
    <>
      <div className="explorer-toolbar">
        <div className="explorer-breadcrumb">
          {getBreadcrumbPath().map((crumb, idx) => (
            <span key={idx}>
              <span
                className="breadcrumb-item"
                onClick={() => {
                  if (crumb.index === -1) {
                    setCurrentPath([])
                  } else {
                    handleBreadcrumbClick(crumb.index)
                  }
                }}
              >
                {crumb.name}
              </span>
              {idx < getBreadcrumbPath().length - 1 && (
                <span className="breadcrumb-separator"> › </span>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="explorer-content">
        {items.map((item) => (
          <div
            key={item.id}
            className="explorer-item"
            onDoubleClick={() => handleItemDoubleClick(item)}
          >
            <div className="explorer-item-icon">{item.icon}</div>
            <div className="explorer-item-name">{item.name}</div>
          </div>
        ))}
      </div>
    </>
  )
}
