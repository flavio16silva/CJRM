/*
Etapa 05 - O Document Object Model - DOM
Modificando estilos CSS (inline) - Aula 02-04
*/

//obtendo a referencia do h1 para inserir mais estilos
const title = document.querySelector('h1')
console.log(title)

//Ao usar esse metodo nesse contexto, ao style anterior foi subescrito
    //title.setAttribute('style', 'margin:50px;') 

//Forma correta de adicionar estilo inline:

//retorna um objeto com todas as propriedades CSS que podemos usar nesse elemento
console.log(title.style)

//blue, a cor que consta no elemento
console.log(title.style.color) 

//Forma correta de inserir um estilo em elementos sem subscrever outro estilo
title.style.margin = '50px' //retorna esse novo estilo no elemento inline e também no objeto style pelo console.
title.style.color = 'red'   //retorna a nova cor sem subcresver a propriedade de margin 

//Ao escrevermos uma propriedade que possua separaçao por - usamos ao camelCase => font-size será fontSize
title.style.fontSize = '50px'

/*
Para saber como escrevemos uma propriedade em caso de duvida, dentro do console apertamos as teclas CTRL + F
e no buscador que vai abrir abaixo podemos digitar o nome da propriedade e buscas suas informações. 
*/

//Remover um estilo do elemento
title.style.margin = '' //atribuindo uma string vazias