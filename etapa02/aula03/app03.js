/*
Controle de fluxo
A condicional switch e exercícios - Aula 03-04
*/
/*
Switch statement => Util para verificar uma variável ou constante que pode ter multiplos valores diferentes. 
E para cada valor possivel temos a possibilidade de reagir de forma diferente. 
*/
//break => Fará com que somente esse código seja executado, caso seja essa a condição atendida.

const grade = 'D'
switch (grade) {
    case 'A':
      console.log('você tirou um A')
      break 
    case 'B':
      console.log('Você tirou um B')
      break  
    case 'C':
      console.log('Você tirou um C') 
      break 
    case 'D':
      console.log('Você tirou um D')
      break  
    case 'E':
      console.log('Você tirou um E')
      break   
    default:
        console.log('nota inválida')                 
}





//usando if statement
/*
if (grade === 'A'){
} else if (grade === 'B') {
} else if (grade === 'C') {
} else if (grade === 'D') {

} else if (grade === 'E') {

} else {

} */