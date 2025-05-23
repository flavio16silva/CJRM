/*
  01

  - Declare uma constante que recebe o seu nome;
  - Ela deve ter um escopo global.
*/
//Para uma variavel ter um escopo global => ela precisa ser declarada na raiz do documento. Fora de qualquer bloco de código.
const nome = 'Flavio' //raiz do documento

if (true) {
  //console.log(`dentro do bloco de código: ${nome}`)
}
//console.log(`fora do bloco de código: ${nome}` )

/*
  02

  - Funções também são blocos de código;
  - Crie uma função que ao ser invocada, exibe sua idade no console;
  - Dentro da função, declare uma let que armazena a sua idade;
  - Exiba sua idade no console, através da invocação da função;
  - Do lado de fora da função exiba no console o valor da let que foi declarada  
    dentro da função;
  - Um erro com a mensagem "Uncaught ReferenceError: SUA_VARIÁVEL is not  
    defined" será exibido no console;
  - Você sabe por que isso aconteceu?
*/
const myAge = function () {
  let age = 43
  console.log(`Eu tenho ${age} anos de idade.`)
}
//myAge(43)
//console.log(age) //porque age é uma variavel local

/*
  03

  - Crie um objeto "car" com as seguintes propriedades e métodos:
    - name, que recebe o nome do carro;
    - brand, que recebe a marca do carro;
    - colors, que recebe 3 cores para o carro;
    - isRunning, que recebe um boolean indicando se o carro está em movimento.  
      Inicialmente, deve receber um boolean indicando que o carro não está em  
      movimento;
    - run, que é um método que faz o carro andar e retorna a mensagem  
      "O NOME_DO_CARRO está em movimento";
    - stop, que é um método que faz o carro parar e retorna a mensagem  
      "O NOME_DO_CARRO está parado";
    - getColorsMessage, que é um método que retorna a mensagem  
      "O NOME_DO_CARRO está disponível nas cores COR_01, COR_02 e COR_03".
*/
let car = {
  name: 'A6',
  brand: 'Audi',
  colors: ['Branco', 'Vermelho', 'Azul', 'Verde'],
  isRunnig: false,
  run () {
    this.isRunnig = true
    return `O ${this.name} está em movimento`
  },
  stop () {
    this.isRunnig = false
    return `O ${this.name} está parado`
  },
  getColorsMessage () {
    const cores = this.colors.slice() //pega o array como copia sem alterar
    const ultimaCor = cores.pop()     //pega sempre a ultima cor
    // return `O ${this.name} está disponível nas cores ${this.colors.join(', ').replace(this.colors[this.colors.length - 1], `e ${this.colors[this.colors.length - 1]}`)}`
    return `O ${this.name} está disponível nas cores ${cores.join(', ')} e ${ultimaCor}`
  }
}

/*
  04

  - Faça o carro andar e exiba no console se ele realmente está em movimento.
*/
console.log(car.run())
console.log(car.isRunnig === true) //validar

/*
  05

  - Faça o carro parar e exiba no console se ele realmente está parado.
*/
console.log(car.stop())
console.log(car.isRunnig === false)
/*
  06

  - Exiba, no console, a mensagem com as cores do carro.
*/
console.log(car.getColorsMessage())

/*
  07

  - Exiba, no console, a mensagem "O carro é um MARCA_DO_CARRO NOME_DO_CARRO";
  - Utilize a notação de colchetes para acessar as propriedades do carro.
*/
console.log(`O carro é um ${car['brand']} ${car['name']}`)