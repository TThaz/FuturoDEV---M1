const produtosCadastrados = [
    {nome: "Café", preço: 9.99},
    {nome: "Limão", preço: 3.99},
    {nome: "Batata", preço: 6.99},
    {nome: "Cebola", preço: 7.99},
    {nome: "Farinha", preço: 3.99}
]



let userInput = document.getElementById('input-produto')
let btnCompra = document.getElementById('btn-compra')
let btnConsulta = document.getElementById('btn-consulta')
let btnTotal = document.getElementById('btn-total')

let textoPreço = document.getElementById('preco-produto')

let carrinho = [];
let qntCarrinho = document.querySelector('#qnt-carrinho')
let carrinhoValue = document.querySelector("#valor-carrinho")

let produtoAtual = "";
let index = Number("");

let preco = 0;
let total = 0;


//Consultar o preço 
btnConsulta.addEventListener('click', consultaValor)
function consultaValor() {  

    let produto = userInput.value;
    if(produto == "") {
        alert("Insira um produto para consultar!")
    } else {
        switch(produto.toLowerCase()) {
            case 'café':
            case 'cafe':
            case '1':
                textoPreço.textContent = `O preço do Café é de ${produtosCadastrados[0].preço}/Un`
                produtoAtual = produtosCadastrados[0].nome
                index = 0;
                break;
            case 'limão':
            case 'limao':
            case '2':
                textoPreço.textContent = `O preço da Limão é de ${produtosCadastrados[1].preço}/Kg`
                index = 1;
                produtoAtual = produtosCadastrados[1].nome
                break;    
            case 'batata':
            case '3':
                textoPreço.textContent = `O preço da Batata é de ${produtosCadastrados[2].preço}/Kg`
                index = 2;
                produtoAtual = produtosCadastrados[2].nome
                break;
            case 'cebola':
            case '4':
                textoPreço.textContent = `O preço da Cebola é de ${produtosCadastrados[3].preço}/Kg`
                index = 3;
                produtoAtual = produtosCadastrados[3].nome
                break;
            case 'farinha':
            case '5':
                textoPreço.textContent = `O preço da Farinha é de ${produtosCadastrados[4].preço}/Un`
                index = 4;
                produtoAtual = produtosCadastrados[4].nome
                break;
            default:
                alert("Produto não cadastrado!")
                break;
                        }
        
    }
}

//Adicionar produto no carrinho
btnCompra.onclick = addCarrinho;
function addCarrinho () {
    if(userInput.value == "") {
        alert("Insira um produto para comprar")
    } else {

        let produtoComprado = {
            nome: produtosCadastrados[index].nome,
            preço: produtosCadastrados[index].preço
        }
        carrinho.push(produtoComprado)
        console.log(carrinho)
        qntCarrinho.textContent = `Tem ${carrinho.length} itens no carrinho!`;

        
        localStorage.setItem("produtosCarrinho", JSON.stringify(produtoComprado))

        let tracker = localStorage.getItem("produtosCarrinho")
        let data = []
        
        if(tracker) {
            data = JSON.parse(tracker)
        }
    
        data.push(produtoComprado)
        localStorage.setItem("produtosCarrinho", JSON.stringify(data))
    }
}

// Somar total do carrinho
btnTotal.onclick = totalCarrinho;
function totalCarrinho() {
    if(carrinho == "") {
        alert("O carrinho está vazio!")
    } else {
        
        for(let i = 0; i < carrinho.length; i++){
            total += carrinho[i].preço
            carrinhoValue.textContent = `O preço atual do carirnho é de R$ ${total.toFixed(2)}`
        }

    }

}