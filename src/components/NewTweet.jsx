import React from 'react';

function NewTweet(props){
  const buttonStyles ={
    border: '1px solid blue',
    color: '#DCDCDC',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    backgroundColor: 'white',
    borderRadius: '25rem'
  }
  return(
    <div>
      <button style={buttonStyles}>New Tweet</button>
    </div>
  );
}

export default NewTweet;
