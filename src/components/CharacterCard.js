import React from 'react';

//import '../stylesheets/App.css';

function CharacterCard(props) {
  console.log(props.character.name);
  return (
    <li className="CharacterLi">
      <img className="Img" src={props.character.image} title="" alt="" />
      <div className="ContainerInfo">
        <h4>{props.character.name}</h4>
        <p>{props.character.species}</p>
      </div>
    </li>
  );
}

export default CharacterCard;
