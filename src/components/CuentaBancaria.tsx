import React, { useState } from 'react';

interface CuentaBancariaProps {
    saldo: number;
    onDepositar: (monto: number) => void;
    onRetirar: (monto: number) => void;
}

const mostrarAlerta = (mensaje: string) => {
    alert(mensaje);
};

const CuentaBancaria: React.FC<CuentaBancariaProps> = ({ saldo: saldo, onDepositar, onRetirar }) => {
    const [montoDeposito, setMontoDeposito] = useState('');
    const [montoRetiro, setMontoRetiro] = useState('');

    const handleDepositar = () => {
        const monto = Number(montoDeposito);
        if (isNaN(monto) || monto <= 0) {
            mostrarAlerta('Ingrese un monto válido para depositar');
        } else {
            //si el monto es válido ejecuto el metodo y reseteo el campo a ''
            onDepositar(monto);
            setMontoDeposito('');
        }
    };

    const handleRetirar = () => {
        const monto = Number(montoRetiro);
        if (isNaN(monto) || monto <= 0) {
            mostrarAlerta('Ingrese un monto válido para retirar');
        } else {
            onRetirar(monto);
            setMontoRetiro('');
        }
    };


    return (
        <div>
            <h1>Cuenta Bancaria</h1>
            <p>Saldo disponible: ${saldo}</p>
            <div>
                <input
                    type="number"
                    value={montoDeposito}
                    onChange={e => setMontoDeposito(e.target.value)}
                />
                <button onClick={handleDepositar}>Depositar</button>
            </div>
            <div>
                <input
                    type="number"
                    value={montoRetiro}
                    onChange={e => setMontoRetiro(e.target.value)}
                />
                <button onClick={handleRetirar}>Retirar</button>
            </div>
        </div>
    );
};

export const CuentaBancariaApp: React.FC = () => {
    const [saldo, setSaldo] = useState(0);

    const handleDepositar = (monto: number) => {
        if (monto > 500000) {
            mostrarAlerta('Se quiere depositar un monto mayor a $500.000');
        } else {
            setSaldo(saldoPrevio => saldoPrevio + monto);
        }
    };

    const handleRetirar = (monto: number) => {
        if (monto > saldo) {
            mostrarAlerta('Fondos insuficientes');
        } else if (monto > 100000) {
            mostrarAlerta('Se quiere retirar un monto mayor a $100.000');
        } else {
            setSaldo(saldoPrevio => saldoPrevio - monto);
        }
    };

    return (
        <div>
            <CuentaBancaria saldo={saldo} onDepositar={handleDepositar} onRetirar={handleRetirar} />
        </div>
    );

};