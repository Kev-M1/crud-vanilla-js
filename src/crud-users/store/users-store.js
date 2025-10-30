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
  if (JSON.stringify(usersFromBackend) === JSON.stringify(state.users)) {
    return;
  }


  state.currentPage += 1;
  state.users = usersFromBackend;
};

const loadPreviousPage = async () => {
  if (state.currentPage === 1) {
    return;
  }
  const usersFromBackend = await getRequestUsersByPage(state.currentPage - 1);
  state.currentPage -= 1;
  state.users = usersFromBackend;
};

export default {
  initStore,
  loadNextPage,
  getUsers,
  getCurrentPage,
  loadPreviousPage,
}