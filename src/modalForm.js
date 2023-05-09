const modal = document.querySelector(".modal");
const add = document.querySelector("#add-task");
const close = document.querySelector("#close-modal");

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

export { modal, openModal, closeModal };
