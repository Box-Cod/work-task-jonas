const validaNome = /^[a-z A-Z \' \"]{0,100}$/;
const validaEmail = /^[\w- \.]+@([\w-]+\.)+[\w-]{2,4}$/
const validaTelefone = /^(\()?\d{2}(\))?(|\s)?\d{5}(|\s)\d{4}$/

let campoNome = document.querySelector('#nome');
let campoEmail = document.querySelector('#email');
let campoTelefone = document.querySelector('#telefone');

function validarCampos () {

    let nomeValido, emailValido, telefoneValido = false;

    if(campoNome.validity.valueMissing) {
        alert("Campo nome Vazio");
    } else if(!validaNome.test(campoNome.value)) {
        alert("Campo nome Invalido");
    } else {
        nomeValido = true;
    }

    if(campoEmail.validity.valueMissing) {
        alert("Campo e-mail Vazio");
    } else if(!validaEmail.test(campoEmail.value)) {
        alert("Campo e-mail Invalido");
    } else {
        emailValido = true;
    }

    if(campoTelefone.validity.valueMissing) {
        alert("Campo telefone Vazio");
    } else if(!validaTelefone.test(campoTelefone.value)) {
        alert("Campo telefone Invalido");
    } else {
        telefoneValido = true;
    }

    if(nomeValido && emailValido && telefoneValido) {
        alert("As informção são validas e os campos foram preenchidos corretamente");
        campoNome.value = "";
        campoEmail.value = "";
        campoTelefone.value = "";
    }

}