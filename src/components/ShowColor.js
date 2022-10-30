import React from 'react'

const ShowColor = ({ color, colorHex, colorText }) => {
  const backgroundColor = {
    backgroundColor: color,
    color: colorText ? "black" : "white"
  }
  return (
    <div className='color-box' style={backgroundColor}>
        <p>{ color ? color : "Empty Color" }</p>
        <p>{ colorHex ? colorHex : null }</p>
    </div>
  )
}

export default ShowColor