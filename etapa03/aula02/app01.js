/*
Etapa 03 - Funções e Métodos
Arrow functions - Aula 02-02
*/

//função tradicional
// const double = function (number) {
//     return number * 2
// }

//arrow function => Forma mais curta e concisa para implementar funções.
/*
Ao declarar uma arrow function não precisa declarar a palavra function
E os parenteses recebem os parametros da função
*/

/* 
1º etapa da simplificação

const double = (number) => {
     return number * 2
}

*/

/*
2º etapa da simplificação

Ao escrever uma arrow functions que somente tem um parametro, os parenteses que envolvem o parametro são opcionais
A remoção dos parenteses so pode ser feita quando a arrow function tem apenas um parametro
O valor de default não funciona nessa função - number = 0 => ...
    Se for para atribuir um valor default ao parametro é ncessário envolver com parenteses. (number = 0) =>

Caso a função não receber parametro, deixamos os parenteses vazios const double = () =>

const double = number => {
    return number * 2
}
*/

/*
3º etapa da simplificação 
Se o bloco de código estiver somente retornando uma linha com unico valor
    removemos a palavra chave - return
    eliminamos as chaves
    deixamos a arrow function somente com uma linha
    Esse valor - number * 2 = será retornando implicitamente sem necessidade de uso da palavra - return
    Esse valor que tá sendo retornando pode ser: string, array, boolean, numero ou uma expressão como essa agora.
    Não retorno bloco de codigo como IF ou Switch - pois não sao expressões
*/   

const double = number => number * 2

//Invocada aqui embaixos
const result = double(3)
console.log(`O resultado é: ${result}`)