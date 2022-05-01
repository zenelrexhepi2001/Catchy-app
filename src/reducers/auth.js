import {GET_CREATE_ACCOUNT_SUCCESS} from '../actions/auth';

const INITIAL_STATE = {
    token: null,
    userId: null,
}

export default (state = INITIAL_STATE, action) => {
      switch(action.type) {
          case GET_CREATE_ACCOUNT_SUCCESS:
              return {
                  ...state,
                  token: action.token,
                  userId: action.userId,
              }
              default:
              return state
      }
}