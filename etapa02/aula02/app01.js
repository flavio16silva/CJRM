/*
Estruturas Condicionais

if
*/

const age = 19
if (age > 18){ //retorna true, pois atende a condição
    //console.log('você tem mais de 18 anos')
}

//Arrays
const simpsons = ['Marge', 'Homer', 'Lisa', 'Bart']
if(simpsons.length >= 5){ //retorna false, pois não atende a condição
    console.log('o array tem bastante personagens')
}

const password = 'oi123321'
if (password.length >= 8){
    //console.log('Essa senha tem mais de 8 caracteres')
}

// Aula 02-03 - Else e else if statements
const senha = 'oi12'
if (senha.length >= 12){
    console.log('senha muito forte =)')
} else if (senha.length >= 8){
    console.log('senha tem 8 ou mais carcteres')
} else {
    console.log('a senha deve conter 8 ou mais carcteres')
}



