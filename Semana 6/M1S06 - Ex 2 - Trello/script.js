// Crie uma função que solicite para o usuário através do prompt de comando sua idade
// a partir da idade fornecida, exiba uma mensagem informando se ele é maior de idade ou não.
// Considere 18 anos como maior idade.

function verificaIdade() {

    let idade = prompt("Digite sua idade: ")
    
    if (idade >= 18) {
        alert("Você é de maior!");
    } 
    else {
        alert("Você é de menor!");
    }
}

verificaIdade()