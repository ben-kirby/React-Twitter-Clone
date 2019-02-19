import React from 'react'

const styles = {
  padding: {
    height: '30px',
    width: '30px',
    margin: '5px 0px 0px 5px'
  },
  image: {
    height: '40px',
    width: '40px',
    border: '3px solid lightgrey',
    borderRadius: '25rem',
  }
}

function Profile(props){
  return(
    <div style={styles.padding}>
      <img style={styles.image} src={`${props.source}`}></img>
    </div>
  )
}

export default Profile
