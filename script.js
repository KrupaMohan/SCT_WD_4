document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    const date = new Date(taskDate.value);
    const month = date.getMonth();
    updateBackground(month);

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${taskInput.value} - ${taskDate.value}</span>
        <button class="complete-btn" onclick="toggleComplete(this)">Complete</button>
        <button class="edit-btn" onclick="editTask(this)">Edit</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
    taskDate.value = "";
}

function toggleComplete(button) {
    const taskText = button.parentElement.querySelector(".task-text");
    taskText.classList.toggle("completed"); // Toggle completed styling
    button.textContent = taskText.classList.contains("completed") ? "Undo" : "Complete";
}

function updateBackground(month) {
    const body = document.body;
    body.className = '';
    if (month === 11 || month === 0 || month === 1) {
        body.classList.add('winter');
    } else if (month >= 2 && month <= 7) {
        body.classList.add('summer');
    } else {
        body.classList.add('rainy');
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

function editTask(button) {
    const taskText = button.parentElement.querySelector(".task-text");
    const newTask = prompt("Edit your task:", taskText.textContent.split(" - ")[0]);
    if (newTask) {
        taskText.textContent = newTask + " - " + taskText.textContent.split(" - ")[1];
    }
}
