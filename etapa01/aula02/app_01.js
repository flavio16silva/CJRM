/*
Strings - Aula 02-03

strings => encadeamento de caracteres envolvidos por aspas '', 
sejam eles letras ou números.
*/
console.log('hello, world!')

//string dentro de variavel
const email = 'fals@gmail.com'
console.log(email)

//concatenação/juntar de strings: sinal de: +
const firstName = 'Nathan'
const lastName = 'Drake'
const fullName = firstName + ' ' + lastName
console.log(fullName)

//acessando caracteres
console.log(fullName[0]) //acessando a posição na string

//comprimento da string - length: quantos caracteres possui
console.log(fullName.length)

//metodos de string
//Função é um pedaço de código que executa uma ação especifica.
//Metodo é uma função que pertencem a um objeto ou tipo de dado em particular.

//uso do parenteses no final significa um metodo.
console.log(fullName.toUpperCase())

const result = fullName.toLowerCase()
//esses dois metodos não alteram a string original
console.log(result, fullName)

/*
Metodos que esperam receber um valor dentro dos parenteses de 
execução deles.
*/

//indexOf() => buscar a posição do caractere digitado dentro do parenteses
const index = email.indexOf('@') // => argumento é o valor passado dentro de um metodo.
console.log(index) //4


