/*
  01

  - Adicione apenas uma linha de código dentro da função "getCatInfo" para fazer  
    com que as informações do gato estejam disponíveis fora da função;
  - Abaixo da função "getCatInfo", exiba no console a seguinte mensagem:

  "NOME_DO_GATO é um gato COR_DO_GATO de IDADE_DO_GATO anos."
*/

const getCatInfo = () => {
  const name = 'Marcos'
  let age = 3
  const color = 'Cinza'
  /*
   - usando o return para terem acessamos pelo lado de fora ao objeto
   - usando shorthand, ou seja, encurta. 
        Se a propriedade tem o mesmo nome do valor, podemos deixar apenas um nome. 
      O JS por debaixo dos panos atribui os valores a suas propriedades.
  */ 
  // return { 
  //   name: name, 
  //   age: age, 
  //   color: color}

  return { name, age, color}
 
}
//Como essa função getCatInfo() retorna um objeto, podemos invocar a função e usar a notação de ponto para pegar as variaveis e seus valores
// 1) forma de resumir essas invocações na frase
// const name = getCatInfo().name
// const color = getCatInfo().color
// const age = getCatInfo().age

//2) Destructing Assigment => expressão que possibilita atribuir para variaveis copias de item de array ou valores de um objeto.
//variaveis name, age, color ao serem declaradas irão receber o valor das propriedades name, age, color do objeto
const {name, age, color } = getCatInfo()

console.log(`${name} é um gato ${color} de ${age} anos.`)

/*
  02

  - Adicione apenas duas linhas de código dentro da função "external" para  
    exibir no console a string que a const movie armazena, com todas as letras  
    maiúsculas.
*/

const external = () => {
  const movie = 'Parasite'

  const internal = () => {
    const extraInternal = () => {
      console.log(movie.toUpperCase())
    }
    extraInternal() //invocada
  }
  internal() //invocada
}

external()

/*
  03

  - Exiba no console o array abaixo com a ordem dos itens invertida;
  - O resultado exibido deve ser [1, 2, 3];

  Dica: procure pelo método reverse, no MDN.
   - altera a ordem onde o primeiro vem para ultimo e vice-versa
*/

let randomNumbers = [3, 2, 1]
randomNumbers.reverse()
console.log(randomNumbers)
/*
  04

  - Exiba no console o array abaixo com o 1º item removido;

  Dica: procure pelo método shift, no MDN.
   - remove o primeiro item do array - de indice 0
*/

let crazyArray = [
  { prop1: '1', prop2: '2' },
  function getMessage () { return 'hi' },
  [ 5, 96, 53  ]
]

//console.log(crazyArray)
crazyArray.shift()
console.log(crazyArray)

/*
  05

  - Encontre no array abaixo o cão com o nome "Zequinha" e exiba esse objeto  
    no console;

  Dica: procure pelo método find, no MDN.
   - O método find() retorna o valor do primeiro 
   elemento do array que satisfizer a função de teste provida
*/

const dogs = [
  { name: 'Olivia', age: 3, gender: 'Female', breed: 'Maltês' },
  { name: 'Zé', age: 2, gender: 'Male', breed: 'Pug' },
  { name: 'Jade', age: 4, gender: 'Female', breed: 'Shiba inu' },
  { name: 'Zequinha', age: 7, gender: 'Male', breed: 'Poodle' },
  { name: 'Xica', age: 6, gender: 'Female', breed: 'Chihuahua' }
]


const found = dogs.find(element => element.name === "Zequinha") //função de callback executada para cada item do array dogs
console.log(found)


/*
  06

  - Cole o markup HTML abaixo em seu index.html;
  - Utilize o query selector para obter a referência do título principal da  
    página, através da classe dele;
  - Exiba a referência do título principal no console.

  <section>
    <article>
      <h1 class="main-title">Curiosidades sobre o filme Jurassic Park</h1>

      <ul>
        <li>
          <h2 class="secondary-title">Direto das páginas do livro</h2>
          <p>No livro Parque dos Dinossauros, de Michael Crichton, o personagem John Hammond anuncia orgulhoso que o guia turístico do parque é o ator Richard Kiley, conhecido nos Estados Unidos. No filme, o diretor Steven Spielberg convidou o próprio Kiley para interpretar a si mesmo nesta cena.</p>
        </li>

        <li>
          <h2 class="secondary-title">Passou adiante</h2>
          <p>O ator William Hurt chegou a ser convidado para interpretar o Dr. Alan Grant, mas recusou o papel sem nem mesmo ler o roteiro original do filme.</p>
        </li>

        <li>
          <h2 class="secondary-title">Sistemas operacionais do parque</h2>
          <p>Nos diversos softwares que aparecem em Jurassic Park foram utilizadas várias linguagens. Pode-se notar que um dos programas utilizados no parque foi escrito em Pascal, em um dos monitores percebe-se a utilização do sistema UNIX e a interface gráfica utilizada é a 3D File System Navigator, da Sillicon Graphics.</p>
        </li>
      </ul>
    </article>
  </section>
*/
const title = document.querySelector('.main-title') //querySelector('.main-title') => metodo com invocação de um argumento string, onde tá a classe
console.log(title)
/*
  07

  - Obtenha um NodeList com as referências de todos os títulos secundários da  
    página, através da classe deles;
  - Exiba esse NodeList no console.
*/

//metodo: querySelectorAll()
//argumento: .secondary-title

const secondaryTitle = document.querySelectorAll('.secondary-title')
console.log(secondaryTitle)
