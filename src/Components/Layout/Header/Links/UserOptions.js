import React from 'react';
import { NavLink } from 'react-router-dom';

const UserOptions = () => {
    return(
        <div class=" space-x-2">
            <NavLink to='/'>
                <button class="rounded bg-white p-2">My Page</button>
            </NavLink>
            <NavLink to='/create'>
                <button class="rounded bg-white p-2">Create</button>
            </NavLink>
            <button class="rounded bg-white p-2">Settings</button>
            <button class="rounded bg-white p-2">Sign Out</button>
        </div>
    )
}

export default UserOptions