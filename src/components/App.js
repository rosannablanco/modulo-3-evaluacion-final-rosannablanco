import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import FetchDataApi from '../services/Fetch';
import CharacterList from './CharacterList';
import Filters from './Filters';
import Header from './Header';
import CharacterDetail from './CharacterDetail';

import '../stylesheets/App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterFilter, setCharacterFilter] = useState('');

  useEffect(() => {
    //set the data from the api and sort by name and set state characters
    FetchDataApi().then((data) => {
      const dataSort = data.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      setCharacters(dataSort);
    });
  }, []);
  //get value of input and save in state characterFilter
  const getValueInput = (value) => {
    setCharacterFilter(value);
  };

  //filter by character.name that includes characterFilter
  const filterByName = characters.filter((character) => {
    return character.name.toLowerCase().includes(characterFilter.toLowerCase());
  });

  //get props.match.params of the path and search the character whose id === to id params
  const getElementDetail = (props) => {
    const paramsPath = parseInt(props.match.params.id);
    const foundCharacter = characters.find((character) => character.id === paramsPath);
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <p className="Error">El personaje que buscas no existe</p>;
    }
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters handleChange={getValueInput} value={characterFilter} />
          <CharacterList characters={filterByName} value={characterFilter} />
        </Route>
        <Route path="/:id">{getElementDetail}</Route>
      </Switch>
    </div>
  );
}

export default App;
