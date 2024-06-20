import React from 'react'

const MakeButton = ({ buttonText, changeButtonText }) => {

  return (
    <button onClick={changeButtonText}>{buttonText}</button>

  )
}



export default MakeButton
