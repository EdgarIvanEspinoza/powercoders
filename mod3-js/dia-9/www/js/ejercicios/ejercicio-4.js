/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 *   1. Obtén todos los coches de la marca Audi.
 *
 *   2. Obtén una lista con todos los colores de los coches de marca BMW.
 *
 *   3. Obtén la media de precio de los coches de marca Ford.
 *
 *   4. Obtén un array con los coches de transmisión manual y de color negro.
 *
 *   5. Obtén la suma total de todos los precios.
 *
 *   Opcional: obtén un array con las distintas marca de coches (no se pueden repetir).
 *
 */

'use strict';

const cars = [
    {
        brand: 'BMW',
        model: 'Serie 3',
        year: 2012,
        price: 30000,
        doors: 4,
        color: 'Blanco',
        transmition: 'automatico',
    },
    {
        brand: 'Audi',
        model: 'A4',
        year: 2018,
        price: 40000,
        doors: 4,
        color: 'Negro',
        transmition: 'automatico',
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        year: 2015,
        price: 20000,
        doors: 2,
        color: 'Blanco',
        transmition: 'automatico',
    },
    {
        brand: 'Audi',
        model: 'A6',
        year: 2010,
        price: 35000,
        doors: 4,
        color: 'Negro',
        transmition: 'automatico',
    },
    {
        brand: 'BMW',
        model: 'Serie 5',
        year: 2016,
        price: 70000,
        doors: 4,
        color: 'Rojo',
        transmition: 'automatico',
    },
    {
        brand: 'Mercedes Benz',
        model: 'Clase C',
        year: 2015,
        price: 25000,
        doors: 4,
        color: 'Blanco',
        transmition: 'automatico',
    },
    {
        brand: 'Chevrolet',
        model: 'Camaro',
        year: 2018,
        price: 60000,
        doors: 2,
        color: 'Rojo',
        transmition: 'manual',
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        year: 2019,
        price: 80000,
        doors: 2,
        color: 'Rojo',
        transmition: 'manual',
    },
    {
        brand: 'Dodge',
        model: 'Challenger',
        year: 2017,
        price: 40000,
        doors: 4,
        color: 'Blanco',
        transmition: 'automatico',
    },
    {
        brand: 'Audi',
        model: 'A3',
        year: 2017,
        price: 55000,
        doors: 2,
        color: 'Negro',
        transmition: 'manual',
    },
    {
        brand: 'Dodge',
        model: 'Challenger',
        year: 2012,
        price: 25000,
        doors: 2,
        color: 'Rojo',
        transmition: 'manual',
    },
    {
        brand: 'Mercedes Benz',
        model: 'Clase C',
        year: 2018,
        price: 45000,
        doors: 4,
        color: 'Azul',
        transmition: 'automatico',
    },
    {
        brand: 'BMW',
        model: 'Serie 5',
        year: 2019,
        price: 90000,
        doors: 4,
        color: 'Blanco',
        transmition: 'automatico',
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        year: 2017,
        price: 60000,
        doors: 2,
        color: 'Negro',
        transmition: 'manual',
    },
    {
        brand: 'Dodge',
        model: 'Challenger',
        year: 2015,
        price: 35000,
        doors: 2,
        color: 'Azul',
        transmition: 'automatico',
    },
    {
        brand: 'BMW',
        model: 'Serie 3',
        year: 2018,
        price: 50000,
        doors: 4,
        color: 'Blanco',
        transmition: 'automatico',
    },
    {
        brand: 'BMW',
        model: 'Serie 5',
        year: 2017,
        price: 80000,
        doors: 4,
        color: 'Negro',
        transmition: 'automatico',
    },
    {
        brand: 'Mercedes Benz',
        model: 'Clase C',
        year: 2018,
        price: 40000,
        doors: 4,
        color: 'Blanco',
        transmition: 'automatico',
    },
    {
        brand: 'Audi',
        model: 'A4',
        year: 2016,
        price: 30000,
        doors: 4,
        color: 'Azul',
        transmition: 'automatico',
    },
];

// 1. Obtén todos los coches de la marca Audi.
const cochesAudi = cars.filter((car) => car.brand === 'Audi');
console.log(cochesAudi);
// 2. Obtén una lista con todos los colores de los coches de marca BMW.
const cochesBMW = cars.filter((car) => car.brand === 'BMW');
console.log(cochesBMW.map((car) => car.color));
// 3. Obtén la media de precio de los coches de marca Ford.
const cochesFord = cars.filter((car) => car.brand === 'Ford');
console.log(cochesFord);
const preciosFord = cochesFord.map((car) => car.price);
console.log(preciosFord);
let suma = 0;
for (const precio of preciosFord) {
    suma += precio;
}
console.log(suma / preciosFord.length);

// 4. Obtén un array con los coches de transmisión manual y de color negro.
const cochesManual = cars.filter((car) => car.transmition === 'manual');
console.log(cochesManual);
const cochesNegrosYManual = cochesManual.filter((car) => car.color === 'Negro');
console.log(cochesNegrosYManual);
const cochesNYMarr = cochesNegrosYManual.map((car) => car.model);
console.log(cochesNYMarr);
// 5. Obtén la suma total de todos los prices.
const preciosCoches = cars.map((car) => car.price);
console.log(preciosCoches);
let total = 0;
for (const precio of preciosCoches) {
    total += precio;
}
console.log(total);
// Opcional: obtén un array con las distintas brands de coches (no se pueden repetir).
const todasLasMarcas = cars.map((car) => car.brand);
let marcas = [];
for (let i = 0; i < todasLasMarcas.length; i++) {
    if (!marcas.includes(todasLasMarcas[i], 0)) marcas.push(todasLasMarcas[i]);
}
console.log(marcas);
