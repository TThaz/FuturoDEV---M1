let btnAdd = document.getElementById('btn-task')
let taskList = document.querySelector('ul')
let userInput = document.getElementById('task-input')

function addTask() {

    let userText = userInput.value.trim();

    //Filtro de tarefa em branco
    if(userText === "") {

        alert("Insira uma tarefa!")

    } else {
        // Cria um novo item lista/span
        let listaItem = document.createElement("li");
        let spanItem = document.createElement("span")

        //Adiciona a classe 'task-item' no elemento 'li'
        listaItem.classList = 'task-item mt-14'

        //Adicionar o input.value no Span
        spanItem.textContent = userText

        //Adiciona o texto do Span na lista
        listaItem.appendChild(spanItem)

        //Cria um item de lista e adiciona a Ul
        taskList.appendChild(listaItem);
    
        //adicionar botao de concluir
        let btnConcluir = document.createElement('button')
        btnConcluir.textContent = "Concluído"
        btnConcluir.classList = "btn-concluir ml-5"
        listaItem.appendChild(btnConcluir)
    
        //riscar a tarefa e desabilitar o botão
        btnConcluir.onclick = () => {
            spanItem.setAttribute('id', 'task-done');
            btnConcluir.setAttribute('id', 'btn-disabled')
            btnConcluir.disabled = true;
        }
    
        //adicionar o botao de deletar
        let btnDelete = document.createElement('button')
        btnDelete.textContent = "Deletar"
        btnDelete.classList = "btn-delete ml-5"
        listaItem.appendChild(btnDelete)

        //deletar a tarefa
        btnDelete.onclick = () => {
            listaItem.remove();
        }
        
    }
    userInput.value = " "
}

btnAdd.addEventListener('click', addTask)