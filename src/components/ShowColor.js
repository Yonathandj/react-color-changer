import React from 'react'

const ShowColor = ({ Color, colorHex }) => {
  const backgroundColor = {
    backgroundColor: Color
  }
  return (
    <div className='color-box' style={backgroundColor}>
        <p>{ Color ? Color : "Empty Color" }</p>
        <p>{ colorHex ? colorHex : null }</p>
    </div>
  )
}

export default ShowColor