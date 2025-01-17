let titulo = document.querySelector("H1");
titulo.textContent("Hora del desafío!");

function mensajeConsola(){
    console.log("El botón fue clicado");
}

function mensajePrompt(){
    let ciudad = prompt("Escribe una ciudad de brazil por favor");
    alert("Estuve en " + ciudad + ", Y me acordé de tí");
}

function mensajeAlert(){
    alert("Yo amo JS");
}

function mensajeSuma(){
    let A = prompt("Por favor indicame un numero para sumar: ");
    let B = prompt("Indicame ahora otro número por favor: ");
    let Res = Number(A) + Number(B);
    alert("Bien, la suma de " + A + " + " + B + " Es: " + Res);
}