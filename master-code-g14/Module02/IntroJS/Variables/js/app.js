//1.- Qué datos de entrada necesito
/* var nombre
var apellido
var fechaNacimiento
var fechaActual
//Otro ejemplo es */ var nombre, apellido, añoNacimiento, añoActual, edad, mitad
nombre = prompt('Ingresa tu nombre')
apellido = prompt('Ingresa tu apellido')
añoNacimiento = Number (prompt('Ingresa tu año de nacimiento'))
añoActual = Number (prompt('Ingresa el año actual'))
//2.-Qué tengo qué hacer con esos datos
edad = añoActual - añoNacimiento
//3.-Cómo y qué tengo que mostrar al ususario
//document.write('Hola' + nombre + apellido + 'tu edad es' + edad)
document.write(`Hola ${nombre} ${apellido}, tu edad es: ${edad}, la división arroja ${mitad}`)