"use strict";

async function getData(url){
  const res = await fetch(url);
  const data = await res.json()


/*   const json = JSON.stringify(data)
  const js = JSON.parse(json) */

  
  return data
}

/* getData("./ejemplo.json").then(res => {console.log(res)}) */




const titulo = document.querySelector("h1")

async function setTitleColor(){
  const data = await getData("./ejemplo.json")
  const user0 = data[0];
  const color=user0.colorFav

  titulo.style.color = color
  titulo.textContent = user0.username
  titulo.style.fontFamily = "monospace" //font-family
}


setTitleColor()

/////////

const subtitulo = document.querySelector("h2")


subtitulo.style.color = "red";

subtitulo.style.textDecoration = "underline"

// Si utilizo cssText puedo poner varias propiedades a la vez
//Pero quito todo lo que haya en linea o haya puesto antes con .style

subtitulo.style.cssText = "font-weight: bold"