import { useState } from 'react';

export const SearchBar = ({ onSubmit, onValue }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const queryToFetch = e.target.value;

    setQuery(queryToFetch);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      return;
    }
    onSubmit(query);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" value={onValue} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};
