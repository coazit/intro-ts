import { Producto, calculaISV } from './06-desestructuracion-argumentos';
/*
    ===== Código de TypeScript =====
*/



const carritoCompras: Producto[] = [
    {
        desc: 'Telefono1',
        precio:100,
    },
    {
        desc: 'Telefono2',
        precio:150,
    },
];

const [total1, isv1] = calculaISV(carritoCompras);

console.log('Total--', total1);
console.log('ISV--', isv1);

