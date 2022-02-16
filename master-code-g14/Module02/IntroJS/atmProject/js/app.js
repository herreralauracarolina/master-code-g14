const cuentas = {
    174153: {
        nombreCompleto: 'Didier Thomas', 
        nip: 9867, 
        saldo: 550
    },
    984356: {
        nombreCompleto: 'Luis Castro',
        nip: 2309,
        saldo: 600,
    },
    145158: {
        nombreCompleto: 'Regina Morton',
        nip: 5090,
        saldo: 875,
    }
};

let cuentaInput;

/*Función que encuentra un elemento en el HTML y devuelve su valor*/
function input(id) {
    return document.getElementById(id).value;
};

/*Función que da la hora y los minutos del día en formato 24hrs*/
function horaDelDia() {
    var date = new Date;
    return (`${date.getHours()}${date.getMinutes()}`);
};

/*Función que da las Buenas... según la hora del día*/
function saludoPorHora(cliente) {
    let saludo;
    let hora = horaDelDia();
    if(hora >= "0000" && hora <= "1159"){
        saludo = `Buenos días ${cuentas[cliente].nombreCompleto}`;
    }
    else if(hora >= "1200" && hora <= "1859"){
        saludo = `Buenas tardes ${cuentas[cliente].nombreCompleto}`
    }
    else{
        saludo = `Buenas noches ${cuentas[cliente].nombreCompleto}`
    }
    return saludo;
};


/*Función que valida el numero de cuenta ingresado por el cliente contra el de la base de datos*/
function validacionUsuario() {
    cuentaInput = input("Cuenta");
    let bandera = false;
    for (let index = 0; index < Object.keys(cuentas).length; index++) {
        if(bandera == true) {break;}
        let element = Object.keys(cuentas)[index];
            if (cuentaInput == element){
                bandera = true;
            }
            else{
            }
                
    }
    return bandera;
};

/*Función que valida el nip ingresado por el cliente contra el de la base de datos*/
function validacioNip(cliente) {
    let bandera = false;
    let nipInput = input("NIP");
    let nipCliente = cuentas[cliente].nip;
    if(nipInput == nipCliente){
        document.getElementById("nombre").innerHTML = saludoPorHora(cliente);
        //alert(saludoPorHora(cliente))
        bandera = true;
    }
    else{

    }
    return bandera;
}
/*Función que regresa el saldo en la cuenta*/
function consultarSaldo(cliente) {
    return document.getElementById("consola").innerHTML = `Su saldo disponible es de $${cuentas[cliente].saldo}`;
    //return alert(`Su saldo disponible es de $${cuentas[cliente].saldo}`);
};

/*Función que regresa el monto a depositar y el monto nuevo*/
function ingresarMonto(cliente) {
    let deposito = Number(prompt("Ingresa el monto a depositar"));
    let nuevoSaldo = cuentas[cliente].saldo + deposito;
    if(reglaDeNegocio(nuevoSaldo)){
        document.getElementById("consola").innerHTML = `Tú deposito fue por $${deposito} y tu nuevo total es de $${nuevoSaldo}`;
        //alert(`Tú deposito fue por $${deposito} y tu nuevo total es de $${nuevoSaldo}`);
        cuentas[cliente].saldo = nuevoSaldo;
    }
};

/*Función que regresa el monto a retirar y el monto nuevo*/
function retirarMonto(cliente) {
    let retiro = Number(prompt("Ingresa el monto a retirar"));
    let nuevoSaldo = cuentas[cliente].saldo - retiro;
    if(reglaDeNegocio(nuevoSaldo)){
        document.getElementById("consola").innerHTML = `Tú retiro fue por $${retiro} y tu nuevo total es de $${nuevoSaldo}`;
        //alert(`Tú retiro fue por $${retiro} y tu nuevo total es de $${nuevoSaldo}`);
        cuentas[cliente].saldo = nuevoSaldo;
    }
};

/*Función que valida las condiciones de la tara sobre el saldo disponible*/
function reglaDeNegocio(nuevoSaldo) {
    if(nuevoSaldo > 990 || nuevoSaldo < 10){
        alert("Operación invalidad");
        return false;
    }
    else{
        
    }
    return true;
};

document.getElementById("NIP").addEventListener("keyup", function(event) {
    if (`KeyboardEvent: key ='${event.key}'` === 13) {
        event.preventDefault();
        document.getElementById("entre").click();
    }
});

/*Función que ejecuta las funciones*/
function ejecucion() {
    if (validacionUsuario()) {
        if (validacioNip(cuentaInput)) {
            document.getElementById("saldo").addEventListener("click", function () {
                consultarSaldo(cuentaInput);
            });

            document.getElementById("ingresar").addEventListener("click", function () {
                ingresarMonto(cuentaInput);
            });

            document.getElementById("retirar").addEventListener("click", function () {
                retirarMonto(cuentaInput);
            });
        }
        else{
            alert("Tu NIP es incorrecto.");
        }
    }
    else {
        alert("Hay algun error en los datos que ingresaste.");
    }
}

//html input required