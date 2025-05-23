/*
Etapa 03 - Funções e Métodos
Argumentos, parâmetros e default parameters - Aula 01-04

Algumas vezes vamos passar valores dentro da função - ver como isso funciona.
*/

/*
name => é uma variavel local que so pode ser usado dentro do bloco de código da função
    A variavel criada entre os parenteses da declaração da função é chamado de - PARAMETRO
    Separamos os PARAMETROS por virgulas dentro do parenteses
*/

const myFunc = function (name, lastName) {
    console.log(`Oi, ${name} ${lastName}!`) //substituir nome por ${name}
    //quando não passamos um valor para name, o JS atribuiu undefined e o undefined foi convertido para string e renderizado na frase. 
    /*
    A ordem dos argumentos deve corresponder a ordem dos parametros, ou seja 
    - 1º parametro sempre vai receber o 1º argumento
    - 2º parametro sempre vai receber o 2º argumento e assim por diante.
            console.log(`Oi, ${lastName} ${name} !`) => são renderizados normalmente
    */
}

/* 
Para atribuir um valor para - name - passamos dentro da invocação da função.
 Ou seja, invocando a função e passando um valor para name

 Quando passamos um valor dentro da invocação de uma função, esse valor é chamado de - ARGUMENTO
 Separamos os ARGUMENTOS por virgulas dentro do parenteses da invocação
 A ordem dos argumentos deve corresponder a ordem dos parametros, ou seja 
    - 1º parametro sempre vai receber o 1º argumento
    - 2º parametro sempre vai receber o 2º argumento e assim por diante.

*/
myFunc('Flávio', 'Leite')

//O que acontece se tivermos PARAMETROS na declaração da função e não PASSAR valores na invoção da função: 
const myFunction = function (carro = 'Audi', cor = 'vermelho') {
    console.log(`Meu ${carro} é ${cor}`) //Meu undefined é undefined
}
myFunction()
/*
Vemos que undefined foi atribuido para os dois parametros
Podemos passar valores iniciais que iremos atribuir
*/
myFunction('Mercedes', 'branco')
myFunction('BMW') //cor = 'vermelho' - manteve esse segundo parametro
/*
Caso duplique a invocação da função e passar valores como argumento, esses argumentos vão subscrever os valores default que passamos como parametros na função
    Ou caso seja passado apenas um valor como argumento e o outro fique vazio, apenas o primeiro será subscrito e o outro manterá o valor de antes. 

    Então essa é a forma que passamos valores como ARGUMENTOS para uma função e a função recebe esses valores como PARAMETROS
*/
