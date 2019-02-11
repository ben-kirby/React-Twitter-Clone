import React from 'react';
import Bio from './Bio';
import NavBar from './NavBar';
import TweetList from './TweetList';
import RecommendedList from './RecommendedList';

function App(props){
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
    </div>
  );
}

export default App;
