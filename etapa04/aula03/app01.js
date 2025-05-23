/*
Etapa 04 - Objetos
Objetos em arrays - Aula 03-02
*/
//Em arrays podemos fazer com que cada item seja um objeto. Armazenar objetos dentro de array é possivel e comum
//Então independente do tipo de informação que obter de uma banco de dados ou API essas informações estarão em formato de array de objetos
        // const posts = [
        //     {title: 'Empadão de frango', likes: 30}, //1º item do array
        //     {title: '4 receitas de purê de batata', likes: 50} //2º item do array
        // ]
        // console.log(posts)


let user = {
    //propriedade/chave: valor
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPosts: [
        {title: 'Empadão de frango', likes: 30}, //1º item do array
        {title: '4 receitas de purê de batata', likes: 50} //2º item do array
    ],
    login: function () { 
        console.log('Usuário Logado') 
    }, 
    logout () { 
        console.log('Usuário deslogado')
    }, 
    logBlogPosts () { 
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(post => { //post é um objeto com as propriedades title e likes
            console.log(post.title, post.likes)
        })

    }
}


user.logBlogPosts() 





