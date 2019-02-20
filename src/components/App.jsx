import React from 'react';
import Bio from './Bio';
import NavBar from './NavBar';
import TweetList from './TweetList';
import RecommendedList from './RecommendedList';
import MouseOverPopover from './test';

function App(){
  const bodyStyle = {
    display: 'flex',
    backgroundColor: '#E6ECF0',
  };
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div style={bodyStyle}>
        <Bio/>
        <TweetList/>
        <RecommendedList/>
      </div>
      <MouseOverPopover/>
    </div>
  );
}

export default App;
