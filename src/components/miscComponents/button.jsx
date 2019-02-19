import React from 'react'

function Button(props){
  return(
    <div>
      <button onClick={props.action} style={props.style}>{props.buttonText}</button>
    </div>
  )
}

export default Button
