import React, {useEffect} from 'react';
import FetchDataApi from '../services/Fetch';

import '../stylesheets/App.css';

function App() {
  useEffect(() => {
    FetchDataApi().then((data) => {
      console.log(data);
    });
  });
  return <div className="App">Hola</div>;
}

export default App;
