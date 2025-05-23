/*
Etapa 04 - Objetos
O objeto Math - Aula 03-03
*/

console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area  = 7.2
// Math.round => convertendo numero decimal para inteiro. O decimal for menor que 5, arredonda para baixo senão para cima. => forma padrão
console.log(Math.round(area))  
// Math.floor => 'sempre' irá arredondar um numero para baixo
console.log(Math.floor(area))  
// Math.ceil => 'sempre' irá arredondar um numero para cima
console.log(Math.ceil(area))  
// Math.trunc => remover o decimal do numero e retornar somente a parte inteira
console.log(Math.trunc(area))  

//numeros aleatorios
//Math.random() => retorna um numero aleatorio decimal entre 0 e 1
const randomNumber = Math.random()

console.log(randomNumber) 

//gerando um numero aleatorio entre 0 e 100 incluindo esses dois numeros.
console.log(Math.round(randomNumber * 100))