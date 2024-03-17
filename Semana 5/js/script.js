const produtosCadastrados = [
    {nome: "Café", código:'1', preço: 9.99},
    {nome: "Limão", código:'2', preço: 3.99},
    {nome: "Batata", código:'3', preço: 6.99},
    {nome: "Cebola", código:'4', preço: 7.99},
    {nome: "Farinha", código:'5', preço: 3.99}
]

let userInput = document.getElementById('input-produto')

let btnCompra = document.getElementById('btn-compra')
let btnConsulta = document.getElementById('btn-consulta')
let btnTotal = document.getElementById('btn-total')
let btnClear = document.getElementById('btn-clear')

let textoPreço = document.getElementById('preco-produto')

let carrinho = []

let msgErroProduto = "Produto não cadastrado no sistema!"
let qntCarrinho = document.querySelector('#qnt-carrinho')
let carrinhoValue = document.querySelector("#valor-carrinho")
let preco = 0;
let total = 0;


function dadosAntigos() {
    console.log("Hello World!")

    totalCarrinho()
    leituraCarrinho()
}

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
                break;
            case 'limão':
            case 'limao':
            case '2':
                textoPreço.textContent = `O preço da Limão é de ${produtosCadastrados[1].preço}/Kg`
                break;    
            case 'batata':
            case '3':
                textoPreço.textContent = `O preço da Batata é de ${produtosCadastrados[2].preço}/Kg`
                break;
            case 'cebola':
            case '4':
                textoPreço.textContent = `O preço da Cebola é de ${produtosCadastrados[3].preço}/Kg`
                break;
            case 'farinha':
            case '5':
                textoPreço.textContent = `O preço da Farinha é de ${produtosCadastrados[4].preço}/Un`
                break;
            default:
                alert(msgErroProduto)
                break;
                        }
        
    }
}

//Adicionar produto no carrinho
btnCompra.onclick = addCarrinho;
function addCarrinho () {

    let produtoComprado = buscaProduto()

    if(userInput.value == "") {
        alert("Insira um produto para comprar")
    } 
    else if(produtoComprado == null) {
        return alert(msgErroProduto)

    } else {
        let tracker = localStorage.getItem("produtosCarrinho")
        
        if(tracker) {
            carrinho = JSON.parse(tracker)
        }
        
        carrinho.push(produtoComprado)
        qntCarrinho.textContent = `Tem ${carrinho.length} itens no carrinho!`;

        localStorage.setItem("produtosCarrinho", JSON.stringify(carrinho))
    }
}

btnTotal.addEventListener('click', totalCarrinho);
btnTotal.addEventListener('click', leituraCarrinho);

//Calcula o total do Carrinho
function totalCarrinho() {

    let recuperaCarrinho = JSON.parse(localStorage.getItem("produtosCarrinho"))

    if(recuperaCarrinho == "") {
        alert("O carrinho está vazio!")
    } else if (total > 0) {
        total = 0
    }
    else {
        for(let i = 0; i < recuperaCarrinho.length; i++){
            total += recuperaCarrinho[i].preço
            carrinhoValue.textContent = `O preço atual do carrinho é: R$ ${total.toFixed(2)}`
        }
        qntCarrinho.textContent = `Tem ${recuperaCarrinho.length} itens no carrinho!`;
    }

}

//Faz a impressão do carrinho na tela
let listaCriada = false
function leituraCarrinho() {
    const lista = document.getElementById("carrinhoLista")
    let recuperaCarrinho = localStorage.getItem("produtosCarrinho")
    let converter = JSON.parse(recuperaCarrinho)

    let criarTabela = document.createElement("ul")
    if(converter == "") {
        alert("Não há nada para calcular no carrinho!")
    } else {
        if(listaCriada == true){
            while(lista.firstChild){
                lista.removeChild(lista.firstChild)
            }
        }
    
        lista.appendChild(criarTabela)
    
            for(let i = 0; i < converter.length; i++) {
                let criarLista = document.createElement("li")
                let criarTexto = document.createElement("span")
                
                criarLista.setAttribute('id', 'lista-produtos')
                criarTexto.textContent = `${converter[i].nome} - ${converter[i].preço}`
                criarLista.appendChild(criarTexto)
            
                criarTabela.appendChild(criarLista) 
            }
    
        listaCriada = true;
    }
    }

//Limpa os dados
btnClear.onclick = clear;
function clear() {
    const lista = document.getElementById("carrinhoLista")
    localStorage.clear()

    total = 0;
    carrinho = [];
    carrinhoSalvo =[];
    
    if(listaCriada == true){
        while(lista.firstChild){
            lista.removeChild(lista.firstChild)
        }
    }
    carrinhoValue.textContent = `O preço atual do carrinho é: R$ ${total.toFixed(2)}`
    qntCarrinho.textContent = `Tem ${carrinho.length} itens no carrinho!`;
}   

//Função para buscar o produto desejado
function buscaProduto(produto) {
    let busca1 = produtosCadastrados.find(({ nome }) => nome === userInput.value)
    let busca2 = produtosCadastrados.find(({ código }) => código === userInput.value)

    if (busca1) {
        return produto = busca1
    } else if (busca2) {
        return produto = busca2
    }    
}