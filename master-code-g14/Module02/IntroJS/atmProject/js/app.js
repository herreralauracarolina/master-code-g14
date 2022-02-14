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

function input(id) {
    return document.getElementById(id).value;
};

function validacioNip(cliente) {
    let nipInput = input("NIP");
    let nipCliente = cuentas[cliente].nip;
    if(nipInput == nipCliente){
        alert(`Bienevenido ${cuentas[cliente].nombreCompleto}`)
    }
}

function validacionUsuario() {
    let cliente = input("Cuenta");
    let bandera = false;
    for (let index = 0; index < Object.keys(cuentas).length; index++) {
        if(bandera == true) {break;}
        let element = Object.keys(cuentas)[index];
            if (cliente == element){
                bandera = true;
            }
            else{
            }        
    }
    if(bandera){
        validacioNip(cliente);
    }
    else{
        alert("Hay algun error en los datos que ingresaste.");
    }
    return bandera;
};

function consultarSaldo(cliente) {
    return alert(`Su saldo disponible es de $${cuentas[cliente].saldo}`);
};

function ingresarMonto(cliente) {
    let deposito = Number(prompt("Ingresa el monto a depositar"));
    let nuevoSaldo = cuentas[cliente].saldo + deposito;
    alert(`${cuentas[cliente].nombreCompleto} ingresaste $${deposito}, tu nuevo total es de $${nuevoSaldo}`)
};

function retirarMonto(cliente) {
    let retiro = Number(prompt("Ingresa el monto a retirar"));
    let nuevoSaldo = cuentas[cliente].saldo - retiro;
    let validacion = reglaDeNegocio(nuevoSaldo);
    if(validacion){
        alert(`${cuentas[cliente].nombreCompleto} retiraste $${retiro}, tu nuevo total es de $${nuevoSaldo}`)
    }
};

function reglaDeNegocio(nuevoSaldo) {
    if(nuevoSaldo > 990 || nuevoSaldo < 10){
        alert("Operaciòn invalidad") 
        return false;
    }
    else{
    }
};