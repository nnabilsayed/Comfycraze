const SearchInput = ({ setSearchQuery }) => {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <input type="text" placeholder="Search..." onChange={handleInputChange} />
  );
};
export default SearchInput;
