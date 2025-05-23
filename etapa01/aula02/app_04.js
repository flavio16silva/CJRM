//Template strings - Aula 02-06
const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

//usando concatenção => ES5
const postMessage = 'O post "' + postTitle + '", do ' + postAuthor + ', tem ' + postComments + ' comentários.'
console.log(postMessage)

//console.log('Você manja do filme \'As Branquelas\'?') => será interpretada como um caractere a ser lido dentro da barra invertida 
//console.log("Você manja do filme 'As Branquelas'?")
console.log('Você manja do filme "As Branquelas"?')

//usando template strings
const postMensagem = `O post "${postTitle}", do author ${postAuthor}, tem ${postComments} comentários.`
console.log(postMensagem)

//criando templates HTML
const html = `
<h2>${postTitle}</h2>
<p>Autor: ${postAuthor}</p>
<span>Este post tem ${postComments} comentários.</span>
`
console.log(html)