"use strict";


/* 
while(condicion){
  codigo
}

let dia = true

while(dia){
  //codigo
}

dia = false // BUCLE INFINITO, NUNCA LLEGA A ESTA LINEA

*/

/* for(let i = 0; i < 5; i++) */

let contador = 0;

while(contador < 5){

  console.log(contador);

  contador++
}




let dia = true;

while(dia){
  console.log("es de día")

  if(Math.random() > 0.5){
    console.log("es de noche")
    dia = false
  }
}





/* Escribe un bucle while que en cada vuelta muestre un confirm.
Si se le da a OK, continua.
Si se le da a cancel, para. */

/* while(confirm("texto")){

} */


/* let continuar = confirm("texto")

while(continuar){
   continuar = confirm("texto")
} */

let continuar;

do{
  continuar = confirm("texto")
} while (continuar)


/* 
Escribe un bucle while que pida una palabra por promt y la muestre por consola.

Si la palabara es STOP, para.
*/

let palabra;

while(palabra !== "STOP"){
  palabra = prompt("Escribe una palabra. STOP para parar")

  console.log(palabra)
}

/* 
Escribe un bucle while que pida una palabra por prompt en cada vuelta y las vaya acumulando.
Cuando se introduzca la palabra STOP, el bucle para y se muestra el resultado acumulado.

*/


let palabra2;
let resultado = "";

while(palabra2 !== "STOP"){
  palabra2 = prompt("Introduce una palabra");

  if(palabra2 === "STOP"){
    continue
  }


  resultado += palabra2 + " "
}

console.log(resultado)




// DO WHILE
// La única diferencia con while es que la primera vuelta SIEMPRE   se ejecuta, aunque no se cumpla la condición

/* do {
  //código
} while (condición)*/


let age = 15;

while(age >= 18){
  console.log("esto no se ejecuta NUNCA")
}

do{
    console.log("esto se ejecuta una vez")
} while (age >= 18)