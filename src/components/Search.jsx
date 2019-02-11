import React from 'react';

function Search(props){
  const searchStyles = {
    border: '2px solid #4682B4',
    color: '#696969',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    backgroundColor: 'white',
    borderRadius: '25rem',
    marginRight: '5px'
  };
  return(
    <div>
      <input style={searchStyles} placeholder='Search'></input>
    </div>
  );
}

export default Search;
