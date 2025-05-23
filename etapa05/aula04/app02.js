/*
Etapa 05 - O Document Object Model - DOM
Mais eventos do DOM - Aula 04-03
*/

//1) Copy event => ocorre quando selecionamos o texto, clicamos com botão direito e soleciona copy
const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => {
    console.log('Copiou um texto!')
})

//2)mover o mouse em espaço especifico => box
/*
Ppropriedades = offsetX e offsetY => armazenam um numero sobre a posição do mouse. 
    Esse número corresponde a posição do pixel que o cursor do moouse encontra-se. 
    Essa contagem é feita apartir do canto superior esquerdo do container. 
        offsetX - armazena o eixo horizontal da esquerda para a direita. 
        offsetY - armazena o eixo vertical de topo para baixo
*/

const div = document.querySelector('.box') 

div.addEventListener('mousemove', event => {
    div.textContent = `X: ${event.offsetX} | Y: ${event.offsetY}` //Usado para saber a posição do cursor do mouse do usuario na tela
    //console.log(event.offsetX, event.offsetY)
})

/*
3)mover o scroll, rolar da pagina - barra de rolagem - wheel, tradução roda
        pageX - armazena o eixo horizontal da esquerda para a direita. 
        pageY - armazena o eixo vertical de topo para baixo
*/

//O evento será executado no document da pagina para identificar o scroll da pagina
document.addEventListener('wheel', event => {
    console.log(event.pageX, event.pageY)
})

