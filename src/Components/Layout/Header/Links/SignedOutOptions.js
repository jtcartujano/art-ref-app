import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutOptions = () => {
    return(
        <div class=" space-x-2">
            <NavLink to='/SignIn'>
                <button class="rounded bg-white p-2">Log In</button>
            </NavLink>
            <button class="rounded bg-white p-2">Sign Up</button>
        </div>
    )
}

export default SignedOutOptions