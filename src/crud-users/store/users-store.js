import { getRequestUsersByPage } from "../use-cases/get-users-request-by-page";

const state = {
  users: [],
  currentPage: 0,

};


//Methods
const initStore = () => {
  console.log('Initialized Store :)');
};


const loadNextPage = async () => {
  const usersFromBackend = await getRequestUsersByPage(state.currentPage + 1);
  console.log(usersFromBackend);
};

export default {
  initStore,
  loadNextPage,
}