import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const Tet = () => {
//   const ativo = true;
//   return <p className={ativo ? 'ativo' : 'inativo'}>Testando</p>
// }

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Países do mundo:</h1>
      <App />
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);