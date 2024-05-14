import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CatResponses from './components/CatResponse';
import Pruebas from './components/Pruebas';
import Signup from './components/Signup';
import SubirArchivo from './components/SubirArchivo';
// import Archivo from './components/Archivos2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Pruebas></Pruebas> */}
    <Signup></Signup>
    {/* <Archivo></Archivo> */}
    {/* <SubirArchivo></SubirArchivo> */}
    <p>Learn lore wernfeofnerio</p>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
