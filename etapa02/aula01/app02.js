/*
Aula 01-04


While Loop = ENQUANTO
executa o mesmo processo que o for loop,
ou seja, executar um codgio em um determinado numero de vezes. A única diferença é a sintaxe, a forma que são escritos. 
*/
// ====== FOR LOOP ======
for (let i = 0; i < 5; i++) {
    //console.log(`Dentro do Loop: ${i}`)
}

//====== WHILE LOOP ===== No exemplo abaixo senão incrementar o valor de i, será sempre true assim cairá no loop infinito. 
//let i = 0
//while (i < 5) {
    //console.log(`Dentro do Loop: ${i}`)
    //i++
//}

//Exemplo:
const pessoa = ['Jobs', 'Hopper', 'Turing']
let i = 0

while (i < pessoa.length){
    console.log(pessoa[i])
    i++
}
