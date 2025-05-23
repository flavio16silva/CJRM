/*
Etapa 06 - Eventos em formulários
Eventos do teclado - Aula 02-03
*/

//Fazer validação no momento em que o usuario estiver digitando. Para ocorrer o feeedback em tempo real
/*
Evento keyup event => esse evento vai executar uma função de callback toda vez que a tecla pressionada
for liberada. Ou seja, no momento exato que a tecla volta para cima. 
*/
const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback') 

//Função que recebe o valor do input por parametro e retorna o boolean no qual essa invocação da test() resulta
const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
    event.preventDefault() 

    const username = event.target.username.value 
    //const userRegex = /^[a-zA-Z]{6,12}$/ => removendo devido a criação da função acima
    //const isValidUsername = userRegex.test(username)
    const isValidUsername = testUsername(username) // è as mesma coisa que: event.target.username.value 

    if (isValidUsername) {
        feedback.textContent = 'username válido =)' 
        return 
    }
        feedback.textContent = 'o username deve conter entre 6 a 12 caracteres e deve conter apenas letras.'    
})

/*
Implementando a escuta do evento:
1) Obter e armazenar a referencia do input que tem o id = username
*/
    form.username.addEventListener('keyup', event => {
        //1) Obter e armazenar a referencia do input que tem o id = username        
        //console.log(event.target.value)             //obtendo o valor inserido no input

        //2) verificando se o valor inserido no input dará match com a regex que criamos acima no codigo.
        //const username = event.target.value
        const isValidUsername = testUsername(event.target.value) //momento em que a tecla é liberada
        console.log(event)
        /*
        Iremos alterar a cor do input/bordas a medida que o usuario for digitando e dando match com a regex. 
        Mas usaremos o setAttribute() para subscrever qualquer class que exista no elemento e não o ClassList.add() senão ficaria com
        dois comportamentos ou cores.
        */
        if (isValidUsername) {
            //1)console.log('é válido')
            form.username.setAttribute('class', 'success') //2) 
            return
        }
            //1) console.log('não é válido')
            form.username.setAttribute('class', 'error') //2)
    })

