import "./render-add-button.css"

export const renderAddButton = (htmlElement) => {
  const fabButton = document.createElement('button');
  fabButton.innerText = '+';
  fabButton.classList.add('fab-button');
  htmlElement.append(fabButton);


  //Listener

  fabButton.addEventListener('click', (event) => {

  })
};