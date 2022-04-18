"use strict";



/* 

for(inicializar contador; condicion; modificación){
  //código
}


for( let i = 0; i < X; i++){
  //código
}

*/


for(let i = 0; i < 5; i++){
  //console.log(i)

  console.log("Hola")
}


function duplicar(num){
  return num *2
}


for(let i = 0; i < 3; i++){
  console.log(duplicar(i))
}


const vueltas = 5;

for(let i = 0; i < vueltas; i++){
  console.log(`Esta es la ${i+1}ª vuelta`)
}


// CONTINUE
// Pasa a la siguiente vuelta

for(let i = 0; i < vueltas; i++){

  console.log("Esto lo imprime siempre")

  if(i === 3){
    continue
  }

  console.log("Esto lo imprime si i no es 3", i) 
}


//BREAK
// Termina el bucle

const vueltas2 = 200;

for(let i = 0; i < vueltas2; i++){

  console.log(i)

  if(i >= 5){
    break
  }
}




// RECORRER UN ARRAY

const miArr = ["rojo", "azul", "amarillo"]



for(let i = 0; i < miArr.length; i++){
console.log(miArr[i])
}


// RECORRER UN OBJETO

const miObj = {
  camisetas: 25,
  pantalones: 10,
  calcetines: 30,
  chaquetas:15
}



console.log(Object.entries(miObj))
//Object.keys(miObj) //array de keys
//Object.values(miObj) //array de valores
//Object.entries(miObj) //Array de pares (array con dos elementos) key/valor

for(let i = 0; i < Object.entries(miObj).length; i++){

  //Con keys
  const key = Object.keys(miObj)[i]
  console.log(`Hay ${miObj[key]} ${key}`)


  //Lo mismo, con entries
/*   const entry = Object.entries(miObj)[i]
  console.log(`Hay ${entry[1]} ${entry[0]}`) */


  //Con entries pero con destructuring
  const [keyEntry, value] = Object.entries(miObj)[i]
  console.log(`Hay ${value} ${keyEntry}`)
}


const entries = Object.entries(miObj)

for(let i = 0; i < entries.length; i++){
  const [key, value] = entries[i]
  console.log(`Hay ${value} ${key}`)
  
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


for(let i = 0; i < frutas.length; i++){
  /* const fruta = frutas[i]

  console.log(`La ${fruta.fruta} es ${fruta.color}`) */

  const {fruta, color} = frutas[i];

  console.log(`La ${fruta} es ${color}`)
}


