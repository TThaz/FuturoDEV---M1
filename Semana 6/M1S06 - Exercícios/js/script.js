
const cards = document.querySelectorAll('.user-data')
const button = document.querySelector('#btn')
const body = document.querySelector('body')

alert("Seja bem-vindo(a)")

function diaNoite() {
    button.classList.toggle("ativo")
    body.classList.toggle("ativo")
}