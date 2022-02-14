//Variables y entradas
var nombre, apellido1, apellido2, nombreCompleto
var arrayNombre = [] //inicializo arreglo vacío

nombre = prompt('Ingresa tu nombre')
apellido1 = prompt('Ingresa tu primer apellido')
apellido2 = prompt('Agrega tu segundo apellido')

//Lógica
arrayNombre.push(nombre)
arrayNombre.push(apellido1)
arrayNombre.push(apellido2)

nombreCompleto = `Tu nombre es: ${arrayNombre[0]} ${arrayNombre[1]} ${arrayNombre[2]}`

//Salida
console.log(arrayNombre)
alert(nombreCompleto)