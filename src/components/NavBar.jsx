import React from 'react';
import NavList from './NavList';
import Search from './Search';
import NewTweet from './NewTweet';

function NavBar(props){
  const navbarStyles ={
    display: 'flex',
    border: '1 solid black',
    // paddingTop: '50px',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100px'

  };

  const rightStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '20px'
  };

  return (
    <div style={navbarStyles}>
      <NavList/>
      <div style={rightStyles}>
        <Search/>
        <NewTweet/>
      </div>
    </div>
  );
}

export default NavBar;
