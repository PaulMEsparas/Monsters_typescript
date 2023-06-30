import { useEffect, useState } from "react";
import CardList from "./components/card-list.js/card-list.component";
import SearchBox from "./components/search-box.js/search-box.component";
import "./App.css";
import useDebounce from "./components/debounce";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const debounceSearchTerm = useDebounce(searchField);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (debounceSearchTerm) {
      const newFilteredMonsters = monsters.filter((monster) =>
        monster.name.toLowerCase().includes(debounceSearchTerm)
      );
      setFilteredMonsters(newFilteredMonsters);
    } else {
      setFilteredMonsters(monsters);
    }
  }, [debounceSearchTerm, monsters]);

  const handleOnchange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title"> Monsters INC</h1>
      <SearchBox
        handleOnchange={handleOnchange}
        placeholder="Search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
