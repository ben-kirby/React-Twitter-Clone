import React from 'react';

function TweetList(props){
  const tweetListStyles = {
    display: 'flex',
    backgroundColor: 'teal',
    width: '40%'
  }
  return(
    <div style={tweetListStyles}>
      <h1>Tweet List</h1>
    </div>
  );
}

export default TweetList;
