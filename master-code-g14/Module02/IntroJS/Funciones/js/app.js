/*/function Suma(num1,num2){
    return num1 + num2;
}

function pow (z, x){
    return Suma(z, x) * Suma(z, x);
}

console.log(Suma(2,6));

console.log(Suma(2,9));

console.log(pow(2,6))/*/

//Ejercicio 2 ¨Piedra, papel o tijera¨

function randomNumber(array) {
    return array[Math.floor(Math.random() * 3)];
}

function validInput(answer) {
    var flag;
    if(answer === 'piedra' || answer ===  'papel' || answer ===  'tijera')
    {
        flag = true;
    }
    else 
    {
        flag = false;
    }
    return flag;
}

//variables
var usuario1;
const arrayJuego = ['piedra', 'papel', 'tijera'];
var usuario2;
var finish;


//lógica
do{

    alert('Bienvenidos a piedra, papel y tijera, good luck!');
    usuario1 = prompt('Qué vas a escoger, primer jugador?');

    if(validInput(usuario1)){
        alert(`Esto escogio el jugador 1: ${usuario1}`);

        //usuario2 = prompt('Qué vas a escoger, segundo jugador?');
        usuario2 = randomNumber(arrayJuego);

        alert(`Esto escogio el jugador 2: ${usuario2}`);

        if( usuario1 == 'piedra'){
            if(usuario2 === 'tijera'){
                alert('Gana jugador 1');
            }
            else if(usuario2 === 'papel'){
                alert('Gana jugador 2');
            }
            else{
                alert('Empate');
            }
        }
        else if( usuario1 === 'tijera'){
            if(usuario2 === 'piedra'){
                alert('Gana jugador 2');
            }
            else if(usuario2 === 'papel'){
                alert('Gana jugador 1');
            }
            else{
                alert('Empate');
            }
        }
        else{
            if(usuario2 === 'piedra'){
                alert('Gana jugador 1');
            }
            else if(usuario2 === 'tijera'){
                alert('Gana jugador 2');
            }
            else{
                alert('Empate');
            }
        };
    }
    else{
        alert('Eso no es valido');
    }
finish = prompt('Desea seguir jugando? si o no?');
}
while(finish.toLocaleLowerCase() === 'si');