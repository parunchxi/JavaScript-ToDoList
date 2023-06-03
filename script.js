const inputTask = document.querySelector('#new_task');
const addTaskButton = document.querySelector('#add');
const taskList = document.querySelector('ul');

inputTask.addEventListener('input', (event) => {
    if (inputTask.value !== '') {
        addTaskButton.disabled = false;
    } else {
        addTaskButton.disabled = true;
    }
})

addTaskButton.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerHTML = inputTask.value;
    taskList.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    inputTask.value = '';
    addTaskButton.disabled = true;
    saveTask();
})

taskList.innerHTML = localStorage.getItem('data');

taskList.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        saveTask();
    } else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
        saveTask();
    }
})

function saveTask() {
    localStorage.setItem('data', taskList.innerHTML);
}