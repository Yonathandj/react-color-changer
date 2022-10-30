import React from 'react'
import colorNames from 'colornames';

const SetColor = ({ setColor, color, inputRef, setColorHex, colorText, setColorText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="setColor">Add color name</label>
      <input
        id='setColor'
        type="text" 
        placeholder="Add color name"
        value={color}
        ref={inputRef}
        onChange={(e) => {
          setColor(e.target.value);
          setColorHex(colorNames(e.target.value));
        }}
      />
      <button type='button' onClick={() => setColorText(!colorText)}>TOOGLE TEXT COLOR</button>
    </form>
  )
}

export default SetColor