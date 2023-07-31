export const SearchBar = ({
  onHandleSubmit,
  onMoviesId,
  onUpdateQueryString,
}) => {
  return (
    <form action="" onSubmit={onHandleSubmit}>
      <input type="text" value={onMoviesId} onChange={onUpdateQueryString} />
      <button type="submit">Search</button>
    </form>
  );
};
