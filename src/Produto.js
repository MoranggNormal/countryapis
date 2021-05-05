import React from "react";

const Produto = ({ dados }) => {
  return (
    <div>
        <h1>Lista ordenada:</h1>
      <ol>
        {dados.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ol>
    </div>
  );
};

export default Produto;
