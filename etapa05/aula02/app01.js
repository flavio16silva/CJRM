/*
Etapa 05 - O Document Object Model - DOM
Adicionando e modificando conteúdo em uma página - Aula 02-02
*/
//Modificar o texto dentro do elementos que nós selecionarmos e como modificar o HTML dentro desses elementos. 

const paragraph = document.querySelector('p') //expressão irá ressultar no primeiro paragrafo encontrado na pagina.  
//obtendo todo elemento
    //console.log(paragraph) 

//obtendo apenas o texto dentro do paragrafo
    //console.log(paragraph.innerText) 

//modificar o texto dentro do paragrafo
    //paragraph.innerText = 'Texto inserido' 

//concatenando com o valor/string que já existe
    //paragraph.innerText += ' Texto inserido' 

//modificar o texto de multilplos elementos de uma unica vez
const paragraphs = document.querySelectorAll('p')
paragraphs.forEach((paragraph, index) => {
    //console.log(paragraph.innerText) //retorna o texto de cada elemento p da pagina
    //paragraph.innerText += ` Novo Texto ${index + 1}` ***
})

//Adicionar e modificar o HTML que esse elemento contem => a tag
const div = document.querySelector('.content')

//retorna o HTML que a div tem dentro dela que é o p. 
console.log(div.innerHTML) 

//modificar esse HTML, ou seja, atribuir
    //div.innerHTML = '<h2>Novo h2</h2>'  //altera/modifica
div.innerHTML += '<h2>Novo h2</h2>' //atribui ou inclui
/*
Quando a gente usa o sinal de atribuição se ja houver algum HTML dentro da div, 
    ou de qualquer outro elemento que obtemos a referencia
    o HTML que estamos inserindo sobrescreve o html que esse elemento já tinha dentro dele. 
    e senão houver html dentro da div, o html especificado é criado dentro dela 
*/
//Exemplo: foi obtido de um banco de dados um array de pessoas e vai gerar um template html que exiba o nome dessas pessoas
const people = ['Jonathan', 'Vinicius', 'Diego']
people.forEach(person => {
    div.innerHTML += `<p>${person}</p>`
})





