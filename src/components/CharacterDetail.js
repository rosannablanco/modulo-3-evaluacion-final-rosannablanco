import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import '../stylesheets/CharacterDetail.css';
//images status
import unknown from '../images/uknow.svg';
import alive from '../images/alive.svg';
import dead from '../images/died.svg';
//images species
import alien from '../images/alien.svg';
import human from '../images/human.svg';

function CharacterDetail(props) {
  const {image, name, status, species, origin, episode} = props.character;
  const getImgStatus = () => {
    let img;
    let width = 'w-8';
    switch (status) {
      case 'Alive':
        img = alive;
        break;
      case 'Dead':
        img = dead;
        break;
      default:
        img = unknown;
        width = 'w-5';
    }
    return <img className={`iconImg ${width}`} src={img} alt={status} title={status} />;
  };

  return (
    <section className="CharacterDetail">
      <Link to="/" className="link">
        Volver
      </Link>
      <div className="container">
        <img className="ImgDetail" src={image} title={name} alt={name} />

        <ul className="Info">
          <h3 className="titleName">{name}</h3>
          <li className="pIcon bold">
            Status: <span className="normal">{status}</span>
            {getImgStatus()}
          </li>
          <li className="pIcon bold">
            Species: <span className="normal">{species} </span>
            <img className={species === 'Human' ? 'iconImg w-4' : 'iconImg w-8'} src={species === 'Human' ? human : alien} alt={species} title={species} />
          </li>
          <li className="pIcon bold">
            Origin: <span className="normal">{origin}</span>
          </li>
          <li className="pIcon bold">
            Episodes: <span className="normal">{episode.length}</span>
          </li>
        </ul>
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
