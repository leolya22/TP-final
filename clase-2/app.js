const boton = document.querySelector("button")

// callback -> función que se ejucta cuando sucede "algo"
boton.addEventListener("click", () => {
  alert("Hiciste click!")
  boton.style.backgroundColor = "red"
})

// estructuras de control

// for -> bucle
// if -> condición
// function -> fragmentos de código reutilizables que abstraen lógico

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

// if (condition) {
// }

// declaración -> pc te enseño a:
function saludar(nombre = "sin nombre") {
  console.log(`Hola ${nombre}`)
}

// invocación -> pc ejecuta esto: 
saludar()

// arrow functions
const saludar2 = (nombre = "sin nombre") => `Hola ${nombre}`


const saludo = saludar2("pepe")
console.log(saludo)

const sumar = (n1, n2) => n1 + n2

console.log(sumar(1, 2))

// -----------------------

// Parametros rest

function frutasFavoritas() {
  console.log(arguments[2])

  arguments.forEach(() => { })
}

frutasFavoritas("pera", "manzana", "naranja")