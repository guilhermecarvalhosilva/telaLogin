 //  Ação para aparecer a senha
 document.querySelectorAll('.icone-senha')[0].addEventListener('click', () => {
    if(document.getElementById('txtsenha').value.length > 0) {
        if(document.getElementById('txtsenha').type == 'text' ) {
             //  Para ocultar a senha
            document.getElementById('txtsenha').type = 'password'
            document.querySelectorAll('.icone-senha')[0].innerHTML = ` <i class="bi bi-eye-slash-fill icone-item"></i>`
        } else {
             //  para mostrar a senha
            document.getElementById('txtsenha').type = 'text'
            document.querySelectorAll('.icone-senha')[0].innerHTML = `<i class="bi bi-eye-fill icone-item"></i>`
        }
    }
})

