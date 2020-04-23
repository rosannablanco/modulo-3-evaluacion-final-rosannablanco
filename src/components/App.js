import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import FetchDataApi from '../services/Fetch';
import CharacterList from './CharacterList';
import Filters from './Filters';
import Header from './Header';
import CharacterDetail from './CharacterDetail';

function App(props) {
  const [characters, setCharacters] = useState([]);
  const [characterFilter, setCharacterFilter] = useState('');
  useEffect(() => {
    FetchDataApi().then((data) => {
      setCharacters(data);
    });
  }, []);
  //get value of input and set in status characterFilter
  const getValueInput = (value) => {
    setCharacterFilter(value);
  };
  //filter status character for the character name include characterFilter
  const filterByName = characters.filter((character) => {
    return character.name.toLowerCase().includes(characterFilter.toLowerCase());
  });
  //console.log(characters);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters handleChange={getValueInput} />
          <CharacterList characters={filterByName} />
        </Route>
        <Route path="/characterDetail/:name">
          <CharacterDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
