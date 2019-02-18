import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@mdi/react'
import { mdiComment, mdiTwitterRetweet, mdiHeart } from '@mdi/js'


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
    height: '25px',
    width: '25px',
    marginRight: '5px'
  },
  iconRow: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '5px'
  }
}

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
    console.log(likeCount);
    this.setState({isLiked: !this.state.isLiked});
    console.log(this.state.isLiked);

    if (this.state.isLiked === true) {
      likeCount+=1
      // return likeCount
    }
    else if (this.state.isLIked === false) {
      likeCount-=1
      // return likeCount
    }
    this.setState({likeCount: likeCount});
  }


render(){


    return (
      <div>
        <div style={styles.tweetBox}>
          <div style={styles.profilePic}>
            <img style={styles.image} src={`${this.props.profilePic}`}></img>
          </div>
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
              <Icon onClick={this.handleClick} style={styles.icon} path={mdiHeart}/>
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
  profilePic: PropTypes.string
};

export default Tweet;
