import "./render-modal.css";
import htmlModal from './render-modal.html?raw';

let modal, form;


export const showModal = () => {
  modal?.classList.remove('hide-modal');
};

export const hideModal = () => {
  modal?.classList.add('hide-modal');
};


export const renderModal = (htmlElement) => {
  if (!modal) {
    modal = document.createElement('div');
    modal.innerHTML = htmlModal;
    modal.classList.add('modal-container', 'hide-modal');
    form = modal.querySelector('form')
    htmlElement.append(modal);
  }

  modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-container')) {
      hideModal();
    }
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  })

};