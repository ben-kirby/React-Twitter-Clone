import React from 'react';

function Bio(props){
  const bioStyles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'LightSalmon',
    width: '30%'
  }
  return (
    <div style={bioStyles}>
      <h1>Bio</h1>
    </div>
  );
}

export default Bio;
