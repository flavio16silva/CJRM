/*
Etapa 08 - Métodos de array
O método reduce - Aula 01-04
*/


/*
O método reduce
- Recebe uma função como argumento
- Executa essa função para cada item do array

Quando usar o metodo reduce()?
  quando baseado no array original precisarmos reduzir o array
  a algum outro tipo de dado.
  Esse tipo de dado: objeto literal, string, number, ou novo array

  Poder e versatilidade para gerar o que necessariamente não
  precisa ser um array.

  array.reduce(() => {}, 0)
   - accumulator: existe para acumular o valor a cada execução da função e 
                lembrar desse valor a cada execução.
   - 0), esse valor só serve para armazenar o primeiro valor no momento
         que a função foi executada. Ponto de partida, 
         boa pratica inserir esse valor.              

  1) essa função: accumulator, item) => accumulator + item, 
      sempre precisa retornar o valor
  2) cada vez que esse parametro: accumulator + item, 
      é retornado o parametro accumulator recebe esse valor
*/

const numbers = [1, 2, 3]
const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)
console.log(sumResult)


const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
    if (phaseScore.name === 'Roger Melo') {
      accumulator += phaseScore.score
    }

    return accumulator
}, 0)

console.log(rogerScore)