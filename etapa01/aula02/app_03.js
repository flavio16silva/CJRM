//Numbers - Aula 02-05

//inteiros e decimais
const radius = 10
const pi = 3.14
console.log(radius, pi)

//operadores aritméticos
const valor = 10 / 2
console.log(valor)

const reminder = 4 % 2
console.log(reminder)

const area = pi * radius ** 2

//ordem de operações  = precedências de operações
console.log(area)
/*
1º parênteses
2º expoentes ou raízes
3º multiplicação e divisão
4º adição e subtração
*/
const crazyOperation = 5 * (10 - 3) ** 2
console.log(crazyOperation)

//operadores de incremento e decremento
let postLikes = 10
//postLikes = postLikes + 1
// postLikes++ //incremento em 1 => 10 + 1
// postLikes-- //decremento em 1 => 10 - 1
console.log(postLikes)

//Adicionar, subtrair, multiplicar e dividir valores maiores que 1

//ADIÇÃO:
//postLikes = postLikes + 10
postLikes += 10 //pega o valor que a let tem e adiciona mais 10. 
console.log(postLikes)

//SUBTRAÇÃO:
postLikes = 10
postLikes -= 5 //pega o valor que a let tem e subtrai menos 5. 
console.log(postLikes)

//MULTIPLICAÇÃO
postLikes = 10
postLikes *= 3 //pega o valor que a let tem e multiplica por 3.
console.log(postLikes)

//DIVISÃO
postLikes = 10
postLikes /= 2 //pega o valor que a let tem e dividi por 2.
console.log(postLikes)

//NaN - not a number => ocorre quando algum tipo de operação não resulta em número. 
console.log(7 / 'oi') //NaN

/*
Concatenção de string com número
 - Quando concatena string com números por baixo dos panos o JS converte automaticamente esse número em uma string.
 - Sempre o resultado da - Concatenção de string com número - será uma - string
*/

postLikes = 10
const likeMessage = 'O post tem ' + postLikes + ' likes'
console.log(likeMessage)



