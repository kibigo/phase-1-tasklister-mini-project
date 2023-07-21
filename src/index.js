const formDoc = document.getElementById("create-task-form");
const input = document.getElementById("new-task-description");


const list = document.getElementById("tasks");


const addListItem = function(e){
  e.preventDefault();
  const addedList = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "x";
  deleteButton.addEventListener('click', function(){
    
    addedList.remove();
    deleteButton.remove();
  });
  addedList.textContent = input.value;
  list.appendChild(addedList);
  list.appendChild(deleteButton);
  input.value = "";
}

formDoc.addEventListener("submit", addListItem);