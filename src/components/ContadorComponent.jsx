import React, { useState } from 'react';

function ContadorComponent() {
    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState('');

    const incrementar = () => {
        setContador(contador + 1);
        setMensaje('');
    };

    const incrementar2 = () => {
        setContador(contador + 2);
        setMensaje('');
    };

    const decrementar = () => {
        setContador(contador - 1);
        setMensaje('');
    };

    const decrementar2 = () => {
        setContador(contador - 2);
        setMensaje('');
    };

    // Función para reiniciar el contador
    const resetear = () => {
        setContador(0);
        setMensaje('');
    };

    const apagar = () => {
        setMensaje('Off'); // Mostrar el mensaje "Off"
    };

    return (
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-white">Reto del Contador</h2>

            <div className="bg-gray-700 rounded-lg p-4 mb-6">
                <p className="text-lg text-white">Contador:                   
                    <span
                        className={`ml-2 inline-block py-2 px-6 rounded-md ${mensaje === 'Off' ? 'mt-4 text-red-500 font-bold' : 'bg-gray-900 text-white font-bold'
                            }`}
                    >
                        {mensaje === 'Off' ? mensaje : contador}
                    </span>
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button
                    className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-lg"
                    onClick={incrementar}
                >
                    Incrementar
                </button>
                <button
                    className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-lg"
                    onClick={incrementar2}
                >
                    Incrementar 2
                </button>
                <button
                    className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-lg"
                    onClick={decrementar}
                >
                    Decrementar
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-lg"
                    onClick={decrementar2}
                >
                    Decrementar 2
                </button>
                <button
                    className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-lg"
                    onClick={resetear}
                >
                    Reset
                </button>
                <button
                    className="bg-gray-700 hover:bg-gray-800 active:bg-gray-900 text-white font-bold py-3 px-4 rounded-md transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-lg"
                    onClick={apagar}
                >
                    Apagar
                </button>
            </div>
        </div>
    );
}

export default ContadorComponent;