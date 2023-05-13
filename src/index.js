import "./style.css";
import {
  modal,
  addProject,
  closeModal,
  closeProject,
  openModal,
  openProjectModal,
  closeProjectModal,
  projectModal,
  openEditModal,
  closeEditModal,
  editModal,
} from "./modalForm";
import { Project, Projects, myProjects, defaultProject } from "./projects";
import { renderProjects, renderTodos } from "./DOM";
import { Todo } from "./todo";

const createProject = () => {
  const projectForm = document.querySelector("#project-form");
  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputProject = document.querySelector("#title-project").value;

    console.log(inputProject);
    const newProject = myProjects.createProject(inputProject);
    myProjects.selectProject(newProject);
    const newSelectedProject = myProjects.getSelectedProject();
    renderProjects(newSelectedProject);
    renderTodos(newSelectedProject);
    projectForm.reset();
    projectModal.close();
  });
};

const createTodos = () => {
  const todoForm = document.querySelector("#form");
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let selectedProject = myProjects.getSelectedProject();
    if (selectedProject) {
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const dueDate = document.getElementById("date").value;
      const priority = document.getElementById("priority").value;
      const todo = selectedProject.addTodo(title);
      todo.setTitle(title);
      todo.setDescription(description);
      todo.setDueDate(dueDate);
      todo.setPriority(priority);
      todo.setCompleted(false);
      renderTodos(selectedProject);
      modal.close();
    } else {
      console.log("No project selected.");
    }
    // reset form
    todoForm.reset();
  });
};

// function to deletTodo

function deleteTodo(event) {
  const project = myProjects.getSelectedProject();
  const index = event.target.getAttribute("data-index");
  deleteTodoFromProject(project, index);
  renderTodos(project);
}

// function that takes project and index as parameters and deletes the specified todo

function deleteTodoFromProject(project, index) {
  const todos = project.getTodos();
  console.log(todos);
  if (index >= 0 && index < todos.length) {
    const todo = todos[index];
    project.removeTodo(todo);
    console.log(
      `Todo '${todo.title}' has been deleted from project '${project.name}'`
    );
  } else {
    console.log(`Invalid index: ${index}`);
  }
}
// const editTodoForm = (event) => {
//   const index = event.target.getAttribute("data-index");
//   const todoToEdit = myProjects.getSelectedProject().getTodos()[index];
//   console.log("todotoedit", index, todoToEdit);
//   const titleToEdit = document.getElementById("edit-title");
//   const descriptionToEdit = document.getElementById("edit-description");
//   const dateToEdit = document.getElementById("edit-date");
//   const priorityToEdit = document.getElementById("edit-priority");

//   titleToEdit.value = todoToEdit.getTitle();
//   descriptionToEdit.value = todoToEdit.getDescription();
//   dateToEdit.value = todoToEdit.getDueDate();
//   priorityToEdit.value = todoToEdit.getPriority();
//   editModal.showModal();
// };

// const editForm = document.querySelector("#edit-form");
// editForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   updateTodo(
//     index,
//     titleToEdit.value,
//     descriptionToEdit.value,
//     dateToEdit.value,
//     priorityToEdit.value
//   );
// });

// const updateTodo = (index, title, description, dueDate, priority) => {
//   const editedTodo = myProjects.getSelectedProject().getTodos()[index];
//   editedTodo.setTitle(title);
//   editedTodo.setDescription(description);
//   editedTodo.setDueDate(dueDate);
//   editedTodo.setPriority(priority);
//   console.log("editedtodo", editedTodo);
//   renderTodos(myProjects.getSelectedProject());
//   editModal.close();
// };

