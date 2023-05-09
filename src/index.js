import "./style.css";
import { modal, closeModal, openModal } from "./modalForm";
import { Project, Projects, myProjects, defaultProject } from "./projects";
import { renderProjects, renderTodos } from "./DOM";

const createProject = () => {
  document.querySelector("#add-project").addEventListener("click", () => {
    const newProject = myProjects.createProject(
      prompt("What's your project name")
    );
    myProjects.selectProject(newProject);
    const newSelectedProject = myProjects.getSelectedProject();
    renderProjects(newSelectedProject);
    renderTodos(newSelectedProject);
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

const editTodoForm = (event) => {
  const project = myProjects.getSelectedProject();
  const index = event.target.getAttribute("data-index");
  const todo = project.getTodos()[index];
  console.log(project, index, todo);
  // create a form element
  const form = document.createElement("form");
  form.setAttribute("id", "edit-todo-form");

  // create form fields
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "edit-title");
  titleInput.setAttribute("value", todo.getTitle());
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("id", "edit-description");
  descriptionInput.setAttribute("value", todo.getDescription());
  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.setAttribute("id", "edit-duedate");
  dueDateInput.setAttribute("value", todo.getDueDate());
  const priorityInput = document.createElement("input");
  priorityInput.setAttribute("type", "text");
  priorityInput.setAttribute("id", "edit-priority");
  priorityInput.setAttribute("value", todo.getPriority());

  // create a save button
  const saveButton = document.createElement("button");
  saveButton.setAttribute("type", "submit");
  saveButton.textContent = "Save";

  // append form fields and save button to the form
  form.appendChild(titleInput);
  form.appendChild(descriptionInput);
  form.appendChild(dueDateInput);
  form.appendChild(priorityInput);
  form.appendChild(saveButton);

  // replace the todo element with the form element
  const todoEl = event.target.parentNode;
  todoEl.replaceWith(form);

  // add an event listener to the form
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTitle = document.getElementById("edit-title").value;
    const newDescription = document.getElementById("edit-description").value;
    const newDueDate = document.getElementById("edit-duedate").value;
    const newPriority = document.getElementById("edit-priority").value;

    todo.setTitle(newTitle);
    todo.setDescription(newDescription);
    todo.setDueDate(newDueDate);
    todo.setPriority(newPriority);

    renderTodos(project);
  });
};

const doneTodo = (event) => {
  const index = event.target.getAttribute("data-index");
  const project = myProjects.getSelectedProject();
  const todo = project.getTodos()[index];
  const doneButton = event.target;
  if (doneButton.textContent === "Todo") {
    todo.setCompleted(true);
  }
  if (doneButton.textContent === "Done") {
    todo.setCompleted(false);
  }
  renderTodos(project);
};

openModal();
closeModal();

createTodos();
createProject();
renderProjects(defaultProject);
renderTodos(defaultProject);

export { deleteTodo, editTodoForm, doneTodo };
