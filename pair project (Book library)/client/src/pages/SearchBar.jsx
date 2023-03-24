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

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm)
    );
    onSearch(filteredBooks);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