const editTodoForm = (event) => {
  const project = myProjects.getSelectedProject();
  const index = event.target.getAttribute("data-index");
  const todo = project.getTodos()[index];
  console.log(project, index, todo);

  const dialog = document.querySelector(".edit-modal");
  dialog.innerHTML = "";

  // create form fields
  const editForm = document.createElement("form");
  editForm.setAttribute("id", "edit-form");
  document.body.appendChild(editForm);

  dialog.appendChild(editForm);

  const titleContainer = document.createElement("div");
  titleContainer.setAttribute("class", "title formcontainer");
  editForm.appendChild(titleContainer);

  const title = document.createElement("h2");
  title.textContent = "EDIT TASK";
  titleContainer.appendChild(title);

  const closeBtn = document.createElement("div");
  closeBtn.setAttribute("id", "close-edit-modal");
  closeBtn.textContent = "X";
  titleContainer.appendChild(closeBtn);

  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "task formcontainer");
  editForm.appendChild(taskContainer);

  const taskLabel = document.createElement("label");
  taskLabel.setAttribute("for", "edit-title");
  taskLabel.textContent = "title:";
  taskContainer.appendChild(taskLabel);

  const taskInput = document.createElement("input");
  taskInput.setAttribute("required", "");
  taskInput.setAttribute("type", "text");
  taskInput.setAttribute("id", "edit-title");
  taskInput.setAttribute("value", todo.getTitle());

  taskContainer.appendChild(taskInput);

  const notesContainer = document.createElement("div");
  notesContainer.setAttribute("class", "notes formcontainer");
  editForm.appendChild(notesContainer);

  const notesLabel = document.createElement("label");
  notesLabel.setAttribute("for", "edit-description");
  notesLabel.textContent = "description:";
  notesContainer.appendChild(notesLabel);

  const notesTextarea = document.createElement("textarea");
  notesTextarea.setAttribute("name", "description");
  notesTextarea.setAttribute("id", "edit-description");
  notesContainer.setAttribute("value", todo.getDescription());
  notesContainer.appendChild(notesTextarea);

  const dateContainer = document.createElement("div");
  dateContainer.setAttribute("class", "date formcontainer");
  editForm.appendChild(dateContainer);

  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "edit-date");
  dateLabel.textContent = "date:";
  dateContainer.appendChild(dateLabel);

  const dateInput = document.createElement("input");
  dateInput.setAttribute("required", "");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "edit-date");
  dateInput.setAttribute("value", todo.getDueDate());
  dateContainer.appendChild(dateInput);

  const urgentContainer = document.createElement("div");
  urgentContainer.setAttribute("class", "urgent formcontainer");
  editForm.appendChild(urgentContainer);

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "edit-priority");
  priorityLabel.textContent = "priority:";
  urgentContainer.appendChild(priorityLabel);

  const prioritySelect = document.createElement("select");
  prioritySelect.setAttribute("id", "edit-priority");
  prioritySelect.setAttribute("name", "priority");
  prioritySelect.setAttribute("value", todo.getPriority());
  urgentContainer.appendChild(prioritySelect);

  const lowOption = document.createElement("option");
  lowOption.setAttribute("value", "low");
  lowOption.textContent = "low";
  prioritySelect.appendChild(lowOption);

  const mediumOption = document.createElement("option");
  mediumOption.setAttribute("value", "medium");
  mediumOption.textContent = "medium";
  prioritySelect.appendChild(mediumOption);

  const highOption = document.createElement("option");
  highOption.setAttribute("value", "high");
  highOption.textContent = "high";
  prioritySelect.appendChild(highOption);

  const saveBtn = document.createElement("input");
  saveBtn.setAttribute("type", "submit");
  saveBtn.setAttribute("id", "edit-submit");
  saveBtn.setAttribute("value", "SAVE");
  editForm.appendChild(saveBtn);

  dialog.showModal();

  // add an event listener to the form
  editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTitle = document.getElementById("edit-title").value;
    const newDescription = document.getElementById("edit-description").value;
    const newDueDate = document.getElementById("edit-date").value;
    const newPriority = document.getElementById("edit-priority").value;

    todo.setTitle(newTitle);
    todo.setDescription(newDescription);
    todo.setDueDate(newDueDate);
    todo.setPriority(newPriority);

    renderTodos(project);
    editForm.reset();

    dialog.close();
  });
};

const doneTodo = (event) => {
  const index = event.target.getAttribute("data-index");
  const project = myProjects.getSelectedProject();
  const todo = project.getTodos()[index];
  console.log(todo);
  const doneButton = event.target;
  if (doneButton.checked === true) {
    todo.setCompleted(true);
  }
  if (doneButton.checked === false) {
    todo.setCompleted(false);
  }
  renderTodos(project);
};

openModal();
closeModal();
openProjectModal();
closeProjectModal();

createTodos();
createProject();
renderProjects(defaultProject);
renderTodos(defaultProject);
export { deleteTodo, editTodoForm, doneTodo };
