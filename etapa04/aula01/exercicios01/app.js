/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/

let cat = {
  name: 'Giga',
  age: 10,
  color: 'Branco',
  bestFriends: ['Lua', 'Thor'],
  sound: function () {
    return 'Miau!'
  }
}
console.log(cat)

/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/
console.log(`Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "${cat.name}", "age", que recebeu "${cat.age}", "color", que recebeu "${cat.color}", "bestFriends", que recebeu um array com os itens "${cat.bestFriends[0]}" e "${cat.bestFriends[1]}", e "sound", que recebeu uma função que retorna "${cat.sound()}".`)

/*
  03
  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/
cat.age+= 2
console.log(cat.age)

/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/
//=== 1º opção => o item será adicionado no array atravês de parametro
const catFriends = (friend) => cat.bestFriends.push(friend)
catFriends('Zeus')
//console.log(cat.bestFriends)

//=== 2º opção
const myFriends = () => cat.bestFriends.push('Zulo')
myFriends()
//console.log(cat.bestFriends)

//=== 3º opção => adicionando um objeto por parametro

//cat.bestFriends.push(friend) MUDOU para object.bestFriends.push(friend)
//groupFriends('Zeus') MUDOU para groupFriends('Zeus', cat)
const groupFriends = (friend, object) => object.bestFriends.push(friend)
groupFriends('Mário', cat) //inserindo o objeto cat na invocação da função
//console.log(cat.bestFriends)

/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/
//=== 1º opção:
const colorCat = () => cat['color']+= `${', marrom'}`
colorCat()
console.log(cat['color'])

//=== 2º opção:
const changeColor = object => {
  object['color'] += ` e preto`
}
changeColor(cat)
console.log(cat['color'])
/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/
const isBoolean = value => typeof value === 'object'
console.log(isBoolean(cat)) 

/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/
let dog = {
  name: 'Lobo',
  age: 7,
  color: 'Preto',
  bestFriends: ['Lua', 'Boneca'],
  sound: () => 'au! au!'
}
//Inserido 2 parametros que recebem o objeto = cat, dog
const returMessage = (cat, dog) => `A soma das idades de ${cat.name} e ${dog.name} é ${cat.age + dog.age}.`
const ageMessage = returMessage(cat, dog) //passando como argumetos os objetos = cat e dog
console.log(ageMessage)


/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/
//=== ANTES ===
/*const isAnSUV = car => {
  if (car === 'Honda HR-V' || car === 'Jeep Renegade' || car === 'Ford EcoSport' || car === 'Hyundai iX35') {
    return true
  }
  return false
} */

// === DEPOIS ===  
const isAnSUV = car => [
  'Honda HR-V', 
  'Jeep Renegade',
  'Ford EcoSport',
  'Hyundai iX35'
].includes(car)

console.log(isAnSUV('Honda Civic'))
console.log(isAnSUV('Ford EcoSport'))

/*
  09

  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, 'crie um objeto' com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3  
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/

const typeDefinition = type => {
  const obj = {
    null: 'Seta, explicitamente, uma variável sem valor.',
    undefined:'Representa um valor não-setado.',
    object: 'Arrays, Datas, Objetos literais, Funções, etc.'
  }
  return obj[type] //parametro como variavel local
  // OU ASSIM:
  /*
  return {
    null: 'Seta, explicitamente, uma variável sem valor.',
    undefined:'Representa um valor não-setado.',
    object: 'Arrays, Datas, Objetos literais, Funções, etc.'
  }[type]
  */
}

//Como podemos fazer essa função retorna o valor de algumas das propriedades desse objeto?
//parametro é uma variável local
console.log(typeDefinition('null'))
console.log(typeDefinition('undefined'))
console.log(typeDefinition('object'))