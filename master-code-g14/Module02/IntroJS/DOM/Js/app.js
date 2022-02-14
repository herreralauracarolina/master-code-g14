function capturarNombre(){
    let txtNombre = document.getElementById('nombre').value;
    //document.write(`Hola ${txtNombre.value}`);
    alert(`Hola ${txtNombre}`);
}

function calcularEdad(){
    const fecha = new Date();
    let añoActual = fecha.getFullYear();
    let edad;
    let fechaNac = Number(document.getElementById("fecha").value.slice(0,4));

    if(añoActual < fechaNac){
        alert("Cálmate Benjamin Button!");
    }
    else{
        edad = añoActual - fechaNac;//obtener edad con meses
        document.getElementById("edad").innerHTML = `Este año tendrás ${edad} años.`;

    }
}

function cambiarColor(){
    document.getElementById("cuerpo").style.backgroundColor = "#b2dfdb";//regresar al color original
    //"#20b2aa";
}

document.getElementById("calcular").addEventListener("click", calcularEdad);