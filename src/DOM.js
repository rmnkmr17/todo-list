import { Project, Projects, myProjects, defaultProject } from "./projects";
import { deleteTodo, editTodoForm, doneTodo } from ".";

const renderProjects = (newProject) => {
  const projectsContainer = document.querySelector(".projects-list");
  projectsContainer.innerHTML = "";
  for (let project of myProjects.projects) {
    const newProjectBtn = createProjectButton(project.name);
    newProjectBtn.textContent = project.name;
    if (project === newProject) {
      newProjectBtn.classList.add("active-project"); // change background color
    }
    projectsContainer.append(newProjectBtn);
  }
  switchProject();
};

const switchProject = () => {
  const allProjects = document.querySelectorAll("#project");
  allProjects.forEach((project) => {
    project.addEventListener("click", () => {
      // remove active-project class from all project buttons
      allProjects.forEach((p) => p.classList.remove("active-project"));
      // add active-project class to the clicked project button
      project.classList.add("active-project");

      for (let myProject of myProjects.projects) {
        if (project.textContent === myProject.name) {
          renderTodos(myProject);
        }
      }
    });
  });
};

// creates button for the project
function createProjectButton(projectName) {
  const projectBtn = document.createElement("h4");
  projectBtn.textContent = projectName;
  projectBtn.setAttribute("id", "project");
  return projectBtn;
}

const renderTodos = (project) => {
  myProjects.selectProject(project);
  const todos = project.todos;
  const todosContainer = document.querySelector(".todo-list");
  todosContainer.innerHTML = "";
  for (let todo of todos) {
    const todoEl = document.createElement("p");
    todoEl.classList.add("my-todo");
    todoEl.style.backgroundColor = `${
      todo.getCompletion() === true ? "#d0d6dcc9" : "rgb(228 235 242 / 79%)"
    }`;
    todoEl.innerHTML = `
    <input data-index="${todos.indexOf(todo)}" id="done-btn" type="checkbox" ${
      todo.getCompletion() === false ? "" : "checked"
    }/>
    <div id="todo-title">${todo.title}</div>
    <div>${todo.dueDate}</div>
    <div>${todo.priority}</div>
    <div class="buttons-container"> 
    <button data-index="${todos.indexOf(todo)}" id="edit-btn">🔍</button>
    <button data-index="${todos.indexOf(todo)}" id="delete-btn">🗑️</button>
    </div>
    `;

    todosContainer.append(todoEl);
    attachEventListenersToTheButtons(todoEl);
  }
};
const attachEventListenersToTheButtons = (todoEl) => {
  const deleteButton = todoEl.querySelector("#delete-btn");
  deleteButton.addEventListener("click", (event) => {
    deleteTodo(event);
  });

  const doneButton = todoEl.querySelector("#done-btn");
  doneButton.addEventListener("click", (event) => {
    doneTodo(event);
  });

  const editButton = todoEl.querySelector("#edit-btn");
  editButton.addEventListener("click", (event) => {
    editTodoForm(event);
  });
};

// const removeTodoListeners = () => {
//   const deleteButton = document.querySelector("#delete-btn");
//   deleteButton.removeEventListener("click", (event) => {
//     deleteTodo(event);
//   });

//   const doneButton = document.querySelector("#done-btn");
//   doneButton.removeEventListener("click", (event) => {
//     doneTodo(event);
//   });

//   const editButton = document.querySelector("#edit-btn");
//   editButton.removeEventListener("click", (event) => {
//     console.log("I'm the edit button and I'm invoked");
//     editTodoForm(event);
//   });
// };

// const addTodoListeners = () => {
//   // attach event listener to delete button
//   const deleteButton = document.querySelector("#delete-btn");
//   deleteButton.addEventListener("click", (event) => {
//     deleteTodo(event);
//   });

//   const doneButton = document.querySelector("#done-btn");
//   doneButton.addEventListener("click", (event) => {
//     doneTodo(event);
//   });

//   const editButton = document.querySelector("#edit-btn");
//   editButton.addEventListener("click", (event) => {
//     editTodoForm(event);
//   });
// };

export { renderProjects, renderTodos };
