/* 
  01

  - Insira apenas o css do bootstrap no index.html.
*/

/* 
  02

  - Após um segundo e meio do carregamento da página, exiba no console a  
    mensagem "Um segundo e meio se passaram desde que a página foi carregada".
*/
/* 1º Possibilidade:
Original:
setTimeout(() => {},)

setTimeout(() => {
   console.log("Um segundo e meio se passaram desde que a página foi carregada")
  }, 1500)
*/

/*
2º Possibilidade:
Pode receber do terceiro argumento em diante, os parametros que essa função vai receber
setTimeout((message) => { //1º parametro
  console.log(message)
}, 1500, "Um segundo e meio se passaram desde que a página foi carregada") //2º e 3º parametros
*/ 

/*
3º Possibilidade:
const logMessage = (message) => { //1º parametro
  console.log(message)
}
const message = "Um segundo e meio se passaram desde que a página foi carregada"
setTimeout(logMessage, 1500, message) //const, 2º e 3º parametros
*/


/*
4º Possibilidade:
SetTimeout recebe a referencia de uma função que recebe um ou mais parametros
Já que só queremos exibir essa mensagem no console.

** o argumento message será passado como parametro da declaração do metodo log()
const logMessage = (message) => { //1º parametro
   console.log(message)
 }
o metodo log() pode receber mais de um argumento, então vamos inserir a string 'oi'
que será recebido como segundo parametro do log()
*/
const message = "Um segundo e meio se passaram desde que a página foi carregada"
setTimeout(console.log, 1500, message) //1º, 2º e 3º argumentos


/* 
  03

  - Faça o contador do index.html funcionar;
  - O clique no botão "Parar contador" deve fazer com que o contador exiba 0.
*/
//Como os botões não estão dentro de um form, não precisamos usar o preventDefault() do objto event
const buttonInitial = document.querySelector('.button-init-counter')
const buttonFinale = document.querySelector('.button-stop-counter')
const container = document.querySelector('.container')
const counterh1 = document.querySelector('.counter-container')

//let counter = 0
let timer = null //pode ser vazia sem declaração ou recebendo null

/* 1º Opção
const initial = () => {
  timer = setInterval(() => {
    container.querySelector('h1').textContent = `${counter}`
    counter++
  }, 1000)
}
*/

/* 2º Opção
const initial = () => {
  timer = setInterval(() => {
    counterh1.textContent = ++counter
  }, 1000)
}
*/
const incrementCounter = () => {
    const incrementedCounter = Number(counterh1.textContent) + 1
    counterh1.textContent = incrementedCounter
}
  
//3º Opção: sem uso de let como variavel global
const initial = () => {
  timer = setInterval(incrementCounter, 1000)
}

const stopCounter = () => {
  //container.querySelector('h1').textContent = 0
   counterh1.textContent = 0
   clearInterval(timer)
}
const finale = stopCounter

buttonInitial.addEventListener('click', initial)
buttonFinale.addEventListener('click', finale)


/* 
  04

  - A partir deste exercício, vamos voltar a trabalhar na sua versão do Quiz =D
  - Adicione mais 2 alternativas em cada pergunta do quiz.
*/

/* 
  05

  - Modifique a ordem das alternativas corretas. Ou seja, faça com que a  
    alternativa correta das perguntas não seja apenas a alternativa "B".
*/

/* 
  06

  - Refatore o código.
  
  Dicas: 
    - Primeiro, quebre o código da função de callback de envio do form em  
      funções isoladas;
    - Depois, cuide da legibilidade das funções.
*/

/* 
  07

  O exercício agora é considerarmos fazer dessa aplicação uma peça do seu 
  portfólio.

  Se você conseguiu executar o exercício da aula passada, especialmente sem ter  
  que rever partes da aula, ou seja, se você sente que desenvolveu a sua versão  
  do quiz por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  A ideia é: considere inserir a sua versão do quiz em seu portifólio apenas se 
  você sente que *aprendeu* a desenvolvê-la.

  Se você ainda não tem um site próprio para hospedar os arquivos da aplicação, 
  você pode hospedá-la no Netlify seguindo este tutorial: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
