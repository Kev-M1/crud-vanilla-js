import { getRequestUsersByPage } from "../use-cases/get-users-request-by-page";

const state = {
  users: [],
  currentPage: 0,

};


//Methods
const initStore = () => {
  console.log('Initialized Store :)');
};

const getUsers = () => {
  return state.users;
};

const getCurrentPage = () => {
  return state.currentPage;
};



const loadNextPage = async () => {
  const usersFromBackend = await getRequestUsersByPage(state.currentPage + 1);
  state.currentPage += 1;
  state.users = usersFromBackend;
};

export default {
  initStore,
  loadNextPage,
  getUsers,
  getCurrentPage,
}