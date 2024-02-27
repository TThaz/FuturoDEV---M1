
const cards = document.querySelectorAll('.user-data')
const button = document.querySelector('#btn')
const body = document.querySelector('body')

function diaNoite() {
    button.classList.toggle("ativo")
    body.classList.toggle("ativo")
}