import React from 'react'
import Button from './miscComponents/button'

const styles = {
    modal: {
      display: 'none',
      position: 'fixed',
      zIndex: '10',
      left: '0',
      top: '0',
      width: '100%', /* Full width */
      height: '100%', /* Full height */
      overflow: 'auto', /* Enable scroll if needed */
      backgroundColor: 'rgb(0,0,0)', /* Fallback color */
      backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */
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
  }

class NewTweetModal extends React.Component {
  constructor(props) {
    super(props)

  }


  render(){
    return(
      <div>
        <input></input>
        <div>
          <Button buttonText = 'Cancel'/>
          <Button buttonText = 'Submit'/>
        </div>


      </div>
    )
  }
}

export default NewTweetModal
