/*
Etapa 05 - O Document Object Model - DOM
Obtendo e setando atributos - Aula 02-03
*/

/*
Atributos: No HTML, os atributos são informações adicionais que definem o comportamento, a funcionalidade ou 
a aparência de um elemento. Eles são usados dentro da tag de abertura de um elemento, após o nome da tag, 
e têm a forma "nome_do_atributo=valor".
*/

//obtendo a referencia do primeiro 'a' da pagina
const link = document.querySelector('a')
console.log(link) //<a href="https://twitter.com/rogermeleodev">Roger Melo</a>

//obtendo o valor do href da tag 'a':
console.log(link.getAttribute('href')) //https://twitter.com/rogermeleodev

//modificar ou setar um atributo atraves do metodo:
/*
recebe 2 argumentos:
1) o nome do atributo que queremos modificar
2) o valor que queremos inserir nesse atributo
*/
link.setAttribute('href', 'https://www.rogermelo.com.br')

//modificando o texto do link => O texto que fica entre as tags
link.innerText = 'Website do Roger Melo'

//Fazendo outros teste com o texto:
    //como exibir no console o valor do atributo class do paragrafo acima:
const paragraph = document.querySelector('p')
console.log(paragraph.getAttribute('class')) //error => ver no html esse valor do atributo class

    //Como modificar o valor do atributo:
paragraph.setAttribute('class', 'success') //<p class="error">Mensagem</p> onde foi alterado o valor: error para success

    //setar o valor de um atributo que não existe no elemento: Por não existir o JS irá criar esse atributo e o valor passado
paragraph.setAttribute('style', 'color: green;')    




