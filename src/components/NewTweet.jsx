import React from 'react';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBContainer } from 'mdbreact';
import Button from './miscComponents/button';
import NewTweetModal from './NewTweetModal';


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
    };
    this.displayModal = this.displayModal.bind(this);
  }
  displayModal(){
    // console.log("hello");
    this.setState({modal: !this.state.modal});
  }

  render(){
    return(
      <div style={styles.display}>

        <MDBContainer>
          <MDBPopover component="button" placement="bottom" popoverBody="New Tweet" className="btn btn-default">
            <MDBPopoverBody>
            <NewTweetModal/>
            </MDBPopoverBody>
          </MDBPopover>
        </MDBContainer>


        <Button
          style={styles.buttonStyles}
          buttonText = 'New Tweet'
          action = {this.displayModal}
        />

      </div>
    );
  }
}


export default NewTweet;
