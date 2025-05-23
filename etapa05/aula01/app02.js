/* ==============================================================
Etapa 05 - O Document Object Model - DOM
Outras maneiras de fazer queries no DOM - Aula 01-08
*/

//obter um elemento através do ID
/*
document.getElementById('title') => essa expressão vai resultar na referência do elemento que tem o id: title.
Não precisamos inserir o # para o id, porque essa informação já encontra-se inserida no metodo
*/
const title = document.getElementById('title')
console.log(title)

//obter elementos através do nome da classe
//Não precisamos inserir o . para o class, porque essa informação já encontra-se inserida no metodo
const errors = document.getElementsByClassName('error')
console.log(errors) //HTMLCollection(2) [p.error, div.error] => representa uma lista generica de elementos. Podemos algumas sitaxe de array
console.log(errors[0])

//obter elementos através do nome da tag
const paragraphs = document.getElementsByTagName('p')
console.log(paragraphs) //HTMLCollection(3) [p, p, p.error]
