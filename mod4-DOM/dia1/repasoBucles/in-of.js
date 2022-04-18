"use strict"

// FOR...OF
// para recorrer arrays

/* for(const item of items){
  //codigo
} */

const numeros = [5, 8, 163, 87, 0]

for(const numero of numeros){
  console.log(numero)
}

const colores = ["rojo", "verde", "azul"]

for(const color of colores){
  console.log(`Me gusta el color ${color}`)
}

const frutas = [
  {
    fruta: "manzana",
    color: "roja",
  },
  {
    fruta: "plátano",
    color: "amarillo"
  },
  {
    fruta: "pera",
    color: "verde"
  },
  {
    fruta: "arándano",
    color: "azul"
  }
]

for(const fruta of frutas){
  console.log(`La ${fruta.fruta} es ${fruta.color}`)
}




// FOR...IN
// Para recorrer objetos

/* 
for( const key of objeto){
  //codigo
}
*/

const miObj = {
  camisetas: 25,
  pantalones: 10,
  calcetines: 30,
  chaquetas:15
}



for(const key in miObj){
console.log(key)
console.log(miObj[key])

console.log(`Quedan ${miObj[key]} ${key}`)
}