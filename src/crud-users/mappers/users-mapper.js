import { User } from '../models/user-model'

//This method converts each user (object) received from the backend into one created from the frontend model, standardizing the naming of the properties.

export const usersMapper = (userFromBack) => {
  const {
    id,
    isActive,
    balance,
    avatar,
    first_name,
    last_name,
    gender,
  } = userFromBack;

  return new User(
    id,
    isActive,
    balance,
    avatar,
    first_name,
    last_name,
    gender,
  )
};