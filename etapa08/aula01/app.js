/*
Etapa 08 - Métodos de array
O método map - Aula 01-02
*/

/*
método map
é um metodo de array que pode ser usado quando deseja gerar 
um novo array com a mesma quantidade de itens do array original, 
só que com cada item transformado.

- o map sempre precisar retornar um valor

Passos:
1) percorrer cada item do array, 
2) executar uma transformação em cada um desses itens atraves 
    da função passada como argumento para ele
3) retornar um novo array com esses itens transformados
 - Não modifica o array original que foi encadeado

 array.map(() => {})
    Pode receber 3 parametros:
     - item: item atual que ta sendo iterado - obrigatorio
     - index: posição do item que tá sendo iterado
     - array: que é o proprio array que tá sendo iterado
*/

const numbers = [1, 2, 3]
const doubleNumbers = numbers.map(item => item * 2)
console.log(doubleNumbers, numbers)

const prices = [20, 10, 30, 25, 15, 40, 80, 5]
const salePrices = prices.map(price => price / 2)
console.log(salePrices)

const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map(product => { //objeto original passado como parametro
    if (product.price >= 30) {
        // product.price = product.price / 2 : ERRO, altera o objeto original
        // return product
        return  { //novo objeto com preços divididos por 2
            name: product.name,
            price: product.price / 2
        }
    }
    return product
})

console.log(saleProducts)
console.log(products)