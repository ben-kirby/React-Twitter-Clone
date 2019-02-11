import React from 'react';

function RecommendedList(props){
  const recommendedListStyles = {
    display: 'flex',
    backgroundColor: 'bisque',
    height: '1000px',
    width: '30%'
  };
  return(
    <div style={recommendedListStyles}>
      <h1>Recommended List</h1>
    </div>
  );
}

export default RecommendedList;
