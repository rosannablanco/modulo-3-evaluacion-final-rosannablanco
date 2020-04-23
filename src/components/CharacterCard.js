import React from 'react';
import {Link} from 'react-router-dom';

function CharacterCard(props) {
  return (
    <li className="CharacterLi">
      <Link to={`/${props.character.id}`} className="link">
        <img className="Img" src={props.character.image} title="" alt="" />
        <div className="ContainerInfo">
          <h4>{props.character.name}</h4>
          <p>{props.character.species}</p>
        </div>
      </Link>
    </li>
  );
}

export default CharacterCard;
