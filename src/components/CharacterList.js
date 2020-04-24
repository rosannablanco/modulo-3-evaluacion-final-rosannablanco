import React from 'react';

import '../stylesheets/CharacterList.css';
import CharacterCard from './CharacterCard';

function CharacterList(props) {
  console.log(props.characters);

  const ElementCharacter = props.characters.map((character, index) => {
    return <CharacterCard character={character} key={index} />;
  });
  console.log(ElementCharacter);

  return <section className="SectionList">{ElementCharacter.length !== 0 ? <ul className="CharacterList">{ElementCharacter}</ul> : <p className="text-nofound">{`No hay resultados con la palabra ${props.value}`}</p>}</section>;
}

export default CharacterList;
