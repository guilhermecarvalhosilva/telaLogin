    // Evento para acionar a validação do formulario
    document.querySelector('#verificar').addEventListener('click', () => {
        if(verificarEmail() && verificarSenha()) {
            document.querySelectorAll('input')[0].value = ``
            document.querySelectorAll('input')[1].value = ``
            document.querySelectorAll('.nome-campo')[0].classList.remove('ativo')
            document.querySelectorAll('.mensagem')[0].classList.add('ativo')
            setInterval(() => {
                document.querySelectorAll('.mensagem')[0].classList.remove('ativo')
            }, 1000*3)
        }

    

    })

    // Verificar se o e-mail digitado é valido ou não
    function verificarEmail() {
        var emailRegex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(emailRegex.test(document.querySelectorAll('input')[0].value) && document.querySelectorAll('input')[0].value.length > 0){ 
            // Para quando o campo está vazio ou o e-mail errado
            document.querySelectorAll('span')[0].classList.remove('ativo')
            document.querySelectorAll('input')[0].classList.remove('ativo')
            return true
        } else{
            // Para quando o e-mail está certo
            document.querySelectorAll('span')[0].classList.add('ativo')
            document.querySelectorAll('input')[0].classList.add('ativo')
            document.querySelectorAll('input')[0].value = ``
            document.querySelectorAll('.nome-campo')[0].classList.remove('ativo')
            return false
        }
    }

    // Verificar se a senha digitado é valido ou não
    function verificarSenha() {
        if(document.querySelectorAll('input')[1].value.length < 6) {
                // Para quando o campo está vazio ou tem menos que seis caracteres
            document.querySelectorAll('span')[1].classList.add('ativo')
            document.querySelectorAll('input')[1].classList.add('ativo')
            document.querySelectorAll('input')[1].value = ``
            return false
        } else {
            // Para quando a senha está certo
            document.querySelectorAll('span')[1].classList.remove('ativo')
            document.querySelectorAll('input')[1].classList.remove('ativo')
            return true
        }
    }


       // Acão para o placeHolder subir no input de e-mail
    function acaoEmail() {
        if(document.querySelectorAll('input')[0].value.length > 0) {
            document.querySelectorAll('.nome-campo')[0].classList.add('ativo')
        } else {
            document.querySelectorAll('.nome-campo')[0].classList.remove('ativo')
        }
    }