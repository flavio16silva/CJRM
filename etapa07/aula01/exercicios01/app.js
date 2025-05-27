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

/* Código Original antes de refatorar
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
    userAnswers.forEach((respostasDosUsuario, index) => {
       if (respostasDosUsuario === correctAnswers[index])
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
*/

const correctAnswers = ['r1', 'r2', 'r3', 'r4', 'r3']

let point = 0

const getuserAnswers = () => {
    //automatizando o processo de obtenção das respostas do usuario.
    let userAnswers = []

    /* 3º opção:
    correctAnswers.forEach((correctAnswers, index) => { Convenção do _, quando
    parametro não encontra-se em uso 
    */    
    correctAnswers.forEach((_, index) => {
        //legibilidade:
        const userAnswer = form[`inputQuestion${index + 1}`].value
        userAnswers.push(userAnswer)
    })

    /* 2º opção:
    for (let i = 0; i < correctAnswers.length; i++){
        console.log(form[`inputQuestion${i + 1}`].value)
    }    
    */

    /*1º Opção - Original
    const userAnswers = [
         form.inputQuestion1.value,
         form.inputQuestion2.value,
         form.inputQuestion3.value,
         form.inputQuestion4.value,
         form.inputQuestion5.value,
     ]    
    */   

    return userAnswers
}
/*
side effect => efeito colateral, é qualquer mudança de estado em uma aplicação
que pode ser percebido do lado de fora da função e que não é um valor retornado
pela função

Exemplos de efeito colateral:
 - modificar alguma variavel ou propriedade de objeto que tá do lado de fora da função
 - logar no console
 - manipular o DOM
 - desencadear qualquer processo do lado de fora da função
 - invocar outra função que produza efeito colateral

 - Estado numa aplicação: é tudo que armazena um valor. 
 - Estado compartilhado => é qualquer variavel, objeto ou espaço na memoria, que
 existe em um escopo compartilhado ou existe como propriedade de um objeto
 que é passada entre escopos. 
*/
const calculateUserPoint = userAnswers => {
     userAnswers.forEach((userAnswers, index) => {
        const isUserAnswerCorrect = userAnswers === correctAnswers[index]
        
       if (isUserAnswerCorrect)
        point += 20
    })
}

const showPoint = () => {
    //scrollTo(0, 0)
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    finaleScoreContainer.classList.remove('d-none')
}

const animationPoint = () => {
    let counter = 0
    const timer = setInterval (() => {
      if (counter === point) {
           clearInterval(timer)     //return, para uso em: não executar a linha abaixo      
      }
    finaleScoreContainer.querySelector('span').textContent = `${counter++}%`
    // counter++
    }, 10)
}

const resetUserScore = () => {
    point = 0
}

//Código após Refatorar - Transformando em funções de responsabilidade única:
form.addEventListener('submit', event => {
    event.preventDefault()
        
    const userAnswers = getuserAnswers() //Obtem as respostas do usuario
     
    resetUserScore()
    calculateUserPoint(userAnswers)  //Calcula a pontuação do usuário
    showPoint()                             //exibe a pontuação final
    animationPoint()                            //animando a pontuação final.
})


/* ==============================================================
Etapa 07 - Aplicação: Quiz
setTimeout() e o objeto window - Aula 02-02

- Melhora da usabilidade do usuário ter que rolar a pagina
para cima e ver o quanto ele acertou do quiz depois que ele 
enviou o formulário.
    - Iremos ver uma solução de rolar a tela para o topo
    automaticamente depois do envio do form

    objeto window => é um objeto que existe no escopo global da 
     aplicação. Em JS sempre existe um objeto global onde todos os 
     metodos e propriedades que usamos estão pendurados. Esse ambiente
     varia de acordo a plataforma que esta em uso. 
     Tudo que é executado em JS estão armazenados nesse objeto window.

     Quando usamos uma propriedade ou metodo do objeto window não precisamos 
     especificar o nome window antes da propriedade ou metodo. O browser entende que
     é uma propriedade ou metodo do objeto window

     window.console.log('oi')
     console.log('oi')

     Ou seja, toda vez que você vê uma metodo/propriedade que não tenha declarado
     inserido diretamente no código, o metodo/propriedade vem do window
*/

// console.log(document.querySelector('form'))
// console.log(window.document.querySelector('form'))

/*
setTimeout() => Executa uma função após uma certa quantidade de tempo que especificamos. 
Recebe 2 argumentos:
1) é uma função
2) é o tempo em milisegundos

setTimeout(() => {
    alert('executou!!')
}, 2000)

*/

/*
scrollTo()  => 
    Recebe 2 argumentos:
1) a coordenada X
2) a coordenada Y
do que deve ser exibido no canto superior esquerdo da tela
*/

/*
Etapa 07 - Aplicação: Quiz
setInterval() e animação da pontuação - Aula 02-03


setInterval() => 
    Recebe 2 argumentos:
1) a função que deve ser invocada repetidamente
2) o tempo em milisegundos em quanto e quanto tempo que a função do 1 argumento será invocada.
*/

//Função com execução infinita
// setInterval(() => {
//     console.log('1 segundo se passou')
// }, 1000)

/*
Diferença entre: setTimeout() e setInterval()
 setTimeout(), executa a função uma unica vez
 setInterval(), executa a função repetidamente no intervalo de tempo especificado
*/

//Parando a função: com limite de execuções.
/*
let counter = 0 //setando o valor inicial, será incrementada a cada execução

const timer = setInterval(() => {
    console.log('1 segundo se passou')
    counter++       //a cada vez que essa função for executada, a counter receberá o valor que tem mais 1

    if (counter === 5){
        //cancela a repetição do setInterval(s), mas para isso é retornado o id(numero unico) que a setInterval tá armazenando que é recebido na const timer
        clearInterval(timer) 
    }
    }, 1000)

*/

