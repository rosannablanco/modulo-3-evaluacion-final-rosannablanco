import React from 'react';

import '../stylesheets/CharacterList.css';
import CharacterCard from './CharacterCard';

function CharacterList(props) {
  const ElementCharacter = props.characters.map((character, index) => {
    return <CharacterCard character={character} key={index} />;
  });

  return (
    <section className="SectionList">
      <ul className="CharacterList">{ElementCharacter}</ul>
    </section>
  );
}

export default CharacterList;
