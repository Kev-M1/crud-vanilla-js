import "./render-modal.css";
import htmlModal from './render-modal.html?raw';

let modal;


export const renderModal = (htmlElement) => {
  if (!modal) {
    modal = document.createElement('div');
    modal.innerHTML = htmlModal;
    modal.classList.add('modal-container', 'hide-modal');
    htmlElement.append(modal);
  }
};