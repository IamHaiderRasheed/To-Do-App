let listItems = document.getElementById("tasks");
let input = document.getElementById("input");
console.log(input)

let addTasks = () => {
    if (input.value === "") {
        alert("please add some task")
    }

    else {
        let li = document.createElement("li")
        li.innerHTML = input.value
        listItems.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input.value = ""
    saveTasks()
}

listItems.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveTasks()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTasks()
    }

})

const saveTasks = () => {
    localStorage.setItem("Tasks", listItems.innerHTML);
}

const getTasks = () => {
    listItems.innerHTML=localStorage.getItem("Tasks")
}

getTasks()