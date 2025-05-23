/*
Etapa 05 - O Document Object Model - DOM
Eventos de clique - Aula 03-03
*/

/*
Ver o conceito de eventos e reagir aos eventos e a interação do usuário na pagina.
    Eventos de clique
*/

/*
Tópico = Reagir ao evento de clique no botão da pagina:

1) Fazer uma query no DOM para obter a referencia do elemento no qual queremos que o evento aconteça
2) Adicionar no elemento um - EventListiner => escutador de eventos em elementos especificos
3) Implementar uma função de callback que será executada quando esse evento acontecer
*/

const button = document.querySelector('button')

/*
EventListiner => 
    1º argumento - inserimos uma string como tipo de argumento que queremos escutar.
    2º argumento - uma função de callback que somente será executada quando o evento ocorrer no elemento html

*/
button.addEventListener('click', () => {
    console.log('Clicou no botão!')
})

//Inserindo os 3 passos acima para: Clicar nas <li> e seja removida da <ul> e consequentemente da tela
const lis = document.querySelectorAll('li') //nodeList

//iterar
/*
No browser quando um evento acontece dentro da função de callback o browser disponibiliza para gente um objeto no parametro dessa função.
    nome do objeto recebido por parametro: event
    dentro desse objeto usaremos a propriedade: target => armazena a referencia do elemento em que o evento ocorreu

    De modo geral, o objetivo do event (também chamado de evento) em JavaScript é representar e 
    fornecer informações sobre uma interação do usuário com a página — 
    como cliques, teclas pressionadas, movimentação do mouse, envio de formulário, entre outros.
*/
/*
1º Etapa do processo:
*/

    // lis.forEach(li => {
    //     li.addEventListener('click', event => { 
    //         //console.log('Clicou na li!') //testando click
    //         //console.log(event.target) // 1º opção <li> Comprar frango </li> e etc
    //         //console.log(li) // 2º opção: uso do: li da função de callback 

    //         const clickedElement = event.target
    //         clickedElement.style.textDecoration = 'line-through' //passar um traço em cada <li>
    //     })
    // })


/* =============================================================
Etapa 05 - O Document Object Model - DOM
Criando e removendo elementos do DOM - Aula 03-04
*/

//2º Etapa do Processo: Remoção
    //Uma opção:
//const ul = document.querySelector('ul')
//ul.remove() //remove todas as <li> do html


lis.forEach(li => {
    li.addEventListener('click', event => { 
        const clickedElement = event.target
        clickedElement.remove() //remove a <li> da lista da <ul> no HTML
    })
})

//Como adicionar um elemento na pagina:
const ul = document.querySelector('ul')
const botao = document.querySelector('button')

/*
Na função de callback não iremos usar parametro, porque?
    Como não vamos precisar obter informações sobre o click que aconteceu, o event não será usado dentro dessa função
*/
//createElement() => é um metodo do document que usamos para criar um novo elemento html. Passa o nome da tag que vai criar.
botao.addEventListener('click', () => {
     //ul.innerHTML += '<li>Novo item</li>' //inserindo um item especifico
     const li = document.createElement('li') //1º cria o elemento
     
     li.textContent = 'Novo item' //2º seta o conteudo e os atributos do elemento
     //3º adiciona como primeiro ou ulimo filho no DOM:
     //1º forma
     ul.append(li) //esse metodo insere o elemento recebido como argumento como 'ultimo' filho do elemento pai a ser encadeado.
     //2º forma
     ul.prepend(li) // esse metodo insere o elemento recebido como argumento como 'primeiro' filho do elemento pai a ser encadeado.
})





