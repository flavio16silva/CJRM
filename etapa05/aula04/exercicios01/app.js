/*
  01

  - Faça com que ao clicar em um dos elementos dentro da div, a mensagem  
    'Clicou na div.' não seja exibida no console.
*/

const div = document.querySelector('div')
const elementsInsideDiv = Array.from(div.children)

const h2 = document.querySelector('h2')

/*
Essa função do forEach() abaixo tá executando um evento de click em cada elemento da div.
  Para descobrir qual filho da div foi clicado, não precisamos adicionar um evento para cada filho da div 
  Podemos usar o event, na listener de eventos da div para descobrir qual elemento foi clicado e executar alguma ação
  Baseada nessa informação

  Comentar o forEach() abaixo: Codigo Original

  elementsInsideDiv.forEach(element => {
    element.addEventListener('click', event => {
      event.stopPropagation() 
      const clickedElement = event.target.tagName
      h2.textContent = `Clicou no ${clickedElement.toLowerCase()}, filho da div.` 
    })
  })
*/
const showMessageClick = ({target}) => {
  const clickedElement = target.tagName.toLowerCase() //obter a tag do elemento clicado

  if (clickedElement === 'div') {
    h2.textContent = `Clicou na div.`  
    return //parando a função para não ler abaixo do if, senão vai atribuir essa frase ao <h2>
  }

  h2.textContent = `Clicou no ${clickedElement}, filho da div.`  
}
div.addEventListener('click', showMessageClick)

/*
  02

  - No código acima, faça com que quando um filho da div for clicado, a mensagem  
    exibida no console seja "Clicou no NOME_DA_TAG_COM_LETRAS_MINÚSCULAS, filho
    da div.".
*/

/*
  03

  - No index.html, abaixo da div sem classe, insira um h2;
  - Faça com que a mensagem de "clique na div" e a mensagem de "clique em algum
    filho da div", ao invés de ser exibida no console, seja inserida neste h2.
*/
    
    
    
   
/*
  04

  - Faça com que quando o texto do 'h2' for copiado, a mensagem "Texto copiado!"  
    seja exibida no console.
*/
    //refatorando: 
    const copyText = () => {
      console.log("Texto copiado!")
    }
    h2.addEventListener('copy', copyText)

/*
  05

  - Faça com que o movimento do mouse dentro da div com a classe "egg" substitua
    o texto que ela tem por 
    "Eixo X: COORDENADA_EIXO_X | Eixo Y: COORDENADA_EIXO_Y".
*/
      const mouseEgg = document.querySelector('.egg')

      //refatorando: 
      const moveCoordenadas = ({offsetX, offsetY}) => {
        mouseEgg.textContent = `Eixo X: ${offsetX} | 
              Eixo Y: ${offsetY}` }

      mouseEgg.addEventListener('mousemove', moveCoordenadas)
/*
  06

  - Modifique a cor do ovo para "lightgoldenrodyellow" quando o botão for 
    clicado.
*/    

      const button = document.querySelector('button')
        //refatorando:
        const changeColor = () => {
          mouseEgg.style.background = 'lightgoldenrodyellow'
        }
      
      button.addEventListener('click', changeColor)
/*
  07

  - Se o array de pessoas abaixo conter, no mínimo, um(a) Front-end developer,
    exiba a mensagem abaixo no console.

    "O array people contém, no mínimo, um(a) Front-end developer."
*/

const people = [
  { id: 1, name: 'Pedro Henrique', profession: 'Dentista' },
  { id: 2, name: 'Fábio Alexandre', profession: 'Físico' },
  { id: 3, name: 'Thiago Ferreira', profession: 'Veterinário' },
  { id: 4, name: 'Marcelo Antonio', profession: 'Matemático' },
  { id: 5, name: 'Camilla Midori', profession: 'Engenheira Civil' },
  { id: 6, name: 'Gustavo D\'Aqui', profession: 'Gerente de Marketing' },
  { id: 7, name: 'Ana Paula', profession: 'Front-end developer' },
  { id: 8, name: 'Matheus Manucci', profession: 'Piloto' },
  { id: 9, name: 'Hamilton Silva', profession: 'Advogado' }
]

// people.forEach( pessoa => {
//   if (pessoa.profession.includes('Front-end developer')){
//     console.log('O array people contém, no mínimo, um(a) Front-end developer.')
//   }  
// })

// people.forEach(({profession}) => {
//   if( profession === 'Front-end developer') {
//     console.log('O array people contém, no mínimo, um(a) Front-end developer.')
//   }
// })

/*
person - representa cada pessoa do array
retornar a propriedade - person.profession que é recebida pelo parametro person
função some() - sempre precisa retornar um boolean = retorna true ao chegar no objeto e não itera mais no array
    - tem como objetivo: ver se um item atende a condiçao especificada.
*/

//Original: people.some( person => person.profession === 'Front-end developer')


const peopleFront = people.some(({profession}) => 
      profession === 'Front-end developer')

if(peopleFront) {
  console.log('O array people contém, no mínimo, um(a) Front-end developer.')
}

