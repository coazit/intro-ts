/*
    ===== Código de TypeScript =====
*/
interface Direccion {
    calle: string,
    pais: string,
    ciudad: string
}

interface superHeroe {
    nombre: string,
    edad: number,
    direccion: Direccion,
    mostrarDireccion: ()=> string,
}


const superHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main st',
        pais: 'USAaa',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);