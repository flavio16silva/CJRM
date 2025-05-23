/*
Etapa 05 - O Document Object Model - DOM
3 escopos em JavaScript que você deve conhecer - Aula 01-03
*/

/*
============= O que é um escopo? =============
 A visibilidade de uma variável
 Dependendo de onde declararmos essa variável podemos ou não acessar
 esse valor
*/

function getMessage (){
    let message = 'Oi!'

    message
}
//message //message is not defined

function myFunc () {
    let cat = 'Zeca'
    const age = 3
    var color = 'cinza'
    //console.log(age) //2º etapa, acessando de dentro
}

function myFunc2 () {
    var color = 'branco'
    const age = 5
    //console.log(age) //2º etapa, acessando de dentro
}
myFunc()
myFunc2()

// ======= 1º etapa, acessando de fora
//console.log(cat) //cat is not defined
//console.log(age) //age is not defined
//console.log(color) //color is not defined
//Essas tres variaveis não existem fora do escopo dessa função

// ========== Escopo global =============
const dog = 'Pastor-alemão'

function dogMatch (){
    //escopo da função
    const dog = 'Samoieda'
    //console.log(dog) //Samoieda, primeiro a ser impresso no console
}
dogMatch()
//console.log(dog) //Pastor-alemão, segundo a ser impresso no console

// ============= Escopo de Blocos ============

let radius = 8

if (radius > 0) {
    const PI = 3.14
    let circle = 2 * PI * radius
}

//console.log(radius) // 8
//console.log(PI) //PI is not defined
//console.log(circle) //circle is not defined

/*
Em JS um bloco tem notação de abertura e fechamento de chaves.
    for, while => todos contem algum código dentro deles
Mesmo que o bloco abaixo não seja uma função a LET esta presa dentro dele

Esse comportamento é para let e const que tem regras de escopo diferente de var
*/
if (true) {
    let dragon = 'Balerion'
    //console.log(dragon) //retorno dentro do bloco: //Balerion
}
//console.log(dragon) //dragon is not defined

//VAR
if (true) {
    var dragon = 'Balerion'
    //console.log(dragon) //Balerion
}
//console.log(dragon) //Balerion

// ========= Escopo Léxico ==========
/*
são funções aninhadas estarem sujeitas a buscas a variável
no escopo acima delas. Essa relação so tem um fluxo de fora para
dentro
*/
const external = () => {
    const book = 'Sapiens'

    const internal = () => {
        let x = 10
        console.log(book.toUpperCase())
    }
    
    internal()
    //console.log(x) //x is not defined
}
//=> uma variavel declarada dentro de uma função pode ser declarada dentro de uma função aninhada

/*
ao invocar a external() no console, retorna o SAPIENS
    Ela declarou uma const book
    declarou uma função internal
    e invocou a internal
    e executa a book, mesmo que ela não tenha sido declarada dentro da internal

- Porque o cenário acima ocorre?
    Quando declaramos uma variável dentro de uma função
    se essa variavel não foi declarada dentro da função
    essa variavel será buscada no escopo acima
    que é o escopo da external()
 */

//Outro cenário
const externa = () => {
    const book = 'Sapiens'

    const interna = () => {
        const book = 'Os testamentos'
        //console.log(book.toUpperCase())
    }    
    interna()   
}

//ao invocar a função externa() retorna no console: OS TESTAMENTOS, porque foi buscar a variavel mais próxima de seu escopo

//Outro cenário
const externo = () => {
    const book = 'Sapiens'

    const interno = () => {
        const book = 'Os testamentos'

        const extraInternal = () => {
            console.log(book.toUpperCase())
        }
        extraInternal()
    }    
    interno()   
}
/*
Ao invocar a externo() retorna no console OS TESTAMENTOS, 
como não tem variavel declarada dentro dela, busca a variavel 
de escopo mais próximo.

** Caso a const book dentro da função const interno for retirada, 
ao executamos a função externo() ela buscara por todo o código até encontrar
uma const book, assim achará na função externo()
*/


/* =======================================================
Etapa 05 - O Document Object Model - DOM
Interagindo com o browser - Aula 01-05
*/

/*
- adicionar conteúdo
- modificar estilos CSS
- reagir a eventos
- criar interações menos discretas

1) Document Object Model - DOM
2) Adicionar, modificar e remover conteúdo
3) Eventos
4) Popup
*/

/* ========================================================
Etapa 05 - O Document Object Model - DOM
O que é o DOM - Document Object Model - Aula 01-06
*/

/*
É o coração de qualquer modificação de qualquer pagina web
DOM é criado pelo browser, não faz parte da linguagem em si.
    1: documento HTML carregado no browser;
    2: o browser cria um objeto que modela esse documento;
    3: esse objeto se chama "DOCUMENT" => contem propriedades e metodos


Ao inserir: document no console, retorna uma estrutura de um objeto,
diferente da estrutura convencional, ou seja, uma representação do HTML

Exemplos de metodos do objeto documento:
documento.location
document.URL

Então programaticamente, esse documento HTML é modelado nesse objeto document criado pelo browser.

Arvores de nós
html chamado de => root node: nó raiz
html ==> head ==> title ==> text node
     ==> body ==> h1 ==> text node
              ==> div
              ==> div ==> h1 ==> text node
                      ==> p ==> text node
*/ 

/* ============================================================
Etapa 05 - O Document Object Model - DOM
Query selector & query selector all - Aula 01-07
*/

/*
1: qual elemento quer manipular?
2: buscar a referencia do elemento no DOM
3: manipular o elemento
 - isso é chamado de: query no DOM
 Query => consultar

 Query selector & query selector all => são os metodos mais eficientes para selecionar elementos do DOM.
*/

//Inseridos as tags ou seletores css dentro das invocações dos metodos do objeto Document

//pegará apenas a primeira tag: p, e as outras tags: p serão ignoradas.
const paragraph = document.querySelector('p') 
console.log(paragraph)

//pegando a referência por classe somente da primeira aparição
const paragrafo = document.querySelector('.error') 
console.log(paragrafo)

//pegando pelo selector de Div no html
const errorDiv = document.querySelector('div.error') 
console.log(errorDiv)

//pegando um seletor diretamente no HTML => clicando com o botão direito do mouse em => copy selector
const htmlSelector = document.querySelector('body > h1')
console.log(htmlSelector)

//Obtendo multiplos elementos
const paragraphs = document.querySelectorAll('p')
console.log(paragraphs) //NodeList(3) [p, p, p.error] => retorna uma lista de nós, ou seja, podemos considerar como um array e executar a sintaxe.
console.log(paragraphs[0]) 
paragraphs.forEach((paragraph) => {
    console.log(paragraph) //cada paragrafo é exibido no console
})

//obter todos os elementos da pagina que tem: error
const errors = document.querySelectorAll('.error')
console.log(errors) //NodeList(2) [p.error, div.error] => retorna uma lista/array com os elementos que contém a classe error



