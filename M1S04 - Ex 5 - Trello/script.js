function verificaValor(num) {
    if(num > 0) {
        console.log(`O número ${num} é positivo!`);

    } else if (num < 0){
        console.log(`O número ${num} é negativo!`);
    } else {
        console.log(`O número ${num} é 0!`)
    }
}

verificaValor(12)
verificaValor(-12)
verificaValor(0)