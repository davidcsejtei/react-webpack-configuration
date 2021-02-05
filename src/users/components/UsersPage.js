import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../actions/actions';

const UsersPage = () => {
    const users = useSelector(state => state.users.all);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div>
            <h1>Users Page</h1>
            { users.map(user => <p key={user.id}>{user.name}</p>) }
        </div>
    )
};

export default UsersPage;
