//variables y entradas
var cantidad, sumatoria, promedio;
var nota = []
var sumatoria = 0 //es buena práctica que las sumatorias se incien en cero. 

cantidad = Number(prompt('Ingrese la cantidad de notas a promediar'))


//lógica
for(var index =1; index <= cantidad; index ++)
{
    nota.push(Number(prompt(`Ingresa la nota`)))
    sumatoria = sumatoria + nota[index - 1] 
}
promedio = sumatoria / cantidad
//salidas

alert (`El promedio de las calificaciones es ${promedio}`)