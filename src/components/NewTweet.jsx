import React from 'react';
import ReactDOM from 'react-dom'
import Button from './miscComponents/button';
import NewTweetModal from './NewTweetModal';

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  display:{
    display: 'flex'
  },
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
};

class NewTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
    this.displayModal = this.displayModal.bind(this);
  }




  displayModal(){
    // console.log("hello");
    this.setState({modal: !this.state.modal});
  }

  render(){
    let modalContent = null;
    if (this.state.modal === true) {
      modalContent = <NewTweetModal/>;
    }


    return(
      <div style={styles.display}>

        <Button
          style={styles.buttonStyles}
          buttonText = 'New Tweet'
          action = {this.displayModal}
        />
      {modalContent}
      </div>
    );
  }
}


export default NewTweet;
