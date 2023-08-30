import React from 'react';
import { styled } from '@mui/system';

const LoadMoreButton = styled('button')({
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

export const LoadMoreBtn = ({ onClick }) => {
  return <LoadMoreButton onClick={onClick}>Load more</LoadMoreButton>;
};
