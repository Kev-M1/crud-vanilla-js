import { generalView } from "../presentation/general-view/general-view";




export const UsersAppComponent = (htmlAppElement) => {

  generalView(htmlAppElement); //Renderización MACRO de la vista/pantalla general de la aplicación
  const htmlElement = document.querySelector('.card');

  htmlElement.textContent = 'hola'



};