import React from 'react';
import '../stylesheets/Filters.css';

function Filters(props) {
  const handleChangeInput = (ev) => {
    props.handleChange(ev.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form htmlFor="search-form" className="Filters" onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <input type="text" id="name" name="nameCharacter" className="Input" value={props.value} maxLength="30" placeholder="Nombre del personaje" onChange={handleChangeInput} required />
    </form>
  );
}

export default Filters;
