//variables y entradas
var nombre, apellido1, apellido2, nombreCompleto, nombresMiembros;
var arrayNombre = [] //inicializo arreglo vacío (se puede abajo también)
var arrayFamiliares = []
var arrayCombinado =[]

//lógica
nombre = prompt('Ingresa tu nombre')
apellido1 = prompt('Ingresa tu primer apellio')
apellido2 = prompt ('Ingresa tu segundo apellido')
nombresMiembros = prompt('Ingresa los nombres de tu famila separados por una coma (,)')

if(nombre === '' || apellido1 === '' || apellido2 === '' || nombresMiembros === '' || !(nombresMiembros.includes (','))){
    
    alert('Por favor llena los datos solicitados')
    
}


else
{
    arrayNombre.push(nombre) //tener que agregar los datos del array
    arrayNombre.push(apellido1)
    arrayNombre.push(apellido2)


    nombreCompleto = `Tu nombre es: ${arrayNombre[0]} ${arrayNombre[1]} ${arrayNombre[2]}`
    arrayFamiliares = nombresMiembros.split(',')
    arrayCombinado = arrayNombre.concat(arrayFamiliares)

    //salidas

    console.log(arrayNombre)
    console.log(arrayFamiliares)
    alert(nombreCompleto)
    alert(arrayCombinado.reverse())
}
