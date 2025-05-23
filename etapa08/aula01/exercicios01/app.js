/*
  01

  - Gere um novo array com apenas os números ímpares do array abaixo e exiba 
    o novo array no console.
*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const getOddNumbers = randomNumber => randomNumber % 2 !== 0
const numberOdd = randomNumbers.filter(getOddNumbers)
console.log(numberOdd)


/*
  02

  - Exiba no console 'quantos números' abaixo de 501 o array abaixo possui.
   - Reduzir esse array a um unico valor
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const countNumbersLessThan501 = (accumulator, crazyNumber) =>
  //ternário: condição ? expressão caso true: expressão caso false
   crazyNumber < 501 ? ++accumulator : accumulator
  // if (crazyNumber < 501) {
  //   accumulator += 1
  // }
  // return accumulator


const menorNumber501 = crazyNumbers.reduce(countNumbersLessThan501, 0)
console.log(menorNumber501)


/*
  03

  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
    exiba o novo array no console.
*/

const numbers = [5, 7, 3]
const numbersElevados2 = numbers.map(number => number ** 2)
console.log(numbersElevados2)

/*
  04

  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.
  
  Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/

const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.90 },
  { name: 'Death Stranding', price: 149.99 }
]

// const carName = cart.map((item, index) => 
//  ` - Nome ${index + 1}: ` + (item.name)).join('\n') 
// console.log(carName)

//===== Uso do reduce, pelo fato do retorno ser uma string
// 1º opção
// const listNames = cart.reduce((accumulator, listName) => {
//     return `${accumulator} - ${listName.name}\n`
// }, '')

// 2º opção
// const listNames = cart.reduce((accumulator, listName) => 
//   `${accumulator} - ${listName.name}\n`, '')

//3º opção: resumida
const listNames = cart.reduce((accumulator, {name}) => 
  `${accumulator} - ${name}\n`, '')

console.log(listNames)

/*
  - Nome 1
  - Nome 2
  - Nome 3
*/

/*
  05

  - Utilizando o array abaixo, gere um novo array com apenas os filmes 
    lançados antes do ano 2000;
    --- Condição de obter apenas os filmes de 2000
  - Exiba o novo array no console.
*/

const tarantinoMovies = [
  { name: 'Bastardos inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'À Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
]

//const beforeYear2000 = tarantinoMovies.filter(tarantinoMovie => tarantinoMovie.release < 2000)
const beforeYear2000 = tarantinoMovies.filter(({release}) => release < 2000)
console.log(beforeYear2000)

/*
  06

  - Gere um novo array que contém apenas os nomes das séries abaixo;
  - Exiba o novo array no console.    
*/

const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Watchmen', releaseYear: 2019 }
]


 
//const tvFilmes = tvShows.map(tvShow => tvShow.name)   
const tvFilmes = tvShows.map(({name}) => name)
console.log(tvFilmes)

/*
  07

  - Observe os loops da sua versão do quiz e considere se, baseado no que foi  
    visto nessa aula, você deve refatorá-los.
*/
