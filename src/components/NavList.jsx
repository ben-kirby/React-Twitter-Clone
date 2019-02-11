import React from 'react';

function NavList(props){
  const buttonListStyles ={
    marginLeft: '20px',
    // alignContent: 'center'
  }

  const buttonStyles ={
    border: 'none',
    color: '#DCDCDC',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    border: '1px solid #DCDCDC',
    fontSize: '16px',
    backgroundColor: 'white'
  }
  return(
    <div style={buttonListStyles}>
      <button style={buttonStyles}>Home</button>
      <button style={buttonStyles}>Notifications</button>
      <button style={buttonStyles}>Followers</button>
    </div>
  );
}

export default NavList;
