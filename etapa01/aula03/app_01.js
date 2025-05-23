//Arrays - Aula 03-02

/*
Porque usamos array?
 - para armazenar uma lista de valores/dados que geralmente tem uma 
   relação entre si => podem ser lista de numeros ou strings.
*/

//Arrays
let heroes = ['Batman', 'Catwoman', 'Iron Man']
console.log(heroes)
console.log(heroes[0])   // => Quero obter o item do index[] tal que encontra-se no array heroes. o JS é zerobasic.
console.log(heroes[3-2]) // => Podemos usar expressões númericas

//Caso deseje subscrever, reatribuir, atribuir, um novo valor para qualquer um desses itens.
heroes[2] = 'Spider-Man'
console.log(heroes)

const ages = [31, 25, 39, 40, 25]
console.log(ages[2])

//Array com dados/tipos diferentes
const randomArray = ['Parker', 'Diana', 19, 18]
console.log(randomArray)

//Metodos de arrays
console.log(heroes.length) //retorna o numero de elementos/itens do array

/*
Metodo Join() => retorna uma nova string com todos os itens do array concatenados e separados por virgula
O join pode receber um argumento opcional ou separador: - | 
*/
const joinHeroes = heroes.join('-')
console.log(joinHeroes) //Batman,Catwoman,Spider-Man
//Exemplo de separadores: Batman|Catwoman|Spider-Man

//Obtendo a primeira ocorrência do index de um valor do array
const indexOf25 = ages.indexOf(25)
console.log(indexOf25) // 1
//Obs.: Toda vez que passamos um valor que não existe no array, -1 é retornado

//Metodo concat() => pode concatenar, pode juntar dois arrays. Esse metodo não modifica o array original.
const moreHeroes = heroes.concat(['Superman', 'Wolverine'])
console.log(moreHeroes) //['Batman', 'Catwoman', 'Spider-Man', 'Superman', 'Wolverine']

/*
Metodo Push() => metodo que empurra ou adiciona no final do array. Além de adicionar, retorna o número de itens do array. 
Altera o valor original do array, isso é chamado de mutação de valores.
*/

const pushToHeroes = heroes.push('Ciclops', 'Hulk')
console.log(pushToHeroes) //5
console.log(heroes)       // ['Batman', 'Catwoman', 'Spider-Man', 'Ciclops', 'Hulk']

//Metodo Pop() => Remove o último item de um array. Esse metodo modifica o array original
const popHeroes = heroes.pop()
console.log(popHeroes) //Hulk => recebe o item dentro da variavel.
console.log(heroes)    //['Batman', 'Catwoman', 'Spider-Man', 'Ciclops']



