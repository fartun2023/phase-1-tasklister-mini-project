document.addEventListener("DOMContentLoaded", () => {
  // your code here
const taskForm = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTaskInput = document.querySelector('#new-task-description');
  const newTask = document.createElement('li');
  newTask.innerText = newTaskInput.value;
  taskList.appendChild(newTask);
  newTaskInput.value = '';
});

});
