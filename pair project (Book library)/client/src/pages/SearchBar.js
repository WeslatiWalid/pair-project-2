import React, { useState } from 'react';

function SearchBar({ books, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(query)
    );
    onSearch(filteredBooks);
    setSearchTerm(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
