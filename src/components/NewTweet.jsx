import React from 'react';
import Button from './miscComponents/button'

const styles = {
  buttonStyles: {
    border: '2px solid #4682B4',
    color: '#696969',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    backgroundColor: 'white',
    borderRadius: '25rem'
  }
}

function NewTweet(){
  return(
    <div>
      <Button
        style={styles.buttonStyles}
        buttonText = 'New Tweet'
      />
    </div>
  );
}

export default NewTweet;
