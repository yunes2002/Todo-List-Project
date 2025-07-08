// Get required DOM elements
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addTaskBtn = document.getElementById('add-task');

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = inputBox.value.trim();

    // Prevent adding empty tasks
    if (taskText === "") {
        alert("Please write something.");
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create delete button (× symbol)
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = "\u00d7";
    deleteBtn.classList.add('delete-btn'); // for styling

    li.appendChild(deleteBtn);
    listContainer.appendChild(li);

    // Clear the input field
    inputBox.value = "";

    saveData();

    console.log('input box is empty');
}

// Handle clicks on task list (check or delete)
listContainer.addEventListener('click', function (e) {
    const target = e.target;

    if (target.tagName === 'LI') {
        target.classList.toggle('checked'); // toggle completed style
        saveData();
    } else if (target.tagName === 'SPAN') {
        target.parentElement.remove(); // remove task
        saveData();
    }
});

// Save tasks to localStorage
function saveData() {
    localStorage.setItem('tasks', listContainer.innerHTML);
}

// Load saved tasks from localStorage on page load
function showTasks() {
    const saved = localStorage.getItem('tasks');
    if (saved) {
        listContainer.innerHTML = saved;
    }
}

showTasks();
