//Aula 04-04 - Conversão de tipos e 3 avisos - Aula 04-04

//É possivel converter/transformar um dado em outro tipo de dado. 
let score = '100'
console.log(score + 1) //=>aqui ocorre uma concatenção entre uma string e um numero. Logo não poderá ser adicionado. 

let core = '100'
//core = Number(core) //função construtora, transformou a string em number
console.log(core + 1) 
console.log(typeof core)

const crazyConversion = Number('Maçã') //operação matematica que não faz sentido
console.log(crazyConversion) //NaN

const converteNumber = String(97)
console.log(converteNumber, typeof converteNumber)

const booleanConversion = Boolean(10)
console.log(booleanConversion, typeof booleanConversion) //true 'boolean'

console.log(Boolean('null'))
/*
Valores falsy:
- false
- 0
- "", '', ``
- null
- undefined
- NaN

Valores truthy
- Qualquer valor que não é falsy
*/

//Conversões explicitas de tipo de dados = executou explicitamente conversão de tipo
//Conversões implicitas de tipo de dados = são conversões que o JS faz por debaixo dos panos, antes de comparar valores.

