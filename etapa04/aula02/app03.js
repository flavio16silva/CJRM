/*
Etapa 04 - Objetos
A palavra-chave this - Aula 02-03
*/

/* 
this => é um objeto de contexto. Ele representa o contexto no qual o código atual tá sendo executado. 
Dependendo de onde e como usamos o - this - o valor dele vai mudar
*/
let user = {
    //propriedade/chave: valor
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login: function () { //OPÇAO DE SINTAXE FUNCTION DECORATION
        console.log('Usuário Logado') 
    }, 
    logout () { //OPÇAO DE SINTAXE FUNCTION DECORATION
        console.log('Usuário deslogado')
    }, 
    logBlogPosts () { //criando um metodo para exibir todos os posts do metodo blogPosts
        //console.log(blogPosts)
        //console.log(this.blogPosts) //this irá referenciar o objeto: user
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(post => {
            console.log(post)
        })

        //console.log(this) -> mostrando o retorno do this com uso de uma arrow function que não é adequado. 
    }
}
//Invocando o método
//user.login()  //Usuário Logado
//user.logout() //Usuário deslogado

/*
1º demonstração:
user.logBlogPosts() //Uncaught ReferenceError: blogPosts is not defined -> tentando acessar uma propriedade do objeto internamente por outra propriedade
*/

//2º demonstração: com uso do this
user.logBlogPosts() //testando com o forEach()

//this na raiz vai referenciar o contexto global que é chamado de: window object
//console.log(this) //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

/*
Porque esse cenário acontece - dentro do escopo do objeto referencia o objeto e fora do escopo do objeto, ou seja, na raiz retorna window?

**user.logBlogPosts() => quando invocamos um metodo dessa forma o JS faz com que o valor do this seja o objeto no qual o metodo tá sendo usado
o que nesse caso é objeto: user


logBlogPosts: function () { 
        //console.log(blogPosts)
        console.log(this.blogPosts) //this irá referenciar o objeto: user
    }
*/



/*
Uso de function decoration no lugar de arrow function

 - Quando usarmos uma function DECORATION como metodo e invoca esse metodo - user.logBlogPosts(), o valor que o JS atribui ao this - é o objeto no qual o metodo
   tá sendo usado. Que nesse caso é o user
        logBlogPosts: function () { 
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(post => {
            console.log(post)
        })
*/

/*
Se transformar essa função em uma ARROW function:
logBlogPosts: () => { 
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(post => {
            console.log(post)
        })

        user.logBlogPosts() - o valor do this na raiz do arquivo é o objeto window

 O valor do this não vai mudar do ponto da invocação do metodo.
 
 Sendo assim, como não existe uma propriedade this.name e um metodo user.logBlogPosts() no objeto window
 quando salvamos, um erro será exibido no console. 
         Uncaught TypeError: Cannot read properties of undefined (reading 'forEach')

*/

/*
REDUZINDO A SINTAXE DA FUNCTION DECORATION - ATALHO:
logBlogPosts () { 
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(post => {
            console.log(post)
        })


*/