/*
Etapa 04 - Objetos
Tipos de refêrencia vs Tipos primitivos - Aula 03-04
*/

//Tipos primitivos: Numbers, Strings, Booleans, Null, Undefined, Symbol, BigInt

//Tipos de Referência: Todos os tipos de objetos => Objetos literais, arrays, funções, datas e todos os outros objetos

/*
Stack => significa pilha, ou seja, uma pilha de diferentes valores na mémoria. mais rápido. Valores primitivos

Heap => Amontoado, tem mais espaço disponivel para armazenar objetos maiores e mais complexos. Mais lento. Valores de Referência

Quando armazenamos um objeto nume variavel
O objeto é armazenado no HEAP
É criado um ponteiro na STACK apontado para o objeto/array no HEAP

Stack:                      HEAP:
pointer fruits ==========> ['banana', 'pera', 'uva']

                let scoreOne = 50
                let scoreTwo = scoreOne
                scoreOne = 100
 50: scoreTwo
 50: scoreOne 
 Dois numeros iguais mais armazenados em posições diferentes da stack da memoria    
 100: scoreOne => receberá novo valor       
 
                    let userOne = {name: 'Flávio', score: 100}
                    let userTwo = userOne
                    userOne.score = 50

pointer userTwo ===============> {name: 'Flávio', score: 100}
pointer userOne ===============> {name: 'Flávio', score: 100}       
*/

//valores primitivos
let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`) //50 // 50   Valor primitivo realmente copia o valor na stack

//modificando o valor da scoreOne:
scoreOne = 100
console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`) //100 // 50   
/*
Isso comprova que quando fazemos uma copia dessa forma let scoreTwo = scoreOne de valores primitivos, 
quando mudamos um desse valores 7 o outro não é afetado porque estamos lhe dando com valores diferentes na memoria
*/

//valores de referência
let userOne = {name: 'Flavio', age: 43} //objeto
let userTwo = userOne

console.log(userOne, userTwo) //{name: 'Flavio', age: 43} {name: 'Flavio', age: 43}

// userOne.age = 44, assim
userTwo.age = 50 //, ou assim
console.log(userOne, userTwo) //{name: 'Flavio', age: 44} {name: 'Flavio', age: 44}

//Como as duas let que tão no STACK apontam para o mesmo objeto no HEAP sempre teremos o mesmo resultado


