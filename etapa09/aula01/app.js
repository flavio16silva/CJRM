/*
Etapa 09 - Aplicação: To-do list
Adicionando to-dos - Aula 01-03
*/


/* Passos:
1) Obtendo e armazenando o form
2) parando o envio do form
3) add, valor do atributo name, dentro do form
4) remover espaços em branco no inicio ou no fim da string -> trim()
5) inserindo um novo elemento - <li> dentro da <ul>, obter e armazenar a <ul>
        - pegando toda a referencia dentro do html
6) evitando envio de <li> vazia para a <ul>   -> uso do if   
7) Limpar o input após preenchimento para ficar vazio e preencher novamente
        reset() -> metodo que restaura os valores padrões dos elementos de um form
        E o valor padrão de um input é uma string vazia

''.length = 0

*/

const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')


formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    
    const inputValue = event.target.add.value.trim()
    if (inputValue.length){        
        todosContainer.innerHTML += `
           <li class="list-group-item d-flex justify-content-between align-items-center">
             <span>${inputValue}</span>
             <i class="far fa-trash-alt delete"></i>
           </li>` 

      event.target.reset()     
    }
})