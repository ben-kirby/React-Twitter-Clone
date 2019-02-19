import React from 'react'

function Button(props){
  return(
    <div>
      <button style={props.style}>{props.buttonText}</button>
    </div>
  )
}

export default Button
