/*
Etapa 06 - Eventos em formulários
Expressões regulares - Aula 01-04
*/

/*
const form = document.querySelector('.signup-form')
const usernameInput = document.querySelector('#username') //3) podemos pegar a referencia pelo 'name' do input

form.addEventListener('submit', event => {
    event.preventDefault() //parar o estado atual de carregamento da pagina sempre que o botão é acionado

    //console.log(usernameInput.value)      //1) pegando o valor digitado no input
    //console.log(form.username.value)      //2) pegando o valor digitado no input
    console.log(event.target.username.value) //4) pegando o valor digitado no input
}) 

*/

/*
event.target.username => essa expressão resulta no input do id que tem username
event.target.username.value => obter o valor do input

Proximo passo => checar se o valor do usuário inseriu é válido. Se o username tem caracteres, espaços em brancos.
    E para executar essa validação usaremos => expressões regulares.

     - expressões regulares => são usadas em varias linguagens de programação. 
     REGEX é uma abreviatura de regular expression
     Padrões usados para dar match em combinações de caracteres em strings
     As expressões regulares precisam esta dentro de //
*/

/*
Exemplo de REGEX: 
^javascript$ => para dizer que não pode haver caracteres antes e depois do padrão que desejamos que dê match
^[a-z]$ => Dar match em qualquer letra de a a z: caracter set => é uma lista que dá match com qualquer caracter que inserimos dentro dele.
           Somente com uma string de unico caracter.     
        Exemplo: b, se digitar bc não dá match porque são 2 caracteres
^[b-y]$ => Exemplo: a, o match não ocorre. se digitar bc, o match não ocorre. 
                    Já c ocorre match        
^[a-zA-Z]$ => para dar match com letras maiusculas. Somente com uma string de unico caracter.
              se digitar BC ou Bc, o match não ocorre.  Já C, F ocorre match
^[a-zA-Z]{6, 10}$ => abertura e fechamento de chaves, representa um quantificador que indica a quantidade de caracteres que queremos dar match.  
                     Queremos os caracteres de a a z, e o comprimento dessa sequencia de a a z, seja de 6 a 10 caracteres.  
^[a-zA-Z0-9]{6,10}$ => Permitir que a palavra tenha numeros. 
                        Exemplo: Java25
^.{6,10}$ => O . representa um unico caracter que pode ser qualquer caracter.  
                Exemplo: js1234@[ ,  js1234@
*/


/*
===========================================================
Etapa 06 - Eventos em formulários
Testando padrões de regex - Aula 01-05
*/
const form = document.querySelector('.signup-form')
//const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault() 

    console.log(event.target.username.value) 
})

const username = 'rogerm'
const pattern = /^[a-z]{6,}$/ //=> Essa sequencia de caracter precisa ter ao menos 6 caracter.

/*
'roger': false, porque so tem 5 caracteres e o minimo são 6 caracteres
'rogerm': true, porque são 6 caracteres
'@88rogerm77!': true, porque em algum local da string dá match com a regex = rogerm
/^[a-z]{6,}$/ ===> '@88rogerm77!': false

Evitar match fora do padrão:
/^[a-z]{6,}$/ => inserção do ^ no começo para nenhum caracter no começo e $ no para nenhum caracter no final
*/

/*
=> o metodo test() É um metodo de regex, que vai tentar dar um match entre a regex e a string 
    que especificar como argumento da invocação dele. Retorna um boolean
*/
const isAMatch = pattern.test(username)

if (isAMatch) {
    console.log("o teste da regex passou =)")
} else {
    console.log("o teste da regex não passou =(")
}

/*
search() => é um metodo de string e recebe como argumento a regex que queremos testar.
E o valor que a invocação desse search retorna é um numero inteiro que corresponde a posição, o index no qual o match acontece. 
*/
const resulta = username.search(pattern)
console.log(resulta)

/*
search()
'rogerm111' ==> retorna -1 porque não houve match entre a string e a regex
'rogerm' ==> retorna 0 porque houve match entre a string e a regex, no index Zero da string. Na primeira letra da string

const username = '123rogerm'
const pattern = /[a-z]{6,}/
console retorna: 3, porque é o index que deu o match
*/

