import React from 'react';
import { NavLink } from 'react-router-dom';

const UserOptions = () => {
    return(
        <div class=" space-x-2">
            {/* <MenuItem>
                <Typography>My Page</Typography>
            </MenuItem>
            <MenuItem>
                <Typography>
                    Settings
                </Typography>
            </MenuItem>
            <MenuItem>
                <NavLink to='/'>
                    Sign Out
                </NavLink>
            </MenuItem> */}

            <NavLink to='/ViewPage'>
                <button class="rounded bg-white p-2">My Page</button>
            </NavLink>

            <button class="rounded bg-white p-2">Settings</button>
            <button class="rounded bg-white p-2">Sign Out</button>
        </div>
    )
}

export default UserOptions