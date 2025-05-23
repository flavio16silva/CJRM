/*
Etapa 07 - Aplicação: Quiz
Template HTML e checando as respostas - Aula 01-03
*/
//event.preventDefault() => evitando que a pagina seja recarregada no envio do form
//RadioNodeList => é uma interface que representa uma lista de elementos com type radio dentro de um form ou fieldset
const form = document.querySelector('.quiz-form')

//Esse array vai armazenar todas as repostas correta do quiz. Nesse caso são 4 perguntas com valor correta na letra B ou segunda alternativa.
const correctAnswers = ['B', 'B', 'B', 'B']

//Adicionar um listener de eventos para escutar quando o form é enviado
form.addEventListener('submit', event => {
    event.preventDefault() 

  //Criar uma pontuação para o usuáro baseado nas respostas dele. Por isso, uma let pois o valor será alterado com o tempo
  let score = 0  

  //Saber as respostas do usuário no momento que ele enviar o form
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]
    //console.log(userAnswers) => ao enviar o form vemos todos os inputs checados.  
    //correctAnswers[index] => retorna cada item iterado no array pelo seu index
    //100% divido pelo quantidade de perguntas que são 4, cada uma vale 25%
    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25
        }
    })
        console.log(score)
})
