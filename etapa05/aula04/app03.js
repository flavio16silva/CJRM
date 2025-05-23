/*
Etapa 05 - O Document Object Model - DOM
Desenvolvendo um popup - Aula 04-04
*/

const button = document.querySelector('button') //botão = clique aqui
const popup = document.querySelector('.popup-wrapper') //popup que será aberto na tela ao clicar no botão
//const closeButton = document.querySelector('.popup-close') // o X que fecha o popup

button.addEventListener('click', () => {
    popup.style.display = 'block' //subscreveu o display:none que a <div> possui
})

/* Apagada porque com a função abaixo já podemos fechar a tela de popup que aparece.
closeButton.addEventListener('click', () => {
    popup.style.display = 'none'
})
*/

popup.addEventListener('click', () => {
    //obtendo o nome da class o elemento que foi clicado = 1º cenario
    const classNameClickElement = event.target.classList[0] 
        //console.log(classNameClickElement)

    const classNames = ['popup-close', 'popup-wrapper', 'popup-link']    

    /*
    Metodo some() vai iterar sobre o array classNames e verá se pelo menos um item atende a 
    condição especificada dentro do metodo. Retorna true ou false.    
    */

    const shouldClosePopup = classNames.some(className => 
        className === classNameClickElement)
    //const shouldClosePopup = classNameClickElement === 'popup-close' || classNameClickElement === 'popup-link' || classNameClickElement === 'popup-wrapper'   


    //Esse if mostra que somente os elementos que inserimos nessa condição poderão fechar o popup. Mas vamos refatorar esse código    
    if (shouldClosePopup) {
        //console.log(classNameClickElement) //= 3º cenario
        popup.style.display = 'none'
    }
        //ao clicar no X do popup o console nos retorna um DOMTokenList ['popup-close', value: 'popup-close'] = Um array
            //console.log(classNameClickElement) // 2º cenario
})