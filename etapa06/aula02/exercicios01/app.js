/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/
//previusSibling: irmão anterior

const userInput = document.querySelector('#username')
const button = document.querySelector('button')
const form = document.querySelector('form')

const pFeedback = document.createElement('p')
const pSubmit = document.createElement('p')

//Retirar notificação do 2º paragrafo quando atender a condição 
pSubmit.setAttribute('data-feedback', 'submit-feedback')

//Função Regex:
const testeUsername = username => /^[a-zA-Z]{6,}$/.test(username)

//Objetos da função submit:
const invalidSubmitInfo = {
  paragraph: pSubmit,
  text: 'Por favor, insira um username válido',
  className: 'submit-help-feedback'
 } 

 const validSubmitInfo = {
  paragraph: pSubmit,
  text: 'Dados enviados =)',
  className: 'submit-success-feedback'
 }

 //objetos da função input/keyup: 
 const invalidusernameInfo = {
  paragraph: pFeedback,
  text: 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas',
  className: 'username-help-feedback'  
}

const validusernameInfo = {
  paragraph: pFeedback,
  text: 'Username válido =)',
  className: 'username-success-feedback'  
}

 //Função que padroniza os parametros a serem usados como objetos invocados
 const insertParagrafoDOM = paragraphInfo => {
  const {paragraph, text, className} = paragraphInfo
  paragraph.textContent = text
  paragraph.setAttribute('class', className)
}

/*
userInput.addEventListener('keyup', event => { alterando para evento: input
Assim escutamos a alteração de valor do input e não a liberação das teclas
*/

//função para refatorar a remoção do paragrafo abaixo do botão submit
const removeParagraph = () =>  {
  const pSubmitFeedbackExists = document
  .querySelector('[data-feedback="submit-feedback"]')

  //remover o paragrafo da tela caso exista
  if (pSubmitFeedbackExists) {
    pSubmitFeedbackExists.remove()
  }
}

const inputInfoValid = event => {
  button.insertAdjacentElement('beforebegin', pFeedback)

  removeParagraph()
  
  const usernameValue = event.target.value
  isValidName = testeUsername(usernameValue)

  if (!isValidName) {
    insertParagrafoDOM(invalidusernameInfo)
    /*
    Antes:
    pFeedback.textContent = 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas'
    pFeedback.setAttribute('class', 'username-help-feedback')
    */
    return
  }

  /* Antes: 
  const insertParagrafoDOM = (paragraph, text, className, previusSibling) => {
  */

  insertParagrafoDOM(validusernameInfo)

  /*
  Antes:
  pFeedback.textContent = 'Username válido =)'
  pFeedback.setAttribute('class', 'username-success-feedback')
  */

}

const submitInfoValid = event => {
  button.insertAdjacentElement('afterend', pSubmit)
  
  event.preventDefault()
  
  const userInput = event.target.username.value
  //const nameRegex = /^[a-zA-Z]{6,}$/
  //const isValidName = nameRegex.test(username)
  
  isValidName = testeUsername(userInput)
  
  /*
  criando dois objetos listados acima para receber os valores da função: 
  insertParagrafoDOM() para melhor legibilidade
  */
 
 if (!isValidName) {
   insertParagrafoDOM(invalidSubmitInfo)
   /*
   Antes:
   pSubmit.textContent = 'Por favor, insira um username válido'
   pSubmit.setAttribute('class', 'submit-help-feedback')
   */
  return
}

insertParagrafoDOM(validSubmitInfo)
/*
Antes:
pSubmit.textContent = 'Dados enviados =)'
pSubmit.setAttribute('class', 'submit-success-feedback')  
*/
}

//Funções refatoradas:
userInput.addEventListener('input', inputInfoValid)
form.addEventListener('submit', submitInfoValid)


/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/


/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/
// const itens = [1, 3, 5]

// const itemSearch = item => item > 2
// console.log(itens.some(itemSearch))

const some = (array, func) => {
 for (let i = 0; i < array.length; i++) {
  //console.log(array[i])
    if (func(array[i])) {
      return true
    }
 }
 return false
}
//recebendo dois argumentos: console.log(array, função)
console.log(some([1, 4, 2], item => item > 2))
console.log(some([1, 3, 5], item => item === 0))



