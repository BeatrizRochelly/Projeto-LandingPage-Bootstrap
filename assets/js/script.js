var email = document.querySelector('#email')
var assunto = document.querySelector('#assunto')
var emailOk = false
var assuntoOk = false
var mapa = document.querySelector('#mapa')

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        emailOk = true
    }
    else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else {
        txtAssunto.style.display = 'none'
        assuntoOk = true

    }

}

function enviar() {
    if (emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!')
    }
    else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '350px'
    mapa.style.height = '200px'
}
