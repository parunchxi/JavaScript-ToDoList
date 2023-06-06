const inputTask = document.querySelector('#new_task');
const addTaskButton = document.querySelector('#add');
const taskList = document.querySelector('ul');
let taskArray = [];

// Get task form localStorage
data = JSON.parse(localStorage.getItem('taskData'));
if (data !== null) {
    data.forEach((item) => {
        taskArray.push(item);
    })
}

// Save task in localStorage
function saveTask() {
    if (taskArray.length !== 0) {
        localStorage.setItem('taskData', JSON.stringify(taskArray));
    } else if (taskArray.length === 0) {
        localStorage.removeItem('taskData');
    }
}

// Enable add button
inputTask.addEventListener('input', (event) => {
    if (inputTask.value !== '') {
        addTaskButton.disabled = false;
    } else {
        addTaskButton.disabled = true;
    }
})

// Add new task
addTaskButton.addEventListener('click', addNewTask);
inputTask.addEventListener('keydown', (key) => {
    if (key.code === "Enter") {
        addNewTask();
    }
});

function addNewTask() {
    taskArray.unshift(inputTask.value);
    showTask();
    saveTask();
    addTaskButton.disabled = true;
}

// Show task
showTask();
function showTask() {
    taskList.innerHTML = '';
    taskArray.forEach(item => {
        let li = document.createElement('li');
        li.id = item;
        li.innerHTML = item;
        taskList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        inputTask.value = '';
    })
}

// Check and Delete task
taskList.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    } else if (event.target.tagName === 'SPAN') {
        taskArray = taskArray.filter(item => item !== event.target.parentElement.id);
        showTask();
        saveTask();
    }
})

// Change Theme
const changeTheme = document.getElementById('change_theme');
changeTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.className === 'dark-mode') {
        changeTheme.innerHTML = '<i class="ri-moon-fill"></i>';
    } else {
        changeTheme.innerHTML = '<i class="ri-sun-fill"></i>';
    }
})