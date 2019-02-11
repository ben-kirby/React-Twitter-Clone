import React from 'react';
import Tweet from './Tweet';

const tweetList = [
  {
    name: 'Paige Williams',
    username: 'p__williams',
    body: 'Arent business students the worst.',
    profilePic: `https://avatars3.githubusercontent.com/u/26071756?s=460&v=4`
  },
  {
    name: 'Lil\' Kim',
    username: 'LilKim',
    body: 'Congrats to Cardi B! Love you boo',
    profilePic: "https://pbs.twimg.com/profile_images/1084603052101906432/qOAqofr2_400x400.jpg"
  },
  {
    name: 'Jenna Wortham',
    username: 'jennydeluxe',
    body: 'i really really need to know what face serums are giving BTS that Swarovski shine',
    profilePic: "https://pbs.twimg.com/profile_images/1059188052239757313/6SoYL4jY_400x400.jpg"
  }
];

function TweetList(props){
  const tweetListStyles = {
    display: 'flex',
    backgroundColor: '#E6ECF0',
    width: '40%',
    flexDirection: 'column'
  };



  return(
    <div style={tweetListStyles}>

      {tweetList.map((tweet, index) =>
        <Tweet name = {tweet.name}
          username = {tweet.username}
          body = {tweet.body}
          profilePic = {tweet.profilePic}
          key = {index}/>
      )}

    </div>
  );
}

export default TweetList;
