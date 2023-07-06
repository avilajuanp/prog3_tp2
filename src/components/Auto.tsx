class Auto {
    marca: string;
    modelo: string;
    potencia: number;
    velocidadMax: number;

    constructor(marca: string, modelo: string, potencia: number, velocidadMax: number){
        this.marca=marca;
        this.modelo=modelo;
        this.potencia=potencia;
        this.velocidadMax=velocidadMax;
    }

    calcularTiempo(distancia: number): number {
        return distancia / this.velocidadMax;
    }
}

const autos: Auto[] = [
    
    new Auto('Ford', 'Mustang', 300, 250),
    new Auto('Chevrolet', 'Camaro', 350, 270),
    new Auto('BMW', 'M5', 400, 280),
    new Auto('Mercedes-Benz', 'AMG GT', 450, 290),
    new Auto('Porsche', '911', 500, 300),
    
];

export const AutoApp: React.FC = () => {
    return (
        <div>
            <h1>Autos</h1>
            <ul>
                {autos.map((auto, index) => (
                    <li key={index}>
                        <strong>Marca: </strong> {auto.marca}, <strong>Modelo: </strong> {auto.modelo}, <strong>Potencia: </strong> {auto.potencia} HP, 
                        <strong>Velocidad Máxima: </strong> {auto.velocidadMax} km/h.
                        <br /><strong>Tiempo de Recorrido (100 kms): </strong> {auto.calcularTiempo(100).toFixed(2)} horas
                        <br /><strong>Tiempo de Recorrido (200 kms): </strong> {auto.calcularTiempo(200).toFixed(2)} horas
                        <br /><strong>Tiempo de Recorrido (500 kms): </strong> {auto.calcularTiempo(500).toFixed(2)} horas
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );

};