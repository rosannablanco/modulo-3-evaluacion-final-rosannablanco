import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import '../stylesheets/CharacterList.css';

function CharacterList(props) {
  const ElementCharacter = props.characters.map((character, index) => {
    return <CharacterCard character={character} key={index} />;
  });

  return <section className="SectionList">{ElementCharacter.length !== 0 ? <ul className="CharacterList">{ElementCharacter}</ul> : <p className="text-nofound">{`No hay resultados con la palabra ${props.value}`}</p>}</section>;
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
};

export default CharacterList;
