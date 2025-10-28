import { UsersAppComponent } from "./crud-users/components/users-app-component";
import usersStore from "./crud-users/store/users-store";

const appComponentHtml = document.querySelector('#app');

usersStore.initStore();
UsersAppComponent(appComponentHtml);

const htmlElement = document.querySelector('.card');
htmlElement.textContent = 'hola'

usersStore.loadNextPage();