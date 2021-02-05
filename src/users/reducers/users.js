import { GET_ALL_USERS } from '../actions/types';

export default function(state = { all: [] }, action) {
    switch(action.type) {
        case GET_ALL_USERS: 
            return { ...state, all: action.payload  };
        default:
            return state;
    }
}
