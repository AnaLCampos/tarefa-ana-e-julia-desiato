const tarefaInput = document.getElementById("tarefa-input");
const addButton = document.getElementById("add-button");
const tarefaList = document.getElementById("tarefa-list");

// adicionar Tarefa
function addTarefa() {
  if (tarefaInput.value.trim() === "") {
    alert("Digite uma tarefa para adicionar");
  } else {
    const li = document.createElement("li");
    li.innerText = tarefaInput.value;
    li.innerHTML += '<button class="delete-button" onclick="deleteTarefa(this)">Excluir</button>';
    li.innerHTML += '<button class="complete-button" onclick="completeTarefa(this)">Concluir</button>';
    tarefaList.appendChild(li);
    tarefaInput.value = "";
  }
}

// excluir Tarefa
function deleteTarefa(element) {
  element.parentElement.remove();
  }
  
  // concluir Tarefa
  function completeTarefa(element) {
  const li = element.parentElement;
  li.classList.toggle("completed");
  }
  
  // adicionar Tarefa ao Pressionar Enter
  tarefaInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
  event.preventDefault();
  addButton.click();
  }
  });