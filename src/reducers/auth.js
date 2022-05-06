import { GET_CREATE_ACCOUNT_SUCCESSFULLY } from "../actions/auth";

const INITIAL_STATE = {
   token: null,
   userId: null,
}

export default (state = INITIAL_STATE, action)=>{
    switch(action.type) {
        case GET_CREATE_ACCOUNT_SUCCESSFULLY:
          return {
              token: action.token,
              userId: action.userId,
          }
          default:
              return state;
    }
}