
let label = document.querySelectorAll(".input_label");

let nombre = document.querySelector('.input_nombre');
let email = document.querySelector('.input_email');
let asunto = document.querySelector('.input_asunto');
let mensaje = document.querySelector('.textarea_mensaje');
let button = document.querySelector('.formcontato__botao');

// button.disabled = true;

function characterCounter(cadena, caracter) {
    let contador = 0;
    for(let i = 0; i < cadena.length; i++) {
            if(cadena[i]==caracter) {
                contador++;
            }
    }
    return contador
}

function emailFormat(cadena) {
    let index=0;    
    for(let i=0; i<cadena.length; i++) {
        if(cadena[i] == '@') {
            index=i;
        }
    }

    if(index==0 || index==cadena.length || cadena.length-index<3) {
        return 0 /* equivale a fallo */
    }

    let counter=0;
    let dotIndex=0;
    for(let i=index; i<cadena.length; i++) {
        if(cadena[i]=='.') {
            counter++;
            dotIndex=i;
        }
    }

    if(dotIndex==cadena.length-1) return 0;        
    if(counter==1) return 1; /* equivale a acierto */

    return 0;
}

nombre.addEventListener("input", function() {

    if(nombre.value.length > 49) {
        label[0].textContent = "Maximo de 50 caracteres!";
        label[0].style.color = "red";
        button.disabled = true;
    } else {
        label[0].textContent = "Nombre";
        label[0].style.color = "gray";
        button.disabled = false;
    }
})

email.addEventListener("input", function() {

    if( characterCounter(email.value, '@') > 1) {
        label[1].textContent = "Formato invalido!"; /* tranquilamente se pueden simplicar estas lineas en una funcion de deshabilitacion */
        label[1].style.color = "red";
        button.disabled = true;
    } else if( characterCounter(email.value, '@') == 0) {
        label[1].textContent = "Formato invalido!";
        label[1].style.color = "red";
        button.disabled = true;
    } else if(emailFormat(email.value)==0) {
        label[1].textContent = "Formato invalido!";
        label[1].style.color = "red";
        button.disabled = true;
    }
    else {
        label[1].textContent = "E-mail";
        label[1].style.color = "gray";
        button.disabled = false;
    }
})

asunto.addEventListener("input", function() {

    if(asunto.value.length > 49) {
        label[2].textContent = "Maximo de 50 caracteres!";
        label[2].style.color = "red";
        button.disabled = true;
    } else {
        label[2].textContent = "Asunto";
        label[2].style.color = "gray";
        button.disabled = false;
    }
})

mensaje.addEventListener("input", function() {

    if(mensaje.value.length > 299) {
        label[3].textContent = "Maximo de 300 caracteres!";
        label[3].style.color = "red";
        button.disabled = true;
    } else {
        label[3].textContent = "Mensaje";
        label[3].style.color = "gray";
        button.disabled = false;
    }
})