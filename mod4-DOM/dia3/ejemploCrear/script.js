"use strict"


const lista = [
  {
    nombre: "pan",
    importante: true
  },
  {
    nombre: "atún",
    importante: false
  },
  {
    nombre: "café"
  },
  {
    nombre: "arroz",
    importante: true
  },
  {nombre:
 "leche"},
 {nombre: "huevos",
importante: true}
]


// Selecciono la lista
const ul = document.querySelector("ul")


// Creamos el fragment (para ir acumulando elementos)
const fragment = document.createDocumentFragment()

//Recorremos la lista y por cada producto...
for(const producto of lista){

  //creamos un li
  const li = document.createElement("li")

  //Le ponemos el texto
  li.textContent = producto.nombre


  // Comprobamos si es importante
  if(producto.importante){

    //si lo es, le añadimos la clase
    li.classList.add("importante")
  }


  //lo añadimos al fragment
  fragment.append(li)
}


//Añadimos el fragment lleno al ul
ul.append(fragment)



//////////////////////
/// Con INNERHTML /////

const ul2 = document.querySelector("ul:last-of-type")


let listString = "";


for(const producto of lista){
/*   if(producto.importante){
    listString += `<li class="importante">${producto.nombre}</li>`

  } else {
    listString += `<li>${producto.nombre}</li>`

  } */


    listString += `<li ${producto.importante? "class='importante'" : ""}>${producto.nombre}</li>`

}

ul2.innerHTML = listString