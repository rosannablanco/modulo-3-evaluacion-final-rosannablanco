import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/CharacterDetail.css';

function CharacterDetail(props) {
  console.log(props);
  return (
    <section className="CharacterDetail">
      <Link to="/" className="link">
        Volver
      </Link>
      <div className="container">
        <img className="Img" src="" title="" alt="" />
        <div className="ContainerInfo">
          <h3>Name</h3>
          <p>Status:</p>
          <p>Species:</p>
          <p>Origin:</p>
          <p>Episodes:</p>
        </div>
      </div>
    </section>
  );
}

export default CharacterDetail;
