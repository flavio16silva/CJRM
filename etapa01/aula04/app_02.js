// Aula 04-03 - Operadores de comparação => usado para comparar um valor com o outro e retornar um booleans
const age = 31

//Comparações com igualdade estrita - Aula 04-03

/*
'igual a' e 'diferente de' => Toda vez que os sinais de == ou != são usados ambos executam conversões de tipo. 
Ou seja, não são confiáveis para comparações.
*/
console.log(age == 31)   //true
console.log(age == '31') //true, antes da comparação fosse feita, a string 31 foi convertida para number 31
console.log(age != 31)   //false
console.log(age != '31') //false


/*
'igual a, e do mesmo tipo' e 'diferente de, e do mesmo tipo' => são confiáveis. 
=== comparação estrita
*/

console.log(age === 31)   //true
console.log(age === '31') //false => verificando o valor e o tipo e 'não tem conversão de tipo'. 
console.log(age !== 31)   //false
console.log(age !== '31') //true => número 31 não é igual a string 31
