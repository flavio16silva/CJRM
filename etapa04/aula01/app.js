/*
Etapa 04 - Objetos
O que são objetos - Aula 01-02
*/

/*
Usuario de aplicação web, por exemplo:
Exemplo01:
Pode ser um objeto - User
Propriedades (Caractersticas) - e-mail, nome de usuário, idade
Métodos (Ações) - login, logout

Exemplo02:
Blog de Post
Propriedades (Caracteristicas) - titulo, conteudo e autor
Métodos (ações) - publicar, despublicar e deletar
*/

//Então, objetos em JS vão possibilitar que criemos estruturas de dados que representam certos elementos de nosso codigo ou das nossas aplicações web.
//O JS também possui objetos acoplados que iremos usar. DATE e MATCH. Exsitem os objetos individuais conhecidos como objetos literais 


//Criando um objeto literal - Aula 01-03
//Convensao de manter cada propriedade do objeto em uma linha diferente, assim manter a legibilidade. 
let user = {
    //propriedade/chave: valor
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata']
}

console.log(user)

//Acessando a propriedade de algum valor do objeto => Usando a NOTAÇÃO DE PONTO.
console.log(user.name) //Essa expressão deve resultar na string: 'João'

//Sobrescrever/modificar o valor de uma propriedade:
user.age = 32
console.log(user.age) //32

//Acessa, modificar ou subscrever o valor de uma propriedade com a NOTAÇÃO DE COLCHETES []
console.log(user['name']) //esse nome da propriedade, dentro dos colchetes precisa ser uma string ou uma variavel que armazena uma string

//Modificando o valor da propriedade
user['name'] = 'José'
console.log(user['name']) //José

//Uso de variavel
const key = 'email'

//user.key => O JS irá procurar por uma propriedade key no objeto USER
//console.log(user.key) => retorna undefined no console. 
console.log(user[key]) 
//com essa notação estamos passando a string - email - atraves da variavel key para esses colchetes. É a mesmo que usar: user['email]

//Obtendo o tipo de dado:
 console.log(typeof user) //object

