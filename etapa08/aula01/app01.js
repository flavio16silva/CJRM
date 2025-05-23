/*
Etapa 08 - Métodos de array
O método filter - Aula 01-03
*/

/*
O método filter
- Recebe uma função como argumento
- Executa essa função para cada item do array

Quando vamos usar o filter?
Baseado em uma condição que precisamos obter um novo array somente com 
alguns itens do array original

 array.filter(() => {})
    Pode receber 3 parametros:
     - item: item atual que ta sendo iterado - obrigatorio
     - index: posição do item que tá sendo iterado
     - array: que é o proprio array que tá sendo iterado

 Como o metodo filter() retorna um novo array?
    cria um array verificando quais itens do array original atendem a 
    condição especificada dentro da função.

    Essa função será executada para cada item do array e sempre
    retorna um boolean. Quando retorna true, o item é adicionado
    ao array, e quando retorna false, o item é ignorado.
    Caso retorne false em todas as iterações, o metodo filter()
    vai retornar um array vazio. 
*/


const randomNumbers = [36, 99, 37, 63]
const numbersGreatThan37 = randomNumbers.filter(item => item > 37)
console.log({numbersGreatThan37, randomNumbers})

const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter(user => user.premium)
console.log({premiumUsers, users})
