import React from 'react'

const SetColor = ({ setColor, Color }) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Add color name"
        value={Color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  )
}

export default SetColor