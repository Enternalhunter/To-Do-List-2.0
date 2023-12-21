document.addEventListener("DOMContentLoaded", function () {
    // Load tasks from local storage
    loadTasks();
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create new task
        var newTask = document.createElement("li");
        newTask.textContent = taskText;
        newTask.onclick = toggleTask;
        
        // Create delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = deleteTask;

        // Append delete button to task
        newTask.appendChild(deleteButton);

        // Append task to the list
        taskList.appendChild(newTask);

        // Save tasks to local storage
        saveTasks();

        // Clear input field
        taskInput.value = "";
    }
}

function toggleTask() {
    this.classList.toggle("completed");

    // Save tasks to local storage
    saveTasks();
}

function deleteTask() {
    this.parentNode.remove();

    // Save tasks to local storage
    saveTasks();
}

function saveTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = taskList.innerHTML;

    // Save tasks to local storage
    localStorage.setItem("tasks", tasks);
}

function loadTasks() {
    var taskList = document.getElementById("taskList");
    var savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        // Load tasks from local storage
        taskList.innerHTML = savedTasks;

        // Add event listeners to loaded tasks
        var tasks = document.querySelectorAll("#taskList li");
        tasks.forEach(function (task) {
            task.onclick = toggleTask;
            var deleteButton = task.querySelector("button");
            deleteButton.onclick = deleteTask;
        });
    }
}

