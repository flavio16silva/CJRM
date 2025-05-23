/*
Etapa 06 - Eventos em formulários
Validação básica de formulários - Aula 02-02
*/

const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback') //tag <p> criada para armazenar o retorno do usuario

form.addEventListener('submit', event => {
    event.preventDefault() 

    //obter e armazenar o valor inserido no input no momento do envio do form
    const username = event.target.username.value 
    const userRegex = /^[a-zA-Z]{6,12}$/
    const isValidUsername = userRegex.test(username)

    if (isValidUsername) {
        feedback.textContent = 'username válido =)' //inserindo na tag <p> o retorno do usuario
        return //para evitar o ELSE
    }
        feedback.textContent = 'o username deve conter entre 6 a 12 caracteres e deve conter apenas letras.'    
})