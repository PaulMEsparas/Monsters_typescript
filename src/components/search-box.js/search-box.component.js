const SearchBox = ({ handleOnchange, placeholder }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={handleOnchange}
    />
  );
};

export default SearchBox;
