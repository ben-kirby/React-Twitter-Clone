import React from 'react';
import Bio from './Bio';
import NavBar from './NavBar';
import TweetList from './TweetList';
import RecommendedList from './RecommendedList';
import NewTweetModal from './NewTweetModal'

function App(){
  const bodyStyle = {
    display: 'flex',
    backgroundColor: '#E6ECF0',
  };
  return (
    <div>
      <div>
        <NewTweetModal/>
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
