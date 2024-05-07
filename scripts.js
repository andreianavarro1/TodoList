const button = document.querySelector('.button-add-class')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaLista = []


function adicionarTarefa (){

if (input.value != ''){
    minhaLista.push({
        tarefa: input.value,
        concluida: false            
        })
   
    input.value = ''
    mostrarTarefa ()    
    }
}

function mostrarTarefa (){
    let novaLi = ('')

    minhaLista.forEach ((item, posicao) => {
        novaLi += `
            <li class="task ${item.concluida && "done"}">
                <img src="img/checked.png" alt="checked" onclick = "concluirTarefa (${posicao})">
                <p>${item.tarefa}</p>
                <img src="img/trash.png" alt="lixeira" onclick ="deletarItem (${posicao})">
            </li>
        `
    })

    listaCompleta.innerHTML = novaLi
    localStorage.setItem('lista', JSON.stringify(minhaLista))
}

function recarregarTarefas (){
    const tarefasLocalStorange = localStorage.getItem ('lista')
    if(tarefasLocalStorange){
        minhaLista = JSON.parse(tarefasLocalStorange)
    }
    mostrarTarefa()
}

function deletarItem(posicao){
    minhaLista.splice(posicao, 1)
    mostrarTarefa()
}

function concluirTarefa (posicao){
    minhaLista[posicao].concluida = !minhaLista[posicao].concluida
    mostrarTarefa()
}

recarregarTarefas()
button.addEventListener('click', adicionarTarefa)//saber quando o botão é clicado, quando
//quando ele for clicado, será chamado a função que pega os valores. 
