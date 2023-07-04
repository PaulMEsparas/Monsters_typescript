import { ChangeEventHandler } from "react";
// import { ChangeEvent } from "react";

type SearchBoxProps = {
  handleOnchange: ChangeEventHandler<HTMLInputElement>; //declaring it as of type changeevent handler from react that in an HTML input Element

  //Another way to declare this onChange function is by using ChangeEvent, if you need to return soemthing and pass womething!
  // handleOnchange: (e: ChangeEvent<HTMLInputElement>) => void;

  placeholder?: string;
};

const SearchBox = ({ handleOnchange, placeholder }: SearchBoxProps) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={handleOnchange}
      // onChange={(e) => handleOnchange(e)}
    />
  );
};

export default SearchBox;
