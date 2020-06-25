import { currentUserTypes } from './user.types';

export const setCurrentUser = (user) => ({
  type: currentUserTypes.SET_CURRENT_USER,
  payload: user,
});
