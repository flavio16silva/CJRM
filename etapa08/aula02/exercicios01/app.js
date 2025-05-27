/*
  01

  - Ordene o array de strings abaixo em ordem alfabética;
  - Não modifique o array original;
  - Exiba o array ordenado no console.

  obs.: não podemos usar o sort porque ele altera o array original.
  Usamos o metodo map() para copiar o array original e depois aplicar o 
  metodo sort()
*/

const getArrayCopy = array => array.map(item => item)

const names = ['Caio', 'André', 'Dário']
const nameCopyOrder = getArrayCopy(names).sort()
console.log(nameCopyOrder)

/*
  02

  - Ordene, de forma crescente, os objetos do array abaixo baseado em seus id's;
  - Não modifique o array original;
  - Exiba o array ordenado no console.

  - Fazer uma copia do array e 
  - Ordenar uma cópia
*/

const characters = [
  { id: 3, name: 'Simba' },
  { id: 2, name: 'Nala' },
  { id: 1, name: 'Scar' },
  { id: 4, name: 'Mufasa' }
]

//Para uso do map(), precisamos que retorne um novo objeto.

//Primeiro o objeto será criado, ({id: character.id, name: character.name}), devido ordem de precedencia
//Depois o return é executado: => ({id: character.id, name: character.name}))

const copyOrderCharacter = characters
//map(({id, name}) => ({id, name}))
  .map(character => character)
  .sort((item1, item2) => item1.id - item2.id)
  console.log(copyOrderCharacter)

  /*
  As variaveis do destructiong não precisam ter necessariamente 
  o mesmo nome das propriedades do objeto
    */

/*
  03

  - Ordene o array de números abaixo de forma crescente;
  - Não modifique o array original;
  - Exiba o array ordenado no console.

   - Copia o array original com o metodo map()
   - Ordena o array copiado com o metodo sort()
*/

const numbers = [41, 15, 63, 349, 25, 22, 143, 64, 59, 291]

const copyOrderNumbers = getArrayCopy(numbers)
  .sort((number1, number2) => number1 - number2)
console.log(copyOrderNumbers)


/*
  04

  - Encontre e exiba no console o 1º item maior que 50 do array abaixo.
*/

const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 70]

//==== minha reposta =====
const orderNum = randomNumbers.filter(randomNumber => randomNumber > 50)
console.log(orderNum[0])

//===== resposta do professor =====
const numMaior50 = randomNumbers.find(number => number > 50)
console.log(numMaior50)

/*
  05

  - Ordene o array de strings abaixo em ordem alfabética-invertida (Z-A);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = ['Cauã', 'Alfredo', 'Bruno']
//==== minha resposta =====
const copyPeople = people.map(person => person)
    .sort((person1, person2) => person1 < person2 ? 1 : -1 )
console.log(copyPeople)

//=== resposta do professor ===
// const peopleCopyOrderReverse = getArrayCopy(people).sort().reverse()
// console.log(peopleCopyOrderReverse)

/*
  06
  
  - Através do array abaixo, gere a mensagem "vinho cozido, tomate cozido, 
    cebola cozida, cogumelo cozido";
  - Exiba a string no console.

  - Temos um array e precisamos gerar uma string
  - parametro acc => armazena o valor que a função retorna a cada execução
*/

const ingredients = ['vinho', 'tomate', 'cebola', 'cogumelo']

const veryEats = ingredients.reduce((acc, item, index, array) => {
  const lastWord = item[item.length - 1] === 'a' ? 'cozida' : 'cozido'
  const isLastItem = index === array.length -1
  const ingredientMessage = acc + `${item} ${lastWord}`

  return isLastItem ? ingredientMessage : `${ingredientMessage}, `
}, '')

console.log(veryEats)


/*
  07
  
  - À partir do array abaixo, obtenha e exiba no console o total de pessoas que 
    assistiram apenas os filmes da Disney.
*/

const topBrazilMovies = [
  { title: 'Vingadores: Ultimato', peopleAmount: 19686119, distributedBy: 'Disney' },
  { title: 'Titanic', peopleAmount: 17050000, distributedBy: 'Paramount / 20th Century' },
  { title: 'O Rei Leão', peopleAmount: 16267649, distributedBy: 'Disney' },
  { title: 'Vingadores: Guerra Infinita', peopleAmount: 14572181, distributedBy: 'Disney' },
  { title: 'Tubarão', peopleAmount: 13035000, distributedBy: 'Universal' },
  { title: 'Nada a Perder', peopleAmount: 11944985, distributedBy: 'Paris Filmes' },
  { title: 'Os Dez Mandamentos', peopleAmount: 11259536, distributedBy: 'Paris / Downtown Filmes' },
  { title: 'Tropa de Elite 2', peopleAmount: 11204815, distributedBy: 'Zazen' },
  { title: 'Os Vingadores', peopleAmount: 10968065, distributedBy: 'Disney' },
  { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10735524, distributedBy: 'Embrafilme' }
]

const peopleDisneyTotal = topBrazilMovies.reduce((acc, movie) => {
  (movie.distributedBy === 'Disney' ? acc += movie.peopleAmount : acc)    
  return acc }, 0)

console.log(peopleDisneyTotal)

/*
  08
  
  - Considerando o array abaixo, gere um array de cães;
  - Os cães, ao invés da idade original, devem conter sua "idade humana";
    - Algumas pessoas dizem que 1 ano de um cachorro equivale à 7 anos de uma 
      pessoa. Cientificamente, não é tão simples assim, mas para fins didáticos,  
      se baseie nessa informação para fazer o cálculo.
  - Exiba no console o array dos cães com as idades convertidas.
*/

const pets = [
  { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
  { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
  { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
  { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
  { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
  { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' }
]

const dogAge = pets.filter(({type}) => type === 'Dog')
//propriedades recebendo uma variavel de mesmo nome, podemos resumir
// name: name,
// age: age * 7,
// gender: gender,
// type: type
.map(({name, age, gender, type}) => ({name, age: age * 7, gender, type})) 
console.log(dogAge)


/*
  09
  
  - Considerando o array topBrazilMovies, através do map ou do reduce, insira 
    os nomes dos filmes na ul do index.html.

*/
const ul = document.querySelector('.list-group')
// ===== uso do map()
// const nameMovie = topBrazilMovies
//     .map(movie => `<li>${movie.title}</li>`)
//     .join('')

//ul.innerHTML += nameMovie


// ===== uso do reduce()   
const listMovie = topBrazilMovies
.reduce((acc, {title}) => acc + `<li>${title}</li>`, '')
ul.innerHTML += listMovie

/*
  10
  
  - Na sua versão do Quiz, teste se ao enviar o form pela 2ª vez consecutiva, a 
    pontuação do envio anterior é contabilizada;
  - Exemplo: exibe 100% no 1º envio e 200% no 2º envio (sem modificar as 
    alternativas entre os envios);
    - Se isso está acontecendo, proponha uma solução para que o 2º submit não 
      considere a pontuação do envio anterior.
*/
