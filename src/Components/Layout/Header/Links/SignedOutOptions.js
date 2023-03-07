import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutOptions = () => {
    return(
        <div class=" space-x-2">
            <NavLink to='/SignIn'>
                <button class="rounded bg-white p-2">Log In</button>
            </NavLink>
            <NavLink to='/SignUp'>
                <button class="rounded bg-white p-2">Sign Up</button>
            </NavLink>
        </div>
    )
}

export default SignedOutOptions