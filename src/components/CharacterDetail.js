import React from 'react';
import {Link} from 'react-router-dom';
import alien from '../images/alien.svg';
import human from '../images/human.svg';
import died from '../images/died.svg';
import '../stylesheets/CharacterDetail.css';

function CharacterDetail(props) {
  console.log(props.character);
  return (
    <section className="CharacterDetail">
      <Link to="/" className="link">
        Volver
      </Link>
      <div className="container">
        <img className="ImgDetail" src={props.character.image} title={props.character.name} alt={props.character.name} />
        <div className="Info">
          <h3 className="titleName">{props.character.name}</h3>
          <p className="bold">
            Status: <span className="normal">{props.character.status}</span>
          </p>
          <p className="bold">
            Species: <span className="normal">{props.character.species} </span>
            <img className={props.character.species === 'Human' ? 'statusH' : 'statusA'} src={props.character.species === 'Human' ? human : alien} alt={props.character.status} title={props.character.status} />
          </p>
          <p className="bold">
            Origin: <span className="normal">{props.character.origin}</span>
          </p>
          <p className="bold">
            Episodes: <span className="normal">{props.character.episode.length}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default CharacterDetail;