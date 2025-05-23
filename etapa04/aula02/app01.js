/*
Adicionando métodos - Aula 01-04
*/

//Adicionando métodos, ou seja, ações que ele pode fazer.
/*
Um método também é composto pelo par formado pelo nome da propriedade e pelo valor dela. 
    Funções criadas fora de objetos são funções
    Funções criadas dentro de um objeto são Métodos 
    Que em essência são a mesma coisa, somente com nomes diferentes. 
*/

let user = {
    //propriedade/chave: valor
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login: function (){
        console.log('Usuário Logado') //Como essa propriedade armazenar uma função é chamada de método. Esse método faz parte do objeto user.
    }, 
    logout: function (){
        console.log('Usuário deslogado')
    }
}
//Invocando o método
user.login()  //Usuário Logado
user.logout() //Usuário deslogado

/*
1º referencia o objeto ou valor
2º uso da notação de ponto
3º invocando o método
*/

