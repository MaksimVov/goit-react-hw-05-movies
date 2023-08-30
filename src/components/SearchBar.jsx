import React, { useState } from 'react';
import { styled } from '@mui/system';

const SearchForm = styled('form')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const SearchInput = styled('input')({
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
});

const SearchButton = styled('button')({
  padding: '8px 16px',
  background: '#E50914',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  '&:hover': {
    background: '#C90813',
  },
});

export const SearchBar = ({ onSubmit }) => {
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
    <SearchForm
      style={{ marginBottom: '20px' }}
      action=""
      onSubmit={handleSubmit}
    >
      <SearchInput type="text" onChange={handleChange} value={query} />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};
