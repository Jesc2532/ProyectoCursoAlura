function asignarTextoAElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function tituloDelJuego(){
    asignarTextoAElemento('h1', 'Secret Number Game!');
    asignarTextoAElemento('P','Guess the number between 1 and 10');
}


let numeroSorteado = [];
let numeroMaximo = 10;
let NumeroRandom = generarNumeroRandom();
let Intentos = 1;


function limpiarCampo(){
    let input = document.querySelector('input');
    input.value = '';
}


function generarNumeroRandom(){

    if (numeroSorteado.length == numeroMaximo){
        asignarTextoAElemento('p', 'Ya no hay mas numeros para adivinar');
    }
    else{
    let NumeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if(numeroSorteado.includes(NumeroGenerado)){
        return generarNumeroRandom();
    }
    numeroSorteado.push(NumeroGenerado);
    return NumeroGenerado;
    }
}

function buttonClick() {
    let input = document.querySelector('input');
    
    if (input.value < NumeroRandom){
        asignarTextoAElemento('p', 'El numero es menor al numero secreto');
        limpiarCampo();
        Intentos++;
    }
    else if(input.value > NumeroRandom){
        asignarTextoAElemento('p', 'El numero es mayor al numero secreto');
        limpiarCampo();
        Intentos++;
    }
    else{
        asignarTextoAElemento('p', `Adivinaste el numero secreto en ${Intentos} ${Intentos > 1 ? " intentos" : " intento"}`);
        document.getElementById("reiniciar").disabled = false;
    }
}

function reiniciarJuego(){
    tituloDelJuego();
    document.getElementById("reiniciar").disabled = true;
    NumeroRandom = generarNumeroRandom();
    limpiarCampo();
    Intentos = 1;
}