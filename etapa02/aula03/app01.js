/*
Controle de Fluxo
O operador lógico not (!) - Aula 03-02
Quando inserimos o operador ! em frente de um boolean ele inverte o valor desse boolean. 

*/ 

//Geralmente ao usar o IF executamos um bloco de código caso essa condição resulte em true. Essa é a forma que o IF funciona.

/*
Ex.: Testar um codigo que o usuario não tá logado
Inserir um ! NOT na frente da variável não vai reatribuir um true para ela.
O uso desse operador ocorre caso deseje testar alguma condição que retorne => false
*/

let isUserLoggedIn = false //=> essa variável sempre será falsa.

if (!isUserLoggedIn) { //ao inserir o ! só estamos trocando o resultado da expressão dentro do parenteses.
    console.log('você precisa fazer login para continuar!')
} else {
    console.log('Você tá logado')
}
//O bloco desse IF só foi executado porque o operador lógico NOT dentro desses parenteses trocou o false dessa variável para true.

console.log(!true)  //leitura - Não é true = É falso
console.log(!false) //leitura - Não é falso = É true
