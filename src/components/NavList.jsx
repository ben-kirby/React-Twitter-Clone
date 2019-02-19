import React from 'react';

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

function NavList(){
  const buttonListStyles ={
    marginLeft: '20px',
    // alignContent: 'center'
  };

  const buttonStyles ={
    color: '#696969',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    border: '1px solid #696969',
    fontSize: '16px',
  };

  return(
    <div style={buttonListStyles}>
      {buttonList.map((button, index) =>
        <button key={index} style={buttonStyles}>{button.name}</button>
      )}
    </div>
  );
}

export default NavList;
