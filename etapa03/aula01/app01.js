//O que são funções - Aula 01-02

/*
Do tipo - objeto
Tem como principal objetivo:  permitir criar um bloco de código que podemos invocar e executar quando quiser. 
Invocando a função: nomeDaFunção() que executará o código dentro dela.

O código será escrito uma única vez dentro da função, mas podemos executá-lo multiplas vezes.

Passar valores para dentro da função, pegar esses valores fazer algo e depois devolver uma saída.
*/ 



/*
Etapa 03 - Funções e Métodos
Function declaration, function expression e hoisting - Aula 01-03
*/

//Function declaration
function sayHi () {    //bloco de código
    console.log('oi')  //código
}

//sayHi() //invocando a função. O que de fato invoca a função são os parenteses (). 
//sayHi()
//sayHi()

//function expression => quando atribuimos a função a uma variável
//Não inserimos nome nessa função, porque o nome dela é a const showFood.
const showFood = function () {
    console.log('pizza')
}
//showFood() //o nome da constante seguida de parenteses invoca a função
//showFood()

/*
Qual a diferença entre - Function declaration e function expression?
Praticamente nenhuma, mas temos um detalhe chamado - hoisting
Hoisting - pode ser traduzido como içamento, ou seja, puxar para cima, levantar, elevar.

Function declaration
Quando criamos uma função dessa forma, se ela estiver em qualquer local de seu código e que não seja no topo do arquivo, por debaixo dos panos
o JS puxa a criação da função para o topo do arquivo.

function expression
O mesmo não ocorre com esse tipo de declaração de função, ou seja, não funciona nesse caso. 
*/

//Hoisting - Function declaration
sayHello() //1º a invocação antes

//2º depois a criação da função
function sayHello (){ //por debaixo dos panos, o JS puxa a criação da função para o topo do arquivo. Por isso não há erro no código.
    console.log('olá')
}


//Hoisting - Function expression => não são içadas
showEat() //Retorna ERRO NO CONSOLE
/*
Cannot access 'showEat' before initialization => Não é possivel acessar a showEat, antes dela ser iniciada. 
Ou seja, não foi puxada para cima por debaixo dos panos pelo JS
*/

const showEat = function () {
    console.log('água')
}

/*
Contar com o içamento por debaixo dos panos não é uma boa ideia. Em certas quanto menos você contar com o que ocorre por debaixo dos panos, 
mas previsivel será sua aplicação. E quanto mais previsivel for sua aplicação, mas facil será debugar ou concertar erros nela.

Então para manter a previsibilidade e o fluxo do código, na maioria dos casos, vamos preferir declarar nossas funções no topo do código.
*/
