import moment from 'moment';
import {
  GET_ALL_USERS,
  GET_USERS_BY_ID,
  CREATE_USER,
} from '../../state/actionTypes';


const initialState = {
  users: [],
  lastUpdated: moment(),
  quickBooksUsers: [],
  userTrie: {},
  userTeams: {},
  userDivisions: {}, // { userId: [list of divisions] }
  labels: [], // Unique labels
  userToLabel: {}, // { userId: [list of labels] }
  labelToUser: {}, // { labelTitle: [list of userIds] }
  userFiles: {},
  notes: {},
};





export default function usersActions(state = initialState, action) {
  switch (action.type) {

    case CREATE_USER: {
      const {
        payload: {
          user = {},
        } = {},
      } = action;

      

      return {
        ...state
      };
    }
    
    default:
      return state;
  }
}
