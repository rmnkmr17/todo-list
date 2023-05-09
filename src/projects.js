import { Todo } from "./todo";

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(title, description, dueDate, priority) {
    const todo = new Todo(title, description, dueDate, priority, this);
    this.todos.push(todo);
    return todo;
  }

  removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  getTodos() {
    return this.todos;
  }
}

class Projects {
  constructor() {
    this.projects = [];
  }

  createProject(name) {
    const project = new Project(name);
    this.projects.push(project);
    return project;
  }

  deleteProject(project) {
    const index = this.projects.indexOf(project);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }

  getSelectedProject() {
    return this.selectedProject;
  }

  getProjects() {
    if (this.selectedProject) {
      return [this.selectedProject];
    } else {
      return this.projects;
    }
  }

  selectProject(project) {
    this.selectedProject = project;
  }
}

const myProjects = new Projects();
const defaultProject = myProjects.createProject("Default");

export { Project, Projects, myProjects, defaultProject };
