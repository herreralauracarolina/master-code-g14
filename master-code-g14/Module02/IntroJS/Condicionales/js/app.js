//Variables
var nombreCompleto, añoNacimiento, añoActual, edad, msg

nombreCompleto = prompt('Ingresa tu nombre')
añoNacimiento = Number(prompt('Ingresa tu año de nacimiento'))
añoActual = Number(prompt('Ingresa el año actual'))

//proceso lógico
//En el ejercicio yo lo que necesito es que las 3 tengan datos
if(nombreCompleto === '' || añoNacimiento === 0 || añoActual === 0 )
{
    msg = 'Por favor ingresen los datos faltantes'
}
else
{
    if(edad <= 12)
    {
    msg = `Hola ${nombreCompleto} tú eres un niño aún`
    }
    else if (edad > 12 && edad < 18)
    {
    msg = `Hola ${nombreCompleto} tú eres un adolescente`
    }
    else if (edad >= 18 && edad < 65)
    {
    msg = `Hola ${nombreCompleto} tú eres un adulto`
    }
    else
    {
    msg = `Hola ${nombreCompleto} tú eres un adulto mayor`
    }
}

//salida de datos
alert(msg)