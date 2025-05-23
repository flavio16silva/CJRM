//Métodos comuns de strings - Aula 02-04

/*
Metodo é uma função que pertencem a um 
objeto ou tipo de dado em particular.
*/

const email = 'laracroft@rogermelo.com.br'

//lastIndexOf => obtém a última ocorrência do caractere na string.
const lastIndexOfA = email.lastIndexOf('a')
console.log(lastIndexOfA) //3

/*
slice => fatia, pega o pedaço de uma string. Esse metodo não altera a string original. 
Porque o metodo retorna uma cópia somente com a parte que precisamos. 
Dois argumentos:
1º) local onde a string deve ser pega
2º) parte da string que será descartada
*/
const emailSlice = email.slice(4, 9)
console.log(emailSlice, email) //croft, laracroft@rogermelo.com.br

/*
Metodo replace => substituir um caractere de uma string por outra
Dois argumentos:
1º) a string que deseja substituir
2º) é o caractere que irá substituir o caractere passado no primeiro argumento. 
Obs1: somente a primeira ocorrência do caractere é substituída.
Obs2: Não altera a string original
*/

const emailReplace = email.replace('laracroft', 'chun-li')
console.log(emailReplace, email)
