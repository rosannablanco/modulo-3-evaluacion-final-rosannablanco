import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function CharacterCard(props) {
  const {id, image, name, species} = props.character;
  return (
    <li className="CharacterLi">
      <Link to={`/${id}`} className="link">
        <img className="Img" src={image} title={`foto de ${name}`} alt={`foto de ${name}`} />
        <div className="ContainerInfo">
          <h4>{name}</h4>
          <p>{species}</p>
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
