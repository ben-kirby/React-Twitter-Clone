import React from 'react';
import Button from './miscComponents/button';

const styles = {
  modal: {
    display: 'none',
    position: 'fixed',
    zIndex: '10',
    left: '0',
    top: '0',
    width: '100%', /* Full width */
    height: '100%', /* Full height */
    overflow: 'auto',
  },
  modalContent: {
    backgroundColor: '#fefefe',
    margin: '15% auto', /* 15% from the top and centered */
    padding: '20px',
    border: '1px solid #888',
    width: '80%', /* Could be more or less, depending on screen size */
  },
  close: {
    color: '#aaa',
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold',
  }
};


function NewTweetModal(){
  return(
    <div>
      input
    </div>
  );
}





export default NewTweetModal;
