/*
Etapa 03 - Funções e Métodos
Retornando valores e exercícios - Aula 01-05
*/

//Retornando valores
/*
Exemplo: Imagina que um usuario passou um numero no input e queremos dobrar esse numero, multiplicar por 2.
Mas não queremos exibir esse resultado no console quando invocar a função  
Queremos obter o resultado dessa multiplicação para usa-lo em algum outro momento.
*/

/*
Aqui não podemos usar esse valor, porque o valor da multiplicação tá armazenado dentro da função na const doubleResult
    Como essa const foi declarada dentro da função, ela é local, só funciona dentro da função
*/
const double = function (number) {
    const doubleResult = number * 2
    console.log(doubleResult) 
}
double(3)
//console.log(doubleResult) ****
/*
Erro no console => doubleResult is not defined, erro ocorre porque essa constante foi declarada dentro da função, 
ela somente funciona lá dentro - escopo local. Isso vale para let
*/

/*
Como obter o valor da CONST fora do bloco da função, para utilizar o valor. 
    - A forma é: fazer a função - retornar - esse valor
*/

//Ciclo: Quando a função é invocada recebendo 3 como argumento, o 3 é atribuído ao parametro NUMBER e o código será executado. 
const dobro = function (number) {
    //1º Opção:
    //const dobroResult = number * 2 => Não necessariamente, precisamos armazenar o valor da expressão em uma constante 
    //return dobroResult
    
    //2º Opção:
    return number * 2 //=> Forma direta
}
//dobro(3) //Essa expressão resulta no valor que a função retornou. Mas aqui nada ocorre.
//Podemos armazenar essa invocação de função dentro de uma constante
const result = dobro(3)

//Exemplo de uso após o RETURN
const showResult = function (value){
    return `O resultado é: ${value}`
}
console.log(result) //Então assim, fazemos uma função - retornar - um valor. 
/*
Quando invocamos a função - showResult
Passando um argumento para ela
Ela retornará a string

No console.log invocamos a função showResult e passamos result como argumento dela. 

*/
console.log(showResult(result))
