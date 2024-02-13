// // Crie uma função que receba o valor de uma hora qualquer,
//  e exibe no console uma mensagem de “bom dia”, “boa tarde” ou “boa noite”, 
//  de acordo com a hora passada.

let hora = prompt("Digite uma hora!")

function mensagemHora(hora) {
    if(hora >= 0 && hora < 12) {
        console.log("Bom dia!")
    }
    else if(hora >= 12 && hora < 19) {
        console.log("Boa tarde!")
    }
    else if(hora >= 19 && hora < 24) {
        console.log("Boa noite!")
    } else {
        console.log("Horário inválido!")
    }
}

mensagemHora(hora);