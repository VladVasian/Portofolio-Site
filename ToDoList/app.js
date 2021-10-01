//Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo")

//Event Listeners
toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
function addToDo(event){
    event.preventDefault();

    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = toDoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Checkmark button
    const completedButtom = document.createElement("button");
    completedButtom.innerHTML = '<i class="fas fa-check"></i>';
    completedButtom.classList.add("complete-btn");
    todoDiv.appendChild(completedButtom);

     //Trash button
     const trashButtom = document.createElement("button");
     trashButtom.innerHTML = '<i class="fas fa-trash"></i>';
     trashButtom.classList.add("trash-btn");
     todoDiv.appendChild(trashButtom);

     //APPEND TO LIST
     toDoList.appendChild(todoDiv);

     //clear the input
     toDoInput.value ="";
}

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
        
        // todo.remove();
    }

    //checkmark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


function filterTodo(e){

    const todos = toDoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value) {
            
            case "all":
                todo.style.display = "flex";
                break
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}