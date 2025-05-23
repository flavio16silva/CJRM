// Controle de fluxo - Aula 01-02
//Será estudado tipos diferentes de estrutura de controle de fluxo como laços e condicionais.

/*

For loop - Aula 01-03
 - O proposito de todo loop é executar um pedaço de código repetidas vezes.

Contador => quantas vezes esse loop já foi executado.
Condição => Retorna true ou falso. 
Incremento => será executada no final de cada execução do codigo dentro desse bloco

*/

for (let i = 0; i < 5; i++) { //=> Três expressões diferentes: (inicialização de uma variavel(contador); condição; incremento) 
    //console.log(`Dentro do loop: ${i}`)
}

//console.log('Loop Concluído')

/*
Array - Exemplo: pegando um array com muitos dados e varrendo/percorrer o array para contar os dados. 
i < names.length => essa expressão que assegura que saberemos a quantidade de itens de um array sem saber sua quantidade total. 

*/
const names = ['Linus', 'Ada', 'Bill']
//Exibindo o nome no console:
for (let i = 0; i < names.length; i++ ) {
    //console.log(i) //0,1,2 => quando chegar em 3 será falso, porque 3 não é menor que 3
    //console.log(names[i]) //=> No primeiro loop i armazena 0. Qual o item tá no index 0 do array names? Linus e assim sucessivamente: Linus, Ada, Bill
}

//Criar um template de codigo HTML que contem esse nome
const nomes = ['Linus', 'Ada', 'Bill']
for (let i = 0; i < nomes.length; i++) {
    const HTMLTemplate = `<p>${nomes[i]}</p>`
    //console.log(HTMLTemplate) // <p>Linus</p> ...cada item vem igual
}

/*
Terminologia => iteração, corresponde a cada vez que o código dentro desse bloco é executado. 
Ou seja, percorremos o array iterando por cada item dele. 
*/



