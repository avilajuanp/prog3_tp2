import React from "react";
import Autos from "../clases/Auto";

const auto1 = new Autos('Renault','Sandero',90,160);
const auto2 = new Autos('Ford','Falcon',100,150);
const auto3 = new Autos('Chevrolet','Camaro',150,220);
const auto4 = new Autos('Fiat','Siena',90,155);
const auto5 = new Autos('Volskwagen','Up',70,110);

const autos= [auto1,auto2,auto3,auto4,auto5];

export function AutoComponent() {
    return (
      <div>
        <h1>Autos</h1>
        {autos.map((auto, index) => (
          <div key={index}>
            <h3>{`${auto.marca} ${auto.modelo}`}</h3>
            <p>Potencia: {auto.potencia}</p>
            <p>Max. Velocidad: {auto.maxVelocidad}</p>
          </div>
        ))}
  
        <h1>Tiempo de recorrido</h1>
        {autos.map((auto, index) => (
          <div key={index}>
            <h3>{`${auto.marca} ${auto.modelo}`}</h3>
            <p>Tiempo para recorrer 100 km: {auto.calcularTiempo(100)} horas</p>
            <p>Tiempo para recorrer 200 km: {auto.calcularTiempo(200)} horas</p>
            <p>Tiempo para recorrer 300 km: {auto.calcularTiempo(300)} horas</p>
          </div>
        ))}
      </div>
    );
  }
