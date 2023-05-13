const modal = document.querySelector(".modal");
const add = document.querySelector("#add-task");
const close = document.querySelector("#close-modal");

const projectModal = document.querySelector(".project-modal");
const addProject = document.querySelector("#add-project");
const closeProject = document.querySelector("#close-project-modal");

// const editModal = document.querySelector(".edit-modal");
// const editButton = document.querySelector("#edit-btn");
// const closeEditModalBtn = document.querySelector("#close-edit-modal");

const openModal = () => {
  add.addEventListener("click", () => {
    modal.showModal();
  });
};
const closeModal = () => {
  close.addEventListener("click", () => {
    modal.close();
  });
};

const openProjectModal = () => {
  addProject.addEventListener("click", () => {
    projectModal.showModal();
  });
};

const closeProjectModal = () => {
  closeProject.addEventListener("click", () => {
    projectModal.close();
    console.log("hi");
  });
};

// const openEditModal = () => {
//   editButton.addEventListener("click", () => {
//     editModal.showModal();
//   });
// };

// const closeEditModal = () => {
//   closeEditModalBtn.addEventListener("click", () => {
//     editModal.close();
//   });
// };

export {
  modal,
  closeProject,
  projectModal,
  addProject,
  openModal,
  closeModal,
  openProjectModal,
  closeProjectModal,
};
