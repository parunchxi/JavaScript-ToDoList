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
    inputTask.value = '';
    addTaskButton.disabled = true;
})