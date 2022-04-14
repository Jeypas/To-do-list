const taskList = document.querySelector('#taskList');
const bnt = document.getElementById("taskButton");

function newElement(){
    const inputValue = document.querySelector("#taskInput").value
    const listItem = document.createElement("li")   
    listItem.innerHTML = `<li>${inputValue}</li>`
    taskList.prepend(listItem)
    }

bnt.addEventListener("click", newElement)

function checkTask(event){
    if (event.target.tagName === "LI"){
        event.target.classList.toggle("checked")
    }

}
taskList.addEventListener("click", checkTask)