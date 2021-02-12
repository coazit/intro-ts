/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles, 
}


interface Detalles {
    autor: string,
    anio: number,
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheran',
        anio: 2015,
    }
}

const {volumen, segundo, cancion, detalles } = reproductor;
const {autor} = detalles;

console.log('El volumen actual es de: ' , volumen);
console.log('El segundo actual es de: ' , segundo);
console.log('la cancion actual de: ' , cancion);
console.log('El autor es: ' , autor);
