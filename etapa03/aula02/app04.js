/*
Etapa 03 - Funções e Métodos
Utilizando callbacks 
*/
const ul = document.querySelector('[data-js="ul"]')

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

let HTMLtemplate = ''
socialNetworks.forEach(socialNetwork => {
    HTMLtemplate += `<li style="color: deeppink;">${socialNetwork}</li>`
})

ul.innerHTML = HTMLtemplate