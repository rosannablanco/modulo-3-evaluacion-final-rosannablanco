import React, {useEffect, useState} from 'react';
import FetchDataApi from '../services/Fetch';
import CharacterList from './CharacterList';
import Filters from './Filters';
import Header from './Header';
import '../stylesheets/App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterFilter, setCharacterFilter] = useState('');
  useEffect(() => {
    FetchDataApi().then((data) => {
      setCharacters(data);
    });
  }, []);
  const getValueInput = (value) => {
    setCharacterFilter(value);
  };

  const filterByName = characters.filter((character) => {
    return character.name.toLowerCase().includes(characterFilter.toLowerCase());
  });

  console.log(filterByName);

  return (
    <div className="App">
      <Header />
      <Filters handleChange={getValueInput} />
      <CharacterList characters={filterByName} />
    </div>
  );
}

export default App;
