import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import alien from '../images/alien.svg';
import human from '../images/human.svg';
//import died from '../images/died.svg';
import '../stylesheets/CharacterDetail.css';

function CharacterDetail(props) {
  const {image, name, status, species, origin, episode} = props.character;

  return (
    <section className="CharacterDetail">
      <Link to="/" className="link">
        Volver
      </Link>
      <div className="container">
        <img className="ImgDetail" src={image} title={name} alt={name} />
        <div className="Info">
          <h3 className="titleName">{name}</h3>
          <p className="bold">
            Status: <span className="normal">{status}</span>
          </p>
          <p className="bold">
            Species: <span className="normal">{species} </span>
            <img className={species === 'Human' ? 'statusH' : 'statusA'} src={species === 'Human' ? human : alien} alt={status} title={status} />
          </p>
          <p className="bold">
            Origin: <span className="normal">{origin}</span>
          </p>
          <p className="bold">
            Episodes: <span className="normal">{episode.length}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
CharacterDetail.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    origin: PropTypes.string,
    species: PropTypes.string,
    episode: PropTypes.arrayOf(PropTypes.string),
  }),
};
export default CharacterDetail;
