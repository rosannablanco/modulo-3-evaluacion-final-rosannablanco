import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function CharacterCard(props) {
  return (
    <li className="CharacterLi">
      <Link to={`/${props.character.id}`} className="link">
        <img className="Img" src={props.character.image} title={`foto de ${props.character.name}`} alt={`foto de ${props.character.name}`} />
        <div className="ContainerInfo">
          <h4>{props.character.name}</h4>
          <p>{props.character.species}</p>
        </div>
      </Link>
    </li>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  }),
};

export default CharacterCard;
