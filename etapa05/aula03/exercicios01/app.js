/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/
//ul.children => gera um HTMLCollection
const ul = document.querySelector('ul')
const lis = Array.from(ul.children) //pegando todos os elementos filhos da ul => li
// console.log({ul, liis})

//refatorando:
const insertToVideo = li => {
  li.classList.add('video')
}

lis.forEach(insertToVideo) //passando a função como argumento. 

//console.log(lis)


/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento 'pai' do h2
    e exiba-o no console;
*/

const h2 = document.querySelector('h2') //obter e armazenar a referencia
console.log(h2.parentElement)  //uso da propriedade => parentElement

/*
  03

  - Descubra quem é o próximo elemento 'irmão' do h1 e exiba-o no console;
*/

const h1 = document.querySelector('h1') //obter e armazenar a referencia
console.log(h1.nextElementSibling)     //uso da propriedade => nextElementSibling



/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

console.log(ul.previousElementSibling)  //uso da propriedade => previousElementSibling

/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

//console.log(lis)
/*
Função do addEventListener
1º argumento: uma string com o nome do tipo de evento que queremos escutar.
2º objeto event quando queremos identificar algo no evento do elemento

*/ 
lis.forEach(li => { //iterar
  li.addEventListener('click', event => { //executar o escutador
    console.log(event.target) //objeto event e propriedade
  })
})

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo 
    dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]
//console.log(videos)


const button = document.querySelector('button')
  //const insertVideos = video => {
const insertVideos = ({name, length}) => { //pegando a referencia do objeto acima pela propriedade
  //const li = document.createElement('li')
  // li.textContent = `${video.name}`
  // ul.append(li)

  //Outra opção:
    //ul.innerHTML += `<li>${video.name}</li>`
  ul.innerHTML += `<li>${name} | ${length}</li>` //inserindo dentro da ul
  //aplicar o destructing no parametro dessa função acima
  //destructing => evita a sintaxe do objeto.propriedade e deixa o codigo melhor
}

button.addEventListener('click', () => {
  videos.forEach(insertVideos)   
})




/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/


//const body = document.querySelector('body')
/*
1º argumento: string com o nome do evento
2º argumento: uma função de callback
*/

//deixar o body e excluirá todos os elementos internos.
const body = document.body

h1.addEventListener('click', () => {
  body.innerHTML = ''
})
