//Null e undefined - Aula 03-03

/* 
Undefined => um valor que o JS atribui automaticamente para uma variavel que ainda não armazena um valor
É undefined porque 'não atribuimos um valor' ou a varivel não armazena um valor. 
Sempre que 'não atribuimos um valor' o JS atribui undefined para a variavel.
*/
let emptiness 
console.log(emptiness, emptiness + 3, `o valor é ${emptiness}`)

//emptiness + 3 => quando usamos undefined é uma expressão númerica, obtemos: NaN
//`o valor é ${emptiness}` => quando inserimos - undefined - como variavel dentro de uma string, vemos que undefined é convertido para string

//Null => Quando você que indicar intensionalmente que 'não tem valor naquela varivel'.
let emp  = null
console.log(emp, emp + 3, `o valor é ${emp}`)
//emp = retorna null
//emp + 3 = ao executar uma operação matematica que envolva Null, ele é automaticamente interpretado como zero.
//`o valor é ${emp}` => 'o valor é null' - null foi convertido para string