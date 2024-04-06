document.querySelector('#verificar').addEventListener('click', () => {
    if(verificarEmail() && verificarSenha()) {
        alert('dados enviados')
        document.querySelectorAll('input')[0].value = ``
        document.querySelectorAll('input')[1].value = ``
    }

   

})


function verificarEmail() {
var emailRegex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

if(emailRegex.test(document.querySelectorAll('input')[0].value) && document.querySelectorAll('input')[0].value.length > 0){ 
    document.querySelectorAll('span')[0].classList.remove('ativo')
    document.querySelectorAll('input')[0].classList.remove('ativo')
    return true
} else{
    document.querySelectorAll('span')[0].classList.add('ativo')
    document.querySelectorAll('input')[0].classList.add('ativo')
    document.querySelectorAll('input')[0].value = ``
    return false
}
}

function verificarSenha() {
if(document.querySelectorAll('input')[1].value.length < 6) {
    document.querySelectorAll('span')[1].classList.add('ativo')
    document.querySelectorAll('input')[1].classList.add('ativo')
    document.querySelectorAll('input')[1].value = ``
    return false
} else {
    document.querySelectorAll('span')[1].classList.remove('ativo')
    document.querySelectorAll('input')[1].classList.remove('ativo')
    return true
}
}

function acaoEmail() {
if(document.querySelectorAll('input')[0].value.length > 0) {
    document.querySelectorAll('.nome-campo')[0].classList.add('ativo')
} else {
    document.querySelectorAll('.nome-campo')[0].classList.remove('ativo')
}
}