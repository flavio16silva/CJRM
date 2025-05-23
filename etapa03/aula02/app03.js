/*
Etapa 03 - Funções e Métodos
O método forEach e callbacks - Aula 02-04
*/

//callbacks => é uma função que é passada como argumento da invocação de outras funções ou metodos
//1º passo - função sendo declarada
const myFunc = callback => {
    const value = 77

    callback(value) //3º invocando a função number, que recebe um numero por parametro
    //4º Estamos passando o value que declaramos acima como const, como argumento da invocação da função 
    /*Porque estamos invocando esse parametro callback?
        porque o valor que ele vai receber é a declaração de uma função.
    */
}

/* Invocando a função 
Iremos inserir uma função como argumento da invocação, ou seja, a função será atribuida para o parametro
*/
/* 2º passo - função foi invocada recebendo uma função por argumento. 
    Ou seja a função: number => {
                console.log(number)
                }
foi atribuida para esse parametro - callback 
Como o parametro callback tá armazenando a função number
*/
//myFunc()
myFunc(number => { //5º o valor foi recebido no parametro number
    console.log(number) //77  - value sendo exibido no console. 
})


/*
forEach => metodo de array, ou seja, vai iterar sobre o array
tradução literal: para cada, assim, para cada item de um array ele executa uma ação. 
*/

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

//Metodo simples
// socialNetworks.forEach(() => {
//     console.log('Olá') //retorna - Olá - 4 vezes
// })

//recebendo os parametros
/*
1º parametro - item atual que tá sendo iterado
2º parametro - index do item atual (opcional)
3º parametro - array que tá sendo iterado (opcional)
*/

//a declaração dessa função abaixo pode ser desaclopada.
const logArrayInfo = (socialNetwork, index, array) => {
    console.log(index, socialNetwork, array ) 
}

socialNetworks.forEach(logArrayInfo)

/*
Função Normal*/

// socialNetworks.forEach((socialNetwork, index, array) => {
//     console.log(index, socialNetwork, array ) //retorno: cada item do array será retornado no console. 
// })





