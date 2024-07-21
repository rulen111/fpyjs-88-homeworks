function createTaskElement(taskText) {
    const taskEl = document.createElement("div");
    taskEl.classList.add("task");
    taskEl.innerHTML = `<div class="task__title">\n\t${taskText}\n</div>\n<a href="#" class="task__remove">&times;</a>`;

    return taskEl;
};

const inputArea = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");
const addButton = document.getElementById("tasks__add");

addButton.onclick = (event) => {
    event.preventDefault();

    if (inputArea.value) {
        const newTask = createTaskElement(inputArea.value);
        const removeEl = newTask.lastChild;

        removeEl.onclick = () => {
            newTask.remove();
        };

        taskList.appendChild(newTask);
    };
};
