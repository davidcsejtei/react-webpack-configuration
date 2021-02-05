import { GET_ALL_USERS } from './types';
import { GET_ALL_USERS_URL } from './urls';

export function getAllUsers() {
    return dispatch => {
        fetch(GET_ALL_USERS_URL).then(response => {
            response.json().then(data => dispatch(loadAllUsers(data)));
        });
    }
}

function loadAllUsers(users) {
    return {
        type: GET_ALL_USERS,
        payload: users
    }
}
