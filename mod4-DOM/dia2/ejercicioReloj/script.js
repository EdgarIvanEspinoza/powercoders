"use strict";

/* Mostrar un reloj en el h1 que se actualice cada segundo con la hora actual */
/* En el h2 se verá la fecha "bonita" (que se lea bien) */
/* El fondo de la página será una imagen que cambiará segun el momento del día.

Puedes utilizar las clases:
- morning a partir de las 7:00
- afternoon a partir de las 13:00
- night a partir de las 21:00
*/

const reloj = document.querySelector("h1")
const fechaTexto = document.querySelector("h2")
const body = document.querySelector("body")
console.log(body)


function actualizar(){
  const now = new Date()

  //getTime(now)
  //getDate(now)
  getBackground(now.getHours())



reloj.textContent = now.toLocaleTimeString("es-ES")
fechaTexto.textContent = now.toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

}



setInterval(actualizar, 1000)
actualizar()



//// FUNCIONES AUXILIARES

function getTime(fecha){
 const hour = fecha.getHours();
const minutes = fecha.getMinutes();
const seconds = fecha.getSeconds();


if(seconds%2 === 0){
  reloj.textContent = `${format(hour)}:${format(minutes)}:${format(seconds)}`
} else {
   reloj.textContent = `${format(hour)} ${format(minutes)} ${format(seconds)}`
} 
}

function format(num){
  if(num <10){
    return "0" + num
  }

  return num
}



function getDate(fecha){
  const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
const months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ];

    
  const day = fecha.getDay()
  const date = fecha.getDate()
  const month = fecha.getMonth()
  const year = fecha.getFullYear()

  fechaTexto.textContent = `${days[day]}, ${date} de ${months[month]} de ${year}`
}


function getBackground(hour){
if(hour >= 7 && hour < 13){
  body.className = "morning"
} else if (hour >= 13 && hour < 21){
  body.className = "afternoon"
} else {
  body.className = "night"
}
}




