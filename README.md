# Ex03 To-Do List using JavaScript
## Date:

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
index.html
```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TaskFlow - Todo Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="dashboard">

    <!-- Sidebar -->
    <aside class="sidebar">
        <div class="logo">✦ TaskFlow</div>

        <p class="menu-title">MENU</p>

        <nav>
            <button class="nav-btn active" data-filter="all">
                ▦ &nbsp; All Tasks
            </button>

            <button class="nav-btn" data-filter="pending">
                ◷ &nbsp; Pending
            </button>

            <button class="nav-btn" data-filter="completed">
                ✓ &nbsp; Completed
            </button>
        </nav>

        <div class="sidebar-bottom">
            <div class="profile">
                <div class="avatar">TF</div>
                <div>
                    <h4>My Workspace</h4>
                    <p>Personal Planner</p>
                </div>
            </div>
        </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">

        <header class="topbar">
            <div>
                <p class="welcome">WELCOME BACK!</p>
                <h1>My Dashboard</h1>
                <p class="subtitle">Organize your day and achieve your goals.</p>
            </div>

            <div class="date-display" id="todayDate"></div>
        </header>

        <!-- Statistics -->
        <section class="stats">

            <div class="stat-card purple">
                <div class="stat-icon">▦</div>
                <p>Total Tasks</p>
                <h2 id="totalTasks">0</h2>
                <span>All your tasks</span>
            </div>

            <div class="stat-card orange">
                <div class="stat-icon">◷</div>
                <p>Pending Tasks</p>
                <h2 id="pendingTasks">0</h2>
                <span>Tasks to complete</span>
            </div>

            <div class="stat-card green">
                <div class="stat-icon">✓</div>
                <p>Completed Tasks</p>
                <h2 id="completedTasks">0</h2>
                <span>Successfully finished</span>
            </div>

        </section>

        <!-- Progress -->
        <section class="progress-card">
            <div class="progress-heading">
                <div>
                    <h3>Daily Progress</h3>
                    <p>Keep moving towards your goals!</p>
                </div>
                <h2 id="progressPercent">0%</h2>
            </div>

            <div class="progress-track">
                <div class="progress-fill" id="progressFill"></div>
            </div>
        </section>

        <!-- Task Section -->
        <section class="task-section">

            <div class="section-heading">
                <div>
                    <h2>My Tasks</h2>
                    <p>Manage and organize your activities.</p>
                </div>
            </div>

            <!-- Add Task -->
            <form id="taskForm" class="task-form">

                <input type="text" id="taskInput"
                       placeholder="What do you need to do?"
                       required>

                <select id="priority">
                    <option value="Low">Low Priority</option>
                    <option value="Medium" selected>Medium Priority</option>
                    <option value="High">High Priority</option>
                </select>

                <input type="date" id="dueDate">

                <button type="submit" class="add-btn">
                    + Add Task
                </button>

            </form>

            <!-- Search and Filters -->
            <div class="task-toolbar">

                <input type="search" id="searchInput"
                       placeholder="⌕ Search tasks...">

                <div class="filter-buttons">
                    <button class="filter-btn selected" data-filter="all">
                        All
                    </button>
                    <button class="filter-btn" data-filter="pending">
                        Pending
                    </button>
                    <button class="filter-btn" data-filter="completed">
                        Completed
                    </button>
                </div>

            </div>

            <!-- Task List -->
            <div id="taskList" class="task-list"></div>

            <div class="bottom-actions">
                <p id="taskSummary">0 tasks available</p>
                <button id="clearBtn" class="clear-btn">
                    Clear Completed
                </button>
            </div>

        </section>

        <footer>
            TaskFlow © 2026 | Stay Organized, Stay Productive.
        </footer>

    </main>

</div>

<script src="script.js"></script>
</body>
</html>

```
style.css
```

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: #f4f5fb;
    color: #25263a;
}

button, input, select {
    font-family: inherit;
}

button {
    cursor: pointer;
    border: none;
}

.dashboard {
    display: flex;
    min-height: 100vh;
}

/* Sidebar */

.sidebar {
    width: 250px;
    background: #20213b;
    color: white;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}

.logo {
    font-size: 25px;
    font-weight: 800;
    color: #a99aff;
    margin-bottom: 55px;
}

.menu-title {
    font-size: 11px;
    letter-spacing: 2px;
    color: #9293b2;
    margin-bottom: 18px;
}

.sidebar nav {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.nav-btn {
    background: transparent;
    color: #b8b9d0;
    padding: 15px;
    text-align: left;
    border-radius: 10px;
    font-size: 14px;
    transition: 0.3s;
}

.nav-btn:hover,
.nav-btn.active {
    background: #5145bd;
    color: white;
}

.sidebar-bottom {
    margin-top: auto;
}

.profile {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-top: 20px;
    border-top: 1px solid #41425c;
}

.avatar {
    width: 42px;
    height: 42px;
    background: linear-gradient(135deg, #a78bfa, #6255d8);
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: bold;
}

.profile h4 {
    font-size: 13px;
}

.profile p {
    color: #a6a7c0;
    font-size: 11px;
    margin-top: 5px;
}

/* Main content */

.main-content {
    flex: 1;
    padding: 38px 45px;
    min-width: 0;
}

.topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.welcome {
    font-size: 11px;
    letter-spacing: 2px;
    color: #7567d9;
    font-weight: 700;
    margin-bottom: 9px;
}

.topbar h1 {
    font-size: 30px;
    margin-bottom: 8px;
}

.subtitle {
    color: #88899d;
    font-size: 13px;
}

.date-display {
    background: white;
    padding: 13px 20px;
    border-radius: 10px;
    font-size: 13px;
    color: #6255c9;
    box-shadow: 0 3px 15px #e7e7f0;
}

/* Statistics */

.stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 25px;
}

.stat-card {
    padding: 23px;
    border-radius: 15px;
    background: white;
    box-shadow: 0 4px 18px #e9e9f2;
    position: relative;
    overflow: hidden;
}

.stat-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    font-size: 20px;
    margin-bottom: 15px;
}

.stat-card p {
    color: #77788d;
    font-size: 13px;
}

.stat-card h2 {
    font-size: 29px;
    margin: 8px 0;
}

.stat-card span {
    color: #999aab;
    font-size: 11px;
}

.purple .stat-icon {
    background: #eeeaff;
    color: #7564d9;
}

.orange .stat-icon {
    background: #fff0df;
    color: #ef9b3d;
}

.green .stat-icon {
    background: #e3f8ed;
    color: #38a879;
}

/* Progress */

.progress-card {
    background: white;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 4px 18px #e9e9f2;
    margin-bottom: 30px;
}

.progress-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
}

.progress-heading h3 {
    font-size: 16px;
}

.progress-heading p {
    color: #9292a4;
    font-size: 12px;
    margin-top: 6px;
}

.progress-heading h2 {
    color: #7564d9;
}

.progress-track {
    width: 100%;
    height: 10px;
    background: #efeff6;
    border-radius: 20px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #7664df, #a78bfa);
    border-radius: 20px;
    transition: width 0.4s;
}

/* Task Section */

.task-section {
    background: white;
    padding: 27px;
    border-radius: 15px;
    box-shadow: 0 4px 18px #e9e9f2;
}

.section-heading h2 {
    font-size: 20px;
}

.section-heading p {
    font-size: 12px;
    color: #9999aa;
    margin-top: 7px;
}

/* Task Form */

.task-form {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr auto;
    gap: 10px;
    margin: 25px 0;
}

.task-form input,
.task-form select,
#searchInput {
    padding: 12px;
    border: 1px solid #e4e4ed;
    border-radius: 8px;
    outline: none;
    color: #44445a;
    min-width: 0;
    background: white;
    font-size: 12px;
}

.task-form input:focus,
.task-form select:focus,
#searchInput:focus {
    border-color: #8271e5;
}

.add-btn {
    background: linear-gradient(135deg, #7664df, #5947bd);
    color: white;
    border-radius: 8px;
    padding: 12px 18px;
    font-size: 12px;
    font-weight: 600;
}

.add-btn:hover {
    opacity: 0.9;
}

/* Toolbar */

.task-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

#searchInput {
    width: 230px;
}

.filter-buttons {
    display: flex;
    gap: 7px;
}

.filter-btn {
    padding: 9px 14px;
    border-radius: 7px;
    background: #f3f2f9;
    color: #77778b;
    font-size: 11px;
}

.filter-btn.selected {
    background: #6656cc;
    color: white;
}

/* Task Items */

.task-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.task-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    border: 1px solid #ededf3;
    border-radius: 10px;
    transition: 0.2s;
}

.task-item:hover {
    border-color: #c9c1f3;
    transform: translateY(-2px);
}

.task-check {
    width: 17px;
    height: 17px;
    accent-color: #7564d9;
    cursor: pointer;
}

.task-info {
    flex: 1;
    min-width: 0;
}

.task-info h4 {
    font-size: 13px;
    overflow-wrap: anywhere;
}

.task-info p {
    color: #9999aa;
    font-size: 11px;
    margin-top: 7px;
}

.task-info h4.done {
    text-decoration: line-through;
    color: #a5a5b3;
}

.priority {
    padding: 6px 10px;
    border-radius: 20px;
    font-size: 10px;
    font-weight: 600;
}

.High {
    color: #dc5555;
    background: #fff0f0;
}

.Medium {
    color: #d58b28;
    background: #fff6e7;
}

.Low {
    color: #319c70;
    background: #e9f8f0;
}

.task-actions {
    display: flex;
    gap: 6px;
}

.task-actions button {
    padding: 7px 10px;
    border-radius: 6px;
    font-size: 11px;
    color: white;
}

.edit-btn {
    background: #e9a23b;
}

.delete-btn {
    background: #e66c6c;
}

.empty-state {
    text-align: center;
    padding: 45px 10px;
    color: #9999aa;
    font-size: 13px;
}

.bottom-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 22px;
}

.bottom-actions p {
    color: #9999aa;
    font-size: 12px;
}

.clear-btn {
    background: #fff0f0;
    color: #dc5555;
    padding: 10px 14px;
    border-radius: 7px;
    font-size: 11px;
}

.clear-btn:hover {
    background: #ffe0e0;
}

footer {
    text-align: center;
    color: #a2a2b1;
    font-size: 11px;
    margin-top: 25px;
}

/* Responsive Design */

@media (max-width: 1000px) {
    .main-content {
        padding: 25px;
    }

    .task-form {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 700px) {
    .dashboard {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
        padding: 18px;
    }

    .logo {
        margin-bottom: 18px;
    }

    .menu-title,
    .sidebar-bottom {
        display: none;
    }

    .sidebar nav {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .nav-btn {
        flex: 1;
        text-align: center;
        padding: 11px 5px;
    }

    .main-content {
        padding: 20px 14px;
    }

    .topbar {
        align-items: flex-start;
        gap: 12px;
        flex-direction: column;
    }

    .stats {
        grid-template-columns: 1fr;
    }

    .task-form {
        grid-template-columns: 1fr;
    }

    .task-toolbar {
        align-items: stretch;
        flex-direction: column;
    }

    #searchInput {
        width: 100%;
    }

    .filter-buttons {
        flex-wrap: wrap;
    }

    .task-item {
        flex-wrap: wrap;
    }

    .task-actions {
        margin-left: auto;
    }
}

```
script.js
```

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

```

## OUTPUT

![alt text](<Screenshot 2026-11-17 172109.png>)
## RESULT
The program for creating To-do list using JavaScript is executed successfully.
