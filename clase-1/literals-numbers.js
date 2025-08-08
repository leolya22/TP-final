// Un numeric literal en JavaScript es simplemente un número escrito directamente en el código, en cualquiera de sus formas soportadas (decimal, binario, octal, hexadecimal, o notación científica).

// enteros
let a = 1
let b = -1
let c = 0.1

// notación cientifica
let e = 1.5e3 // 1500 (1.5 x 10³)
let f = 2e-4 // 0.0002 (2 x 10⁻⁴)

// hexadecimal -> 1 - 0 | a - f
let g = 0xFFFFFF
let h = 0xa3 // 163

// octal -> 0 - 8
const i = 0o755 // 493
const j = 0o32

// binario 
const k = 0b10100010

const bigNumber = 1_123_781
console.log(bigNumber)

// 📌 Consigna
// Crea un script que calcule el precio final de un producto usando valores numéricos escritos directamente en el código (numeric literals).

// Instrucciones:

// Define el precio base del producto (decimal).

// Define el porcentaje de IVA usando notación científica (ej. 2.1e-1 para 21%).

// Define un descuento en hexadecimal (ej. 0xA para 10%).

// Calcula el precio final con la fórmula:
// precio_final = precio_base + (precio_base * IVA) - (precio_base * descuento)

// Muestra el resultado en consola.

const precio_base = 1000.50
const IVA = 2.1e-1 // 21
const descuento = 0xa / 100 // 10

let precio_final = precio_base + (precio_base * IVA) - (precio_base * descuento)

console.log(precio_final.toFixed(2))
