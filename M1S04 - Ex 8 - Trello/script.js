// Implemente uma função que determine se um número é par ou ímpar.


let number = prompt("Digite um valor para identificar se é par ou impar: ")

function parImpar(number) {
    
    if(number % 2 == 0) {
        console.log("O número é par");
    } else {
        console.log("O número é ímpar");
    }    
}

parImpar(number)