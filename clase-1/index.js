// const vehiculo = {
//   marca: "Fiat",
//   arrancar: function () {
//     console.log("El vehículo ha arrancado 🚗💨")
//   }
// }

// const auto = Object.create(vehiculo)

// // Estructura en consola de los objetos
// console.log(vehiculo)
// console.log(auto)

// // validar existencia de método
// console.log(vehiculo.hasOwnProperty("marca"))
// console.log(auto.hasOwnProperty("marca"))

// auto.arrancar()

// class Vehiculo {
//   arrancar() {
//     console.log("El vehículo ha arrancado 🚗💨")
//   }
// }

// class Auto extends Vehiculo {
// }

// const vehiculo = new Vehiculo()
// const auto = new Auto()

// console.log(vehiculo)
// console.log(auto)

// auto.arrancar()

let precio = 0

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
  }

  mostrarPrecioConIVA() {
    console.log(`Precio final: $${this.precio * 1.21}`)
  }
}

class Laptop extends Producto { }
class Celular extends Producto { }

const laptop = new Laptop("HP", 1000)
const celular = new Celular("Samsung", 500)

Producto.prototype.mostrarNombre = function () {
  console.log(`Producto: ${this.nombre}`)
}

laptop.mostrarNombre()
celular.mostrarNombre()
