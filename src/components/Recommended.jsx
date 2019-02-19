import React from 'react';
import PropTypes from 'prop-types';
import Button from './miscComponents/button';
import Profile from './miscComponents/profilePic';

const styles = {
  recommendedBoxStyles: {
    border: 'none',
    backgroundColor: 'white',
    margin: '10px 10px 0px 10px',
    padding: '5px',
    fontFamily: 'Arial',
    borderBottom: '2px solid #E6ECF0'
  },
  imgStyle: {
    height: '40px',
    width: '40px',
    border: '3px solid lightgrey',
    borderRadius: '25rem',
  },
  profilePicStyle: {
    height: '30px',
    width: '30px',
    margin: '5px 0px 0px 5px'
  },
  tweetContentStyle: {
    margin: '-45px 5px 0px 60px',
    // paddingBottom: '3px'
  },
  followButton: {
    margin: '-200px 0px 5px 60px',
    width: '75px',
    border: '1px solid tomato',
    color: '#696969',
    padding: '5px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '12px',
    backgroundColor: 'white',
    borderRadius: '25rem'
  }
};

function Recommended(props){
  return(
    <div>
      <div style={styles.recommendedBoxStyles}>
        <Profile
          source = {props.profilePic}
        />
        <div style={styles.tweetContentStyle}>
          <p><strong>{props.name}</strong> @{props.username}</p>
        </div>
        <div>
          <Button
            buttonText = 'Follow'
            style = {styles.followButton}/>
        </div>
      </div>
    </div>
  );
}

Recommended.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  profilePic: PropTypes.string
};

export default Recommended;
