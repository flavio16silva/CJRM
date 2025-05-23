/*
Etapa 05 - O Document Object Model - DOM
Obtendo, adicionando, removendo e alternando classes CSS - Aula 02-05
*/

//Como mudar class através do codigo JS
    //pegando a referencia:
    const paragraph = document.querySelector('p')
    console.log(paragraph)

//Exibir uma lista com as classes que esse elemento tem, através da propriedade => classList
console.log(paragraph.classList) //DOMTokenList(3) ['error', 'class2', 'class3', value: 'error class2 class3']
//  *** Irá aparecer vazio porque o HTML encontra-se comentado

// *** Paragrafo comentado => Exemplo 2 no indexQuatro.html
//Como adicionar uma class a um elemento que não tem => usamos um metodo da classList chamado: add()
    //paragraph.classList.add('error') //constante.propriedade.metodo('string') => como argumento passa o nome da class que deseja.

//Remover a class de um elemento:
    //paragraph.classList.remove('error') //class do css é removida do elemento html

//Adicionando nova class ao elemento
    //paragraph.classList.add('success')


/*
Diferença entre: innerText e textContent: 
innerText => retorna o texto visivel que o elemento contem. 
        Exemplo: <p>lorem <span style="display:none;">error</span> lorem</p> o nome 'error' não é visivel no console

textContent => retorna todo o texto que o elemento possui independente de tá visivel ou não.
        Exemplo: <p>lorem 
                    <span style="display:none;"> error </span> 
                lorem</p> o nome 'error' é visivel no console
*/
    const paragrafos = document.querySelectorAll('p')
   // console.log(paragrafo) => NodeList(8) [p, p, p, p, p, p, p, p]
    paragrafos.forEach(paragrafo => {
        //console.log(paragrafo.innerText) //lorem lorem
        //console.log(paragrafo.textContent) //lorem error lorem

        if(paragrafo.textContent.includes('error')){ //verificando se o paragrafo tem a palavra 'error' 
            paragrafo.classList.add('error')
        }

        if (paragrafo.textContent.includes('success')){
            paragrafo.classList.add('success')
        }
    })


/*
Alternar uma class em um elemento:
    - Se um elemento tiver uma classe iremos remover
    - Se um elemento não tiver uma classe iremos adicionar 
*/
const title = document.querySelector('h1')
console.log(title)

title.classList.toggle('test') //Como o elemento não tinha a classe foi adicionada
title.classList.toggle('test') //Como o elemento tinha a classe foi removida 
