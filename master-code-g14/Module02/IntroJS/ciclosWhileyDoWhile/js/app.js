//variables y entradas
var number, 
var sumatoria = 0
var aux = 0

/*/lógica

do{
    number = Number(prompt('Ingresa un número para continuar o nada para ternimar'))
    if(número > 0)
    {
    sumatoria = sumatoria + number
    }
}while (number > 0) /*/

while(aux === 0)
{
    number = Number(prompt('Ingresa un número para continuar o terminar'))
    if(number > 0)
    {
        sumatoria = sumatoria + number
    }
    else{
        aux = -1
    }



}


//salidas
alert(`La sumatoria de los números es ${sumatoria}`)