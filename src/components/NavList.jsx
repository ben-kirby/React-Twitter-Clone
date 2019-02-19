import React from 'react';
import Button from './miscComponents/button'

const buttonList = [
  {
    name: 'Home'
  },
  {
    name: 'Notifications'
  },
  {
    name: 'Followers'
  }
];

const styles = {
  buttonList: {
    marginLeft: '20px',
    display: 'flex'
    // alignContent: 'center'
  },
  button: {
    color: '#696969',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    border: '1px solid #696969',
    fontSize: '16px',
  }
}

function NavList(){
  return(
    <div style={styles.buttonList}>
      {buttonList.map((button, index) =>
        <Button
          buttonText = {button.name}
          style = {styles.button}
          key = {index}
        />
      )}
    </div>
  );
}

export default NavList;
