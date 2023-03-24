import React, { useState } from 'react';

function SearchBar({  searchbook , handleSubmit }) {
  

  

 

  return (
    
    <form  onSubmit={(event)=>handleSubmit(event)}>
      <input
      className='search' 
      type="text"
      placeholder="Search..."
        //value={searchTerm}
        onChange={(e)=>searchbook(e)}
      />
      <button className='searchButton' type="submit">Search</button>
    </form>
    
  );
}

export default SearchBar;
