/*
  01

  - Faça com que o texto do h1 do index.html seja 'exibido' com todas as letras  
    maiúsculas.
*/

const titulo = document.querySelector('h1')
titulo.innerText = titulo.innerText.toUpperCase()

/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numbers = [ 53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55 ]
const ulNumber = document.querySelector('.numbers')

numbers.forEach(number => {
  ulNumber.innerHTML += `<li class="number">${number}</li>`
})


/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/

const liList = document.querySelectorAll('li') //é um nodelits que podemos iterar

const liColor = li => {
  const liNumber = Number(li.textContent % 2 === 0) 
  if (liNumber){
    li.style.color = 'lightblue'
    return //por estar dentro de uma função, assim só executa se for true
  }
    li.style.color = 'pink'
}

liList.forEach(liColor)



/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/

const body = document.querySelector('body')
body.classList.add('body-background')



/*
  05

  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/
const link = document.querySelector('a')
link.setAttribute('href', 'https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo')

/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/

console.log(link.getAttribute('href'))

/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/

console.log(titulo.style)

/*
  08

  - Remova a classe "body-background", do elemento body.
*/
body.classList.remove('body-background')


/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/

link.classList.toggle('link')

