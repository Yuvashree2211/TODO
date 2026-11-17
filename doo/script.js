
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// Display today's date
document.getElementById("todayDate").textContent =
    new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric"
    });

// Save tasks
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add new task
document.getElementById("taskForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let input = document.getElementById("taskInput");
    let priority = document.getElementById("priority").value;
    let dueDate = document.getElementById("dueDate").value;

    if (input.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        id: Date.now(),
        text: input.value.trim(),
        priority: priority,
        dueDate: dueDate,
        completed: false
    });

    input.value = "";
    document.getElementById("dueDate").value = "";

    saveTasks();
    displayTasks();
});

// Display tasks
function displayTasks() {
    let list = document.getElementById("taskList");
    let search = document.getElementById("searchInput").value.toLowerCase();

    list.innerHTML = "";

    let filteredTasks = tasks.filter(task => {
        let matchesFilter =
            currentFilter === "all" ||
            (currentFilter === "pending" && !task.completed) ||
            (currentFilter === "completed" && task.completed);

        let matchesSearch = task.text.toLowerCase().includes(search);

        return matchesFilter && matchesSearch;
    });

    if (filteredTasks.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <h2>No Tasks Found</h2>
                <p>Add a new task to get started!</p>
            </div>
        `;
    }

    filteredTasks.forEach(task => {
        let item = document.createElement("div");
        item.className = "task-item";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-check";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => {
            toggleTask(task.id);
        });

        let info = document.createElement("div");
        info.className = "task-info";

        let heading = document.createElement("h4");
        heading.textContent = task.text;

        if (task.completed) {
            heading.classList.add("done");
        }

        let details = document.createElement("p");
        details.textContent = task.dueDate
            ? "Due: " + task.dueDate
            : "No due date";

        info.append(heading, details);

        let priority = document.createElement("span");
        priority.className = "priority " + task.priority;
        priority.textContent = task.priority;

        let actions = document.createElement("div");
        actions.className = "task-actions";

        let edit = document.createElement("button");
        edit.textContent = "Edit";
        edit.className = "edit-btn";
        edit.onclick = () => editTask(task.id);

        let remove = document.createElement("button");
        remove.textContent = "Delete";
        remove.className = "delete-btn";
        remove.onclick = () => deleteTask(task.id);

        actions.append(edit, remove);

        item.append(checkbox, info, priority, actions);
        list.appendChild(item);
    });

    updateStatistics();

    document.getElementById("taskSummary").textContent =
        filteredTasks.length + " tasks available";
}

// Edit task
function editTask(id) {
    let task = tasks.find(t => t.id === id);

    let updated = prompt("Enter updated task:", task.text);

    if (updated !== null && updated.trim() !== "") {
        task.text = updated.trim();
        saveTasks();
        displayTasks();
    }
}

// Delete task
function deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        displayTasks();
    }
}

// Complete task
function toggleTask(id) {
    let task = tasks.find(t => t.id === id);

    task.completed = !task.completed;

    saveTasks();
    displayTasks();
}

// Filter tasks
function filterTasks(filter) {
    currentFilter = filter;

    document.querySelectorAll("[data-filter]").forEach(button => {
        button.classList.toggle(
            "active",
            button.classList.contains("nav-btn") && button.dataset.filter === filter
        );

        if (button.classList.contains("filter-btn")) {
            button.classList.toggle("selected", button.dataset.filter === filter);
        }
    });

    displayTasks();
}

// Sidebar and filter button events
document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
        filterTasks(button.dataset.filter);
    });
});

// Search tasks
document.getElementById("searchInput").addEventListener("input", displayTasks);

// Clear completed tasks
document.getElementById("clearBtn").addEventListener("click", function() {
    if (confirm("Clear all completed tasks?")) {
        tasks = tasks.filter(task => !task.completed);

        saveTasks();
        displayTasks();
    }
});

// Update statistics and progress
function updateStatistics() {
    let total = tasks.length;
    let completed = tasks.filter(t => t.completed).length;
    let pending = total - completed;

    let percentage = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    document.getElementById("totalTasks").textContent = total;
    document.getElementById("pendingTasks").textContent = pending;
    document.getElementById("completedTasks").textContent = completed;

    document.getElementById("progressPercent").textContent =
        percentage + "%";

    document.getElementById("progressFill").style.width =
        percentage + "%";
}

// Initial display
displayTasks();
