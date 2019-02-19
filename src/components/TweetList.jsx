import React from 'react';
import Tweet from './Tweet';
import { v4 } from 'uuid';


const tweetList = [
  {
    name: 'Paige Williams',
    username: 'p__williams',
    body: 'Arent business students the worst.',
    profilePic: 'https://avatars3.githubusercontent.com/u/26071756?s=460&v=4',
    likes: 3,
    comments: 0,
    id: v4()
  },
  {
    name: 'Lil\' Kim',
    username: 'LilKim',
    body: 'Congrats to Cardi B! Love you boo',
    profilePic: 'https://pbs.twimg.com/profile_images/1084603052101906432/qOAqofr2_400x400.jpg',
    likes: 4024,
    comments: 254,
    id: v4()
  },
  {
    name: 'Jenna Wortham',
    username: 'jennydeluxe',
    body: 'i really really need to know what face serums are giving BTS that Swarovski shine',
    profilePic: 'https://pbs.twimg.com/profile_images/1059188052239757313/6SoYL4jY_400x400.jpg',
    likes: 423,
    comments: 21,
    id: v4()
  }
];

const styles = {
  tweetList: {
    display: 'flex',
    backgroundColor: '#E6ECF0',
    width: '40%',
    flexDirection: 'column'
  }
};


class TweetList extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isLiked: false,
      likedTweet: null
    };
  }


  render(){
  
    return(
      <div style={styles.tweetList}>

        {tweetList.map((tweet) =>
          <Tweet name = {tweet.name}
            username = {tweet.username}
            body = {tweet.body}
            profilePic = {tweet.profilePic}
            likes = {tweet.likes}
            comments = {tweet.comments}
            key = {tweet.id}/>
        )}

      </div>
    );
  }
}

export default TweetList;
