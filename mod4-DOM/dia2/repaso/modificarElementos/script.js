"use strict"

const text = document.querySelector("#text");
console.log(text)

const html = document.querySelector("#HTML")
console.log(html)

const add = document.querySelector("#add")
console.log(add)

// LEER CONTENIDO

//textContent muestra el contenido de TEXTO
console.log(text.textContent)

//innerHTML ustra el contenido de HTML
console.log(html.innerHTML)


// SOBREESCRIBIR CONTENIDO

// textContent pone el texto literal
text.textContent = "Este texto se ha modificado con <strong>textContent</strong>"

// innerHTML interpreta y aplica el HTML

html.innerHTML = "Este texto se ha modificado con <strong>innerHTML</strong>"


// ¿CÓMO AÑADIR A LO QUE YA HAY?

// Sobreescribo el texto con el resultado de la lectura más lo que quiera añadir

//Lo podemos hacer con cualquiera de los métodos anteriores

add.textContent = add.textContent + " y estoy añadiendo más con JS"

//X += Y  === X = X + Y
add.textContent += " y más texto de forma abreviada"

