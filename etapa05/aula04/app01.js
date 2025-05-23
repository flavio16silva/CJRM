/*
Etapa 05 - O Document Object Model - DOM
Event bubbling e event delegation - Aula 04-02
*/


/*
Event bubbling => borbulhamento de eventos
O evento é iniciado no target do evento =======> Que é o elemento no qual o evento foi adicionado
E esse evento se propaga em direção aos pais desse target ======> para que os callbacks de eventos que esses pais tem sejam disparados também.
*/

/*
Sequencia: 
Quando clicamos em uma <li> dentro da <ul> ela se torna o target do event. o JS vai procurar se existe um Listener de eventos nesse elemento e 
vai disparar a função de callback que representa a ação que deve acontecer quando o evento é disparado. 
Esse target quando disparado ele é propagado até o topo do DOM.

- clicou na <li> ------> JS procuro listener de eventos
- propaga ao elemento pai - <ul> -----> JS procuro listener de eventos
- e assim até o topo do DOM -------> e assim por diante
*/

/*
Event delegation ==> quando atrelamos eventos em multiplos elementos, ou seja, a propagação 
de um evento para elementos existentes e novos criados
*/

const ul = document.querySelector('ul')
const button = document.querySelector('button')
//======== A <li> abaixo será comentada para testes do ==== Event delegation =====  
//================ Cenário 01 =========== Event bubbling 
/*

button.addEventListener('click', () => {
    const li = document.createElement('li')

    li.textContent = 'Novo Item'
    ul.prepend(li)
})


const lis = document.querySelectorAll('li')

//Remove o item clicado do ToDo
lis.forEach(li => {
    li.addEventListener('click', event => {
        const clickedElement = event.target
            console.log('Clicou na LI')
            event.stopPropagation() //não propaga o evento para a <ul> ou seja, elemento pai
        clickedElement.remove()
    })
})
    

ul.addEventListener('click', () => {
    console.log('Clicou na UL')
})

*/

/*
Para impedir que essa propagação ocorra podemos usar uma propriedade dentro do event chamada => event.stopPropagation()
Esse metodo vai impedir que: o evento se propague em direção aos elementos pais desse elemento no qual o evento aconteceu
*/

//================ Cenário 02 =========== Event delegation
//Adiciona um item no ToDo quando clicar no botão
button.addEventListener('click', () => {
    const li = document.createElement('li')

    li.textContent = 'Novo Item'
    ul.prepend(li)
})

ul.addEventListener('click', event => { //adicionando a propagação do evento na <ul> e isso reflete nas <li>
    //console.log(event.target)
    //console.log(event)
    const clickedElement = event.target

    if (clickedElement.tagName === 'LI') {
        clickedElement.remove()
    }
})