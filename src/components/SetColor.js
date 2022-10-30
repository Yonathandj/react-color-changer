import React from 'react'
import colorNames from 'colornames';

const SetColor = ({ setColor, Color, inputRef, setColorHex }) => {
  return (
    <div>
      <input
        type="text" 
        placeholder="Add color name"
        value={Color}
        ref={inputRef}
        onChange={(e) => {
          setColor(e.target.value);
          setColorHex(colorNames(e.target.value))
        }}
      />
    </div>
  )
}

export default SetColor