import React from 'react'

const SetColor = ({ setColor, Color, inputRef }) => {
  return (
    <div>
      <input
        type="text" 
        placeholder="Add color name"
        value={Color}
        ref={inputRef}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  )
}

export default SetColor