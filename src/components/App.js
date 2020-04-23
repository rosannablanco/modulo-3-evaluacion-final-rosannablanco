import React, {useEffect, useState} from 'react';
import FetchDataApi from '../services/Fetch';
import CharacterList from './CharacterList';
import Filters from './Filters';
import Header from './Header';
import '../stylesheets/App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    FetchDataApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Filters />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
