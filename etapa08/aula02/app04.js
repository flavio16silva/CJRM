/*
Etapa 08 - Métodos de array
Encadeando métodos - Aula 02-03
*/

const books = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O milagre da manhã', price: 5 },
  { name: 'Alice no País das Maravilhas', price: 10 },
  { name: 'Quem Pensa Enriquece', price: 50 },
  { name: 'O livro da ciência', price: 40 }
]

/*
Obter os livros acima de R$20 - metodo filter porque isso é uma condição
Após obter os livros precisamos gerar um string => informado o nome  
e seu valor promocional do livro - metodo map
*/

//====== Essa expressao gera um array
//const filterBooks = books.filter(book => book.price > 20)
//console.log(filterBooks)

// ===== map é um metodo de array
// const bookNameValue = filterBooks.map(book => 
//     `O preço do livro "${book.name}" caiu para ${book.price} reais.`
// )
// console.log(bookNameValue)

//Podemos entao invocar o metodo map no final da invicação do metodo filter:
const onSaleBooks = books
 .filter(({price}) => price > 20)
 .map(({name, price}) => 
    `O preço do livro "${name}" caiu para ${price} reais.`)

console.log(onSaleBooks)

/*
Destructions => é uma expressao que possibilita atribuir para uma variavel
uma copia do valor de uma propriedade de um objeto.

Um parametro, tambem é uma variavel, mas é uma variavel usada dentro do escopo 
da função que ele pertence

==> O encadeamento tambem pode ser usado em strings. a unica condição é que
o metodo que for encadeado funcione no valor que foi retornado pelo metodo
anterior.
*/ 
