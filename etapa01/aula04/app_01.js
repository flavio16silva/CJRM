//Booleans e comparações - Aula 04-02
//Iremos utilizar booleans quando precisamos verificar alguma condição no código. 

console.log(true, false, 'true', 'false') //=> os primeiros são valores booleans e os últimos valores strings.

//Métodos podem retornar booleans
const email = 'brucewayne@rogermelo.com.br'

/*
método includes = verifica se uma string/caracteres existe dentro de uma outra string especifica, 
    se existir retorna - true, senão retorna - false.
Sabemos que string é uma sequencia de caracteres.
*/

const includes = email.includes('@') //true
const includeString = email.includes('wayne')
const includes1 = email.includes('#') //false
console.log(includes)
console.log(includeString)
console.log(includes1)

//Arrays => uso do metodo includes, verificando os itens do array
const names = ['dio', 'roger', 'robert']
arrayIncludes = names.includes('roger') //true
console.log(arrayIncludes)

//Operadores de comparação => usado para comparar um valor com o outro e 'retornar um booleans'
const age = 31

console.log(age == 31)
console.log(age == 35)
console.log(age != 35) //Leitura: age não é igual a 35
console.log(age > 31)
console.log(age < 32)
console.log(age <= 31)
console.log(age >= 31)

//Comparações com Strings
const myName = 'roger'
console.log(myName == 'roger') //true
console.log(myName == 'Roger') //false
console.log(myName > 'belinha') //true => é maior porque as últimas letras do alfabeto são maiores que as primeiras. Logo, R é maior que B
console.log(myName > 'Roger')   //true => uma letra minuscula é maior que uma letra maiuscula
console.log(myName > 'Belinha') //true => tanto o 'r' minusculo é maior que 'R' maiusculo, como é maior do que qualquer letra maiuscula.




