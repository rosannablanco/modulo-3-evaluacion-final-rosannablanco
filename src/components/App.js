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
    FetchDataApi().then((data) => {
      const dataOrder = data.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
      setCharacters(dataOrder);
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

  //function
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
