/*
Etapa 06 - Eventos em formulários
Eventos em formulários - Aula 01-02
*/

/*
Formulários são usados para capturar algum tipo de informação do usuário.
Eventos de submit/ envios de formularios => ao clicar no botão
    Podemos usar um listener de eventos e capturar as informações que o usuário colocou no formulário.
    Também reagir aos eventos de teclado.

    Ver também expressões regulares => que são uma forma de validar o tipo de informação que o usuario insere no campo de formulario.
*/


/*
=========================================================================
Etapa 06 - Eventos em formulários
O evento submit - Aula 01-03
*/

const form = document.querySelector('.signup-form')
const usernameInput = document.querySelector('#username') //3) podemos pegar a referencia pelo 'name' do input

form.addEventListener('submit', event => {
    event.preventDefault() //parar o estado atual de carregamento da pagina sempre que o botão é acionado

    //console.log(usernameInput.value)      //1) pegando o valor digitado no input
    //console.log(form.username.value)      //2) pegando o valor digitado no input
    console.log(event.target.username.value) //4) pegando o valor digitado no input
})

/*
******* 
event.preventDefault() //evitar que o comportamento padrão do envio do form aconteça. 
    => O que é esse comportamento padrão? É a tentativa do browser de enviar os dados do form 
        para o servidor e o recarregamento a pagina
*/

/*
event.target.username => essa expressão resulta no input do id que tem username
event.target.username.value => obter o valor do input

Proximo passo => checar se o valor do usuário inseriu é válido. Se o username tem caracteres, espaços em brancos.
    E para executar essa validação usaremos => expressões regulares.
*/