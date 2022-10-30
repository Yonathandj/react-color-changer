import React from 'react'

const ShowColor = ({ Color }) => {
  const backgroundColor = {
    backgroundColor: Color ? `${Color}` : null,
  }
  return (
    <div 
      className='color-box'
      style={backgroundColor}>
        { Color === "" ? "Empty Color" : `${Color}` } </div>
  )
}

export default ShowColor