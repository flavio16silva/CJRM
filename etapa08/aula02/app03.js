/*
Etapa 08 - Métodos de array
O método sort - Aula 02-02
*/

// O método sort => modifica o array original


//exemplo 1: ordenando strings
const names = ['Christian', 'Alfred', 'Edson']
names.sort()
console.log(names) //(3) ['Alfred', 'Christian', 'Edson']

//exemplo 2: ordenando números
const scores = [10, 50, 20, 5, 35, 70, 45]
scores.sort()
//console.log(scores) //(7) [10, 20, 35, 45, 5, 50, 70] incorreto, pois considerou apenas o primeiro número


//Melhor opção de expressão e retorno (enxuta de ordenar arrays). 
scores.sort((score1, score2) => score1 - score2)
// debugger
console.log(scores)




//exemplo 3: ordenando objetos
const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]

// theBigFamily.sort((item1, item2) => {
//     if(item1.score > item2.score) {
//         return -1
//     } else if (item2.score > item1.score){
//         return 1
//     }
//     return 0
// })
//console.log(theBigFamily)

//Melhor opção de expressão e retorno (enxuta de ordenar arrays). 

theBigFamily.sort((item1, item2) => item2.score - item1.score)

theBigFamily
//debugger