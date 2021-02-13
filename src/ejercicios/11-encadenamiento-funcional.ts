
/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string [];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando',    
};

const pasajero2: Pasajero = {
    nombre: 'Mellisa',
    hijos: ['Natalia', 'Gabriel'],
}


function imprimeHijos(pasajero: Pasajero): void {
    const cuantos_hijos = pasajero.hijos?.length || 0;
    console.log(cuantos_hijos);
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);