import React from 'react';

function Search(props){
  const searchStyles = {
    border: '1px solid blue',
    color: '#DCDCDC',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    backgroundColor: 'white',
    borderRadius: '25rem'
  }
  return(
    <div>
      <input style={searchStyles} placeholder='Search'></input>
    </div>
  );
}

export default Search;
