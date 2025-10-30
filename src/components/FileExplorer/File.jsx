import { useState } from 'react'

const File = ({
  id,
  name,
  setName,
  setShowIcons,
  showIcons,
  handleDeleteNode,
  renameHandler,
  showRenameInput
}) => {
  const [fileName, setFileName] = useState(name)
  return (
    <div id={id} style={{ marginLeft: '25px' }} className="file">
      <div
        onMouseEnter={() =>
          setShowIcons(prev => ({
            ...prev,
            deleteIcon: true,
            renameIcon: true
          }))
        }
        onMouseLeave={() =>
          setShowIcons(prev => ({
            ...prev,
            deleteIcon: false,
            renameIcon: false
          }))
        }
      >
        <span role="img" aria-label="file">
          📄{' '}
          {showRenameInput ? (
            <input
              htmlSize={4}
              width="auto"
              autoFocus
              type="text"
              value={fileName}
              onChange={e => {
                setFileName(e.target.value)
                setName(e.target.value)
              }}
              onBlur={renameHandler}
              onKeyDown={e => {
                e.keyCode === 13 && renameHandler()
              }}
            />
          ) : (
            fileName
          )}
        </span>
        {showIcons.renameIcon && (
          <span
            role="img"
            aria-label="rename"
            className="rename-icon"
            onClick={e => {
              e.stopPropagation()
              renameHandler()
            }}
            style={{ margin: '0 5px' }}
          >
            ✏️
          </span>
        )}
        {showIcons.deleteIcon && (
          <span
            role="img"
            aria-label="remove"
            onClick={e => {
              e.stopPropagation()
              handleDeleteNode(id)
            }}
            style={{ margin: '0 5px' }}
          >
            ❌
          </span>
        )}
      </div>
    </div>
  )
}

export default File