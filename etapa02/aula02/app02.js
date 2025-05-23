/* Aula 02-04

Operadores lógicos && e || - Aula 02-04
'E' => &&  :duas ou mais condições são verdadeiras. E tem prioridade sobre o 'OU'
'OU' => || :somente uma das condições tem que ser verdadeira.
*/


const password = 'oi16y'
if (password.length >= 12 && password.includes('1')){
    console.log('senha muito forte =)')
} else if (password.length >= 8 || password.includes('1') && password.length >= 5){
    console.log('senha forte')
} else {
    console.log('a senha deve conter 8 ou mais caracteres')
}



