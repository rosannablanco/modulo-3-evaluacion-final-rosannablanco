import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import '../stylesheets/CharacterList.css';

function CharacterList(props) {
  const {characters, value} = props;
  const ElementCharacter = characters.map((character, index) => {
    return <CharacterCard character={character} key={index} />;
  });

  return <section className="SectionList">{ElementCharacter.length !== 0 ? <ul className="CharacterList">{ElementCharacter}</ul> : <p className="ContainerInfo text-nofound">{`No hay resultados con la palabra ${value}`}</p>}</section>;
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
};

export default CharacterList;
