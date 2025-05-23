/*
Etapa 04 - Objetos
Variáveis e escopo de bloco - Aula 02-02
*/
//Escopo => area que o valor de uma variavel esta disponivel para gente
//As mesmas regras de escopo vistas abaixo se aplicam para CONST e LET

let age = 31 //variavel de escopo global. Pode ser usada ou acessada em qualquer parte do arquivo. Dentro ou fora do bloco de código
//let age = 51 //recria a varivel com o mesmo nome que já existe. - SyntaxError: Identifier 'age' has already been declared
if (true) { //bloco de códigos/ loops: são pequenas partes de código que são executados quando essa condição resulta em true

    //age = 41 //mudando o valor da variavel global, fora do bloco de código
    let age = 41 //podemos criar variavel de mesmo nome desde que estejam em escopos diferentes.     
    let name = 'Flávio'

    console.log(`dentro do 1º bloco de código: ${age} ${name}`) //31 //41 //Flávio

    if (true) {
        let age = 51 //criando uma nova variavel - dentro desse escopo local. 
        console.log(`dentro do 2º bloco de código: ${age}`) //41 - pegando o valor da variavel age, mas próxima.
        
        var test = 'oi' //VAR não tem escopo de bloco, por isso não usa-se mais. 
    }
}

console.log(`fora do bloco de código: ${age} ${name} ${test}`) //31 //41 //oi

//Não é possivel reatribuir um valor para uma - const