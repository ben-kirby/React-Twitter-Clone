import React from 'react';
import PropTypes from 'prop-types';
import Profile from './miscComponents/profilePic';

import Icon from '@mdi/react';
import { mdiComment, mdiTwitterRetweet, mdiHeart } from '@mdi/js';

const styles = {
  tweetBox: {
    border: 'none',
    backgroundColor: 'white',
    margin: '10px 10px 0px 10px',
    padding: '5px',
    fontFamily: 'Arial'
  },
  image: {
    height: '40px',
    width: '40px',
    border: '3px solid lightgrey',
    borderRadius: '25rem',
  },
  profilePic: {
    height: '30px',
    width: '30px',
    margin: '5px 0px 0px 5px'
  },
  tweetContent: {
    margin: '-45px 5px 0px 60px',
    paddingBottom: '3px'
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '15px'
  },
  icon: {
    height: '20px',
    width: '20px',
    marginRight: '5px',
    fill: 'grey'
  },
  iconRow: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '5px',
    color: 'grey'
  }
};


class Tweet extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      isLiked:false,
      likeCount: props.likes
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let likeCount = this.props.likes;
    this.setState({isLiked: !this.state.isLiked});

    if (this.state.isLiked === false) {
      likeCount+=1;

      // return likeCount
    }
    this.setState({likeCount: likeCount});
  }


  render(){
    let likeStyle = null;

    if (this.state.isLiked === true) {
      likeStyle = {
        height: '20px',
        width: '20px',
        marginRight: '5px',
        fill: 'red'
      };
    } else {
      likeStyle = {
        height: '20px',
        width: '20px',
        marginRight: '5px',
        fill: 'grey'
      };
    }


    return (
      <div>
        <div style={styles.tweetBox}>
          <Profile
            source = {this.props.profilePic}
          />
          <div style={styles.tweetContent}>
            <p><strong>{this.props.name}</strong> @{this.props.username}</p>
            <p>{this.props.body}</p>
          </div>

          <div style={styles.flex}>
            <div style={styles.iconRow}>
              <Icon style={styles.icon} path={mdiComment}/>
              <p>{this.props.comments}</p>
            </div>

            <div style={styles.iconRow}>
              <Icon style={styles.icon} path={mdiTwitterRetweet}/>
            </div>

            <div style={styles.iconRow}>
              <Icon onClick={this.handleClick} style={likeStyle} path={mdiHeart}/>
              <p>{this.state.likeCount}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Tweet.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  body: PropTypes.string,
  profilePic: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.number
};

export default Tweet;
