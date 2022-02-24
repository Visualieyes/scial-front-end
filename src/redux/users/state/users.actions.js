
import {
  GET_ALL_USERS,
  GET_USERS_BY_ID,
  CREATE_USER
} from '../../state/actionTypes';
import UserService from './users.service';


function receiveUsers(users) {
  return {
    type: GET_ALL_USERS,
    payload: {
      users,
    },
  };
}

export const getUsers = () => async (dispatch) => {
  // if (!Permissions.permissions.has('USERS_READ')) return false;
  const users = await UserService.getAll();
  dispatch(receiveUsers(users));
  return true;
};

export const getUserById = (id) => async (dispatch) => {
  // if (!Permissions.permissions.has('USERS_READ')) return false;
  const selectedUser = await UserService.get(id);
  dispatch({
    type: GET_USERS_BY_ID,
    payload: {
      selectedUser,
    },
  });
  return true;
};

export const createUser = (payload) => async (dispatch) => {
  // if (!Permissions.permissions.has('USERS_WRITE')) return false;

  const { data } = await UserService.create(payload);
  if (!data) return false;
  dispatch({
    type: CREATE_USER,
    payload: {
      user: {
        ...payload,
        id: data.id,
      },
    },
  });
  return data;
};
