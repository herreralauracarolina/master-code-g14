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

function prueba(){    
    for (let index = 0; index < Object.keys(cuentas).length; index++) {
        //let propery = Object.keys(cuentas)[index];
        let element = cuentas[Object.keys(cuentas)[index]].nip;//cuentas es el objeto, lo que está entre [] es su propiedad y .nip es sólo para acceder del segundo objeto.
        console.log(`Soy los nips: ${element}`);       
    };
}

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
                bandera = false;
            }        
    }
    if(bandera){
        validacioNip(cliente);
    }
    else{
        alert("Hay algun error en los datos que ingresaste.")
    }
    return bandera;
}

function validarBandera() {
    if (validacionUsuario()) {
        alert(`Bienvenido `);
    } else {
        alert(`Adios, tú no existes y nadie te quiere`);
    }
}