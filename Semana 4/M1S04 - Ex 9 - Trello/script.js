// Use um switch para exibir mensagens diferentes com base em uma condição.


let diaDaSemana = prompt("Digite um dia da semana: ")

switch(diaDaSemana.toLowerCase()){
    case 'segunda':
    case 'terça':
    case 'quarta':
    case 'quinta':
    case 'sexta':
        console.log(`${diaDaSemana} é um dia útil de semana!`)
        break;

    case 'sabado':
    case 'domingo':
        console.log(`${diaDaSemana} é um final de semana!`)
        break;

    default:
        console.log("Não foi digitado um dia da semana")
}