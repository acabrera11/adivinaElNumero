let numeroAleatorio = 0
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroAleatorio);
//Como ya esta la funcion asignarTextoElemento no necesito esto solo la llamo
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Digita un número del 1 al 10';

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarintento(){
    //obtenemos el valor de lo que se ha escrito en el input por parte del usuario
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroAleatorio);
    if(numeroDeusuario === numeroAleatorio){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        //activo boton nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acertó
        if(numeroDeusuario > numeroAleatorio){
            asignarTextoElemento('p','El número secreto en menor');
        }else{
            asignarTextoElemento('p','El número secreto en mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Digita un número del 1 al ${numeroMaximo}`);
    //generamos un numero aleatorio entre 1 y 10
    numeroAleatorio = generarNumeroSecreto();
    //Inicializar el numero de intentos
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar los textos iniciales
    //Inicializar la variable de nuemero de intentos
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    
    //Deshabilitar el botón de nuevo juego con querySelector
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //document.getElementById('reiniciar').setAttribute("disabled", "true");
   

}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros mostrar un mensasje y cerrar el juego
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');

    }else{
    //Si el numero generado esta en la lista generamos otro
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
         }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

condicionesIniciales();

function calcularPromedio(arr) {
    let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
  // Ejemplo de uso:
  //let numeros = [1, 2, 3, 4];
  //let promedio = calcularPromedio(numeros);
  //console.log(promedio); // 3

  