/*
Controle de fluxo
Break e continue - Aula 03-03
*/

const scores = [50, 2, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue          //pula uma iteração em particular e faz o loop continuar a ser executado. Ela ignora todo o restante do código dentro do loop FOR.
    }
    console.log(`sua pontuação: ${scores[i]}`)
    
    if (scores[i] === 100) {
        console.log('parabéns, você atingiu a pontuação máxima.')

        break //Informa que a iteração do restante do array não vai acontecer logo, o código do FOR será ignorado. E o código abaixo do loop será executado.
    }
}