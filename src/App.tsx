import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AutoComponent } from './components/IterarAutos';
import Autos from './clases/Auto';
import { MostrarPorConsola } from './components/AddToEscuela';

function App() {
  return (
    <>
     <MostrarPorConsola/>
     < AutoComponent/>
    </>
  );
}

export default App;
