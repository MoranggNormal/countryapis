// import logo from './logo.svg';
import React from "react";

import "./App.css";
import Produto from "./Produto";

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [load, setLoad] = React.useState(null);

  async function handleClick(e) {
    setLoad(true);

    const response = await fetch(`https://restcountries.eu/rest/v2/`);

    const json = await response.json();

    setDados(json);
    setLoad(false);
  }

  return (
    <div>
      <button onClick={handleClick}>Look</button>
      {load && <p>Loading...</p>}
      {!load && dados && <Produto dados={dados} />}
    </div>
  );
};

export default App;
