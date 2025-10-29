import usersStore from '../../store/users-store';
import './render-buttons.css'

export const renderButtons = (htmlElement) => {
  const nextButton = document.createElement('button');
  const prevButton = document.createElement('button');
  const currentPage = document.createElement('label');


  prevButton.innerHTML = ' < Prev ';
  currentPage.innerHTML = ` ${usersStore.getCurrentPage()} `;
  currentPage.id = 'current-page';
  nextButton.innerHTML = ' Next > ';

  htmlElement.append(prevButton, currentPage, nextButton);
};