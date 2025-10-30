import { generalView, renderAddButton, renderButtons, renderModal, renderUsersTable } from "../presentation/index";
import usersStore from "../store/users-store";




export const UsersAppComponent = async (htmlAppElement) => {

  generalView(htmlAppElement); //Renderización MACRO de la vista/pantalla general de la aplicación
  const htmlCardElement = document.querySelector('.card');



  await usersStore.loadNextPage();
  renderUsersTable(usersStore.getUsers(), htmlCardElement);
  renderButtons(htmlCardElement);
  renderAddButton(htmlCardElement);
  renderModal(htmlCardElement);


};