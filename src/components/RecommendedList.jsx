import React from 'react';

const recommendedList = [
  {
    name: 'Cardi B',
    username: 'iamcardib',
    profilePic: `https://pbs.twimg.com/profile_images/1054790574086201345/hnnkdKJm_400x400.jpg`
  },
  {
    name: 'Ariana Grande',
    username: 'arianagrande',

    profilePic: `https://pbs.twimg.com/profile_images/1090935294684102657/m1JrCsCP_400x400.jpg`
  },
  {
    name: 'Chrissy Teigen',
    username: 'chrissyteigen',
    profilePic: `https://pbs.twimg.com/profile_images/680889019073454080/GMxn5fuf_400x400.jpg`
  }
]

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
