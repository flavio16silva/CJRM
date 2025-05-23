/*
Etapa 05 - O Document Object Model - DOM
Parents, children e siblings - Aula 03-02
*/

/*
Relação dos nós do DOM dentro de uma arvore de nós. 
Relação de nós diferentes dentro de uma mesma arvore

pai e filho => relações diretas no DOM. Um pai que pode ter 2 ou mais filhos dentro da arvore

Siblings => traduzindo para relação de irmãos. 
    Ou seja, elementos no mesmo nivel com o mesmo pai direto esses elementos são chamados de: irmãos
*/

/*
Pegar todos os elementos dentro da tag - article - para adicionar uma class CSS em cada um desses elementos
    Como pegar a referencia de todo um documento HTML no DOM
*/
const article = document.querySelector('article')
console.log(article.children) //todos os elementos filhos do article => HTMLCollection(5) [h2, p, p, p, div]

/*
Como iterar sobre os elementos de um: HTMLCollection, já que não funciona como array e não podemos iterar com forEach().
    Transformando/Converter num array atraves da função construtora Array.from()
*/

//Passado como argumento da invocaçao abaixo:
    //retorno de um array e não modifica o objeto original: (5) [h2, p, p, p, div] =>[[Prototype]]:Array(0)
console.log(Array.from(article.children)) 
console.log(article.children) //HTMLCollection(5) [h2, p, p, p, div], sem modificações

//Adicionando uma class CSS em cada elemento filho:
Array.from(article.children).forEach(element => {
    element.classList.add('article-element') //class inserida em todos os elementos do html
})

//Obter a referência de um elemento e atraves dessa referencia obter o pai desse elemento:
    const title = document.querySelector('h2')
    console.log(title.parentElement) //retorno do elemento pai do <h2>: <article>

    //Descobrindo o pai do <article>
        console.log(title.parentElement.parentElement) //retorno do elemento pai do <article>: <body>

//Como saber quem é o elemento irmão do <h2>:
console.log(title.nextElementSibling) //retorno do elemento irmão: tag <p>

//Como saber quem é o elemento irmão anterior do <h2>:
console.log(title.previousElementSibling) //null => Porque o <h2> não tem irmão anterior. Ele só tem um pai que é o <article>.
//Após inserção da tag <p>Novo irmão </p> no HTML temos o retorno desse tag como irmão anterior da tag <h2>



