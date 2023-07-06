class Autos {
  marca: string;
  modelo: string;
  potencia: number;
  maxVelocidad: number;
  constructor(
    marca: string,
    modelo: string,
    potencia: number,
    maxVelocidad: number
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
    this.maxVelocidad = maxVelocidad;
  }

  calcularTiempo(distancia: number): string {
    const tiempo = distancia / this.maxVelocidad;
    return tiempo.toFixed(2);
  }
}

export default Autos;
