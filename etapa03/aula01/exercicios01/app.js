/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/

/*
Para impedir que o parâmetros recebam undefined, caso a função seja invocada sem o argumento;
Podemos atribuir um valor de 0 a esse parametro como default
Se na invocação da função um argumento for inserido, o valor do argumeto irá sobrescrever esse parametro - 0
*/

//Usamos o - return - para que o resultado da operação não fique preso dentro da função.
function multiplicar (n1 = 0, n2 = 0) {
  return n1 * n2
}
multiplicar()
//console.log(multiplicar(4, 2))
//Atribui o 4 para n1/ atribui o 2 para o n2. E depois executar o código dentro do bloco.
//Essa expressão além de atribuir os numeros ao parametros e executar o bloco dentro do codigo da função. 
//A expressão vai resultar no valor que ela tá retornando, que é 8

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

const dividir = function (primeiro = 0, segundo = 0) {
  return primeiro / segundo
}
//console.log(dividir(4, 2))

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/

//Toda vez que essa função for invocada ela vai exibir no console o valor do parametro value
const log = function (value = 'Você deve passar um valor') {
  console.log(value) 
}
for (let i = 0; i < 7; i++){
  let contar = i + 1
  //log(`Esta é a ${contar}º vez que essa string é exibida.`)
  //invocamos a função log e passamos a frase como template string.
}

// =============== Meu código =================
// const seteVezes = function repetir (valor = '') {
//   console.log(valor) 
// }
//   for (let i = 1; i <= 7; i++){
//     seteVezes(`Esta é a ${i}º vez que essa string é exibida.`)    
//   }

const teste = function rodar (valor = '') {
  console.log(valor)
}
for(let i = 0; i < 7; i++) {
  //teste(`Esta é a ${i}º vez que essa string é exibida.`)
}


/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

const transformToUpperCase = function (array = []) { //valor default do parametro = []
  let newArray = [] //Receberá todas as palavras em UpperCase

  for (let i = 0; i < array.length; i++) { //gerar um novo array com o array que tá vindo do parametro
    newArray.push(array[i].toUpperCase())
  }
  return newArray //para exibir esse novo array no console, retorna essa função no array
} 

//log(transformToUpperCase(millennialWords)) //Usando função da questão 3

//============ Meu código ==================
function letras (words = []) {
  let newWords = []
  for (let i = 0; i < words.length; i++) {
    newWords.push(words[i].toUpperCase())
  }
  return newWords
}
//console.log(letras(millennialWords))
/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Previna que o parâmetro dessa função receba undefined;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]

let positiveNumberCounter = 0
let negativeNumberCounter = 0

const isPositive = function (number = 0) { //parametro number recebendo 0 como valor default
  return number >= 1 //Vai receber o item, que retornará um boolean informado se é maior ou menor que 1
}

for (let i = 0; i < randomNumbers.length; i++) {
  if (isPositive(randomNumbers[i])) { //Passando a invocação da função isPositive e como argumento o item atual = randomNumbers[i]
    positiveNumberCounter++
    } else {
      negativeNumberCounter++
    }
  }

  //console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${positiveNumberCounter} positivos e ${negativeNumberCounter} negativos.`)


// ================ Meu Codigo ====================
let contarPositivo = 0
let contarNegativo = 0
let totalNumber = 0

function number (newNumber = 0) {  
  for (let i = 0; i < randomNumbers.length; i++) { 

    let numero = randomNumbers[i]
    if( numero === undefined) {
       numero = newNumber
    }  

      if (randomNumbers[i] >= 1) {
      contarPositivo++
    } else {
      contarNegativo++
    }  
    totalNumber++    
  }
  
}
number()

//console.log(`O array "randomNumbers" possui ${totalNumber} números, sendo ${contarPositivo} positivos e ${contarNegativo} negativos.`)

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/
//const getOddNumbers = function (numbers = []){
//   let newArray = []

//   for (let i = 0; i < numbers.length; i++){ //numbers - é o array que recebemos por parametro.
//        if (numbers[i] % 2 !== 0) {
//         newArray.push(numbers[i]) //passando o item atual
//        }
//   }
//   return newArray
// }
//console.log(getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]))

// =============== Meu codigo =====================
const oddNumbers = [83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]

let newOddNumbers = []

function getOddNumbers (number = []) {
  for (let i = 0; i < number.length; i++) {
      if (number[i] % 2 !== 0) {
        newOddNumbers.push(number[i])
      }
  }
  return newOddNumbers  
}

//getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])
//console.log(getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]))



/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]



let sentence = ''

for (let i = 0; i < functions.length; i++) {
  sentence += `${functions[i]()} `
}
console.log(sentence)

//functions[i] - retorna função atual
//sentence += - recebe todo o valor que ela já tem
//functions[i]() obtendo a string que a função retorna, invocamos a função functions(), do começo do array

 
  

