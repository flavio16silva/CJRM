/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, 
apenas faça. Essa exibição de point é uma das implementações que faremos 
na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, 
busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que 
vimos até aqui.

O uso do Bootstrap ou qualquer biblioteca CSS é opcional. Porém, eu recomendo 
que nesse momento, ao invés de focar em CSS, você foque em desenvolver a 
lógica da aplicação com o JavaScript. Em um momento futuro, você pode voltar 
e melhorar a estilização da aplicação. 
*/

const form = document.querySelector('form')
const p = document.createElement('p')
const finaleScoreContainer = document.querySelector('.final-score-container')

//form.insertAdjacentElement('beforebegin', p)

/* Código Original antes de refatorar */
form.addEventListener('submit', event => {
    event.preventDefault()

    const correctAnswers = ['r1', 'r2', 'r3', 'r4', 'r3']

    let point = 0

    //Obtem as respostas do usuario
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
    ]
    
    //Calcula a pontuação do usuário
    userAnswers.forEach((userAnswer, index) => {
       if (userAnswer === correctAnswers[index])
        point += 20
    })
        // p.setAttribute('class', 'username-correct')
        // p.textContent = 'Você acertou ' + point + ' point'
        // alert('Você acertou ' + point + ' point')
        
        
        // Atraves da referência dessa div finaleScoreContainer, 
        // vamos obter a referência do <span>. Assim a busca do <span> 
        // só ocorrerá dentro dessa div
        
        // Inserimos o percentual de acertos no <span>
        // Depois mostramos na tela tirando a class => d-none

        // ==================================================
        //             Etapa 07 - Aplicação: Quiz
        //             Exibindo a pontuação - Aula 02-01                         
                  
        //scrollTo(0, 100)   //rolada para o centesimo pixel do topo de cima para baixo         
        scrollTo(0, 0)       //retorna ao topo da página
        //finaleScoreContainer.querySelector('span').textContent = `${point}%`
        finaleScoreContainer.classList.remove('d-none')


     //Contar quantas perguntas o usuario acertou e animando as informações na tela. 
      let counter = 0
        //invocamos o metodo setInterval() e armazenamos o id que ele retornar na const timer
      const timer = setInterval (() => {
            if (counter === point) {
                clearInterval(timer)
            }

        finaleScoreContainer.querySelector('span').textContent = `${counter}%`
        counter++
      }, 10)
}) 


