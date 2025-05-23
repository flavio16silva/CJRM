/*
Etapa 03 - Funções e Métodos
Funções vs Métodos - Aula 02-03
*/

const name = 'Flavio'

/*
funções => blocos de códigos que executam alguma ação e que podem ser invocadas em qualquer ponto do nosso código. 
    funções e metodos são sinonimos porque em essencia fazem a mesma coisa
    entao metodo é uma função
    o que diferencia um metodo de uma função:
        a forma que invocamos ele e como ele é declarado

 As funções são criadas sozinhas       
*/

const sayHi = () => 'Oi'

const greet = sayHi() //Para invocar uma função: insere o nome dela e faz abertura e fechamento de parenteses
console.log(greet)


/*
metodos
Agora quando invocamos um metodo, ao inves de inserir o nome do metodo e fazer abertura e fechamento de parenteses. 
    Usamos a notação de .
    Por exemplo se quisermos transforar todas as letras do nome em Maiusculas.

toUpperCase(), isso é uma função só que a maneira que invocamos ela é diferente, porque usamos a notação de 'ponto' . antes da invocação

- Então metodos sao funções mas são funçoes que estão associadas a objetos ou tipo de dados como strings.
    Os metodos são criados no objeto ou no tipo de dado em si
*/
const nameInUpperCase = name.toUpperCase() //aramzenando um valor dentro de uma const
console.log(nameInUpperCase)


/*
Em ambos os casos estamos usando os parenteses para fazer invocação e esses parenteses podem receber argumentos
    A unica diferença que estamos invocando essas funções é que:
        na parte de traz da invocação do metodo é que estamos referenciando um valor e inserindo um ponto

Metodos e funçoes em essencia são a mesma coisa, mas com nomes diferentes e formas diferentes de serem criados e invocados. 
*/
