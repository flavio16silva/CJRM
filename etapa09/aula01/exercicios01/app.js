/*
filter(), quando baseado em uma condição você precisar obter um novo array
somente com alguns arrays do item orginal.

reduce(), quando baseado no array original, você precisar reduzir o array 
a algum tipo de dado.

map(), quando baseado no array original, você precisar gerar um novo array 
com a mesma quantidade de itens do array original.
*/

/*
  01

  - Exiba no console apenas as letras que a "myString" contém;
  - Não modifique a string manualmente.

  trim(), não afeta o valor da string original
*/

const myString = '    JS      '
const clearString = myString.trim()
console.log(clearString)

/*
  02

  - Baseado no score dos objetos, ordene o array "people" de forma crescente 
    (menores no topo, maiores em baixo);
  - Não modifique o array original;
  - Exiba o array ordenado no console.

  Copiar array com mesma quantidade do array original - map()
  Objetos são tipos de referencia, por isso temos que retornar um novo objeto
  que contem as mesma propriedades e valores. Senão retornaria o objeto
  original que seria alterado. 
*/

const people = [
  { firstName: 'Estevão', lastName: 'Rodriguez', score: 90 },
  { firstName: 'José', lastName: 'Antônio', score: 100 },
  { firstName: 'Felipe', lastName: 'Tavares', score: 71 },
  { firstName: 'Eric', lastName: 'Silva', score: 82 }
]

const copyOrderPeople = people
.map(({firstName, lastName, score}) => ({ firstName, lastName, score }))
.sort((item1, item2) => item1.score - item2.score)
console.log(copyOrderPeople)

/*
  03

  - Gere um novo array com apenas os animais que contém 3 letras no nome;

  Ps: Neste e nos demais exercícios, utilize o debugger para visualizar o valor 
      final que os exercícios pedem. Após resolver um exercício, remova o 
      debugger antes de partir para o próximo.

      filter(), retorna true ou false para ver que itens irão para novo array
*/

const animals = ['cão', 'gato', 'boi', 'leão', 'gnu', 'alce', 'ema']
const copy3words = animals.map(item => item)
                  .filter(({item}) => length === 3)                
console.log(copy3words)


/*
  04

  - Baseado no array "animals", gere um novo array com a quantidade de letras do 
    nome de cada animal. Ex.: [6, 8, 2].
*/

const arrayAnimals = animals.map(({item}) => length)
console.log(arrayAnimals)


/*
  05

  - Através do encadeamento de 2 métodos, gere um novo array com apenas os nomes  
    dos amigos que moram perto (que contém a propriedade "nearMe" armazenando 
    true).
*/

const friends = [
  { id: 1, name: 'João', nearMe: true },
  { id: 2, name: 'Matheus', nearMe: true },
  { id: 3, name: 'Luana', nearMe: false },
  { id: 4, name: 'Nilson', nearMe: true },
  { id: 5, name: 'Solange', nearMe: false }
]

const trueFriends = friends.filter(({nearMe}) => nearMe === true)
                    .map(({name}) => name)
console.log(trueFriends)                      



/*
  06

  - Através do encadeamento de 2 métodos, obtenha a soma só dos números ímpares 
    do array abaixo.
*/

const numbers = [46, 86, 212, 29, 51, 9, 25, 42, 81]

// const oldNumber = numbers.map(number => number)
// .reduce((acc, number) => number % 2 === 1 ? acc = acc + number++ : acc , 0)
// console.log(oldNumber)  

const impar = numbers
.filter(num => num % 2 === 1)
.reduce((acc, num) => acc + num , 0)
console.log(impar)

/*
  07

  - Através do encadeamento de 2 métodos, obtenha a soma da população de todos  
    países, exceto a China.
*/

const data = [{
  country: 'China',
  population: 1409517397
}, {
  country: 'India',
  population: 1339180127
}, {
  country: 'USA',
  population: 324459463
}, {
  country: 'Indonesia',
  population: 263991379
}]

const sumPopulation = data
.filter(({country}) => country !== 'China')
.reduce((acc, {population}) => acc + population , 0)
console.log(sumPopulation)


