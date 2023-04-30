const toDo = document.querySelector('#todo');
const toDoInput = document.querySelector('#todo input');
const toDoList = document.querySelector('.todo_list'); 

const HIDDEN = "hidden";
const TODO = "todo";

let toDos = [];

function toDoSubmitHandle(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const toDoObject = {
        text : newToDo,
        id : Date.now()
    }
    toDos.push(toDoObject);
    paintToDO(toDoObject);
    saveToDos();
}

function paintToDO(toDoObject){
    const toDoLi = document.createElement('li');
    toDoLi.id = toDoObject.id;
    const toDoText = document.createElement('span');
    toDoText.innerText = toDoObject.text;

    const del = document.createElement('button');
    del.innerText = "지우기";
    del.addEventListener('click', deleteToDo);

    toDoLi.appendChild(toDoText);
    toDoLi.appendChild(del);
    toDoList.appendChild(toDoLi);
}

function deleteToDo(e){
    const toDoLi = e.target.parentElement;
    toDoLi.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(toDoLi.id));
    saveToDos();
}

function toDoFilter(toDo){
    return toDo !== id;
}

function saveToDos(){
    localStorage.setItem(TODO, JSON.stringify(toDos));
}

toDo.addEventListener('submit', toDoSubmitHandle);
const savedToDo = localStorage.getItem(TODO);

if(savedToDo){
    const localToDo = JSON.parse(savedToDo);
    toDos = localToDo;
    localToDo.forEach(paintToDO);
}