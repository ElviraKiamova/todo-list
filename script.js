const inputElement = document.querySelector(".todo-list__input");
const listElement = document.querySelector(".todo-list__list");
const buttonElement = document.querySelector(".todo-list__button");

inputElement.addEventListener('input', () => {
  buttonElement.disabled = inputElement.value.trim() === '';
});

function createTask() {
  const task = document.createElement('li');
  task.textContent = inputElement.value;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Удалить';
  deleteButton.addEventListener('click', () => {
    listElement.removeChild(task);
  });
  task.appendChild(deleteButton);
  listElement.appendChild(task);
  inputElement.value = '';
  buttonElement.disabled = true;
}

buttonElement.addEventListener('click', () => {
  if (inputElement.value.trim() !== '') {
    createTask();
  }
});

inputElement.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputElement.value.trim() !== '') {
    createTask();
  }
});