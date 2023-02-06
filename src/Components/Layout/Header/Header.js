import React from 'react';
import { Link } from 'react-router-dom';
import UserOptions from "./Links/UserOptions";
import SignedOutOptions from "./Links/SignedOutOptions"
import "./Header.css";

const Header = () => {
    return (
        <div class="flex justify-between bg-neutral-600 p-4">

            <Link to='/'>
                <button class="rounded bg-white p-2 inline-flex"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span>Home</span>
                </button>
            </Link>

            
            <div class="flex flex-row space-x-2">
                <UserOptions />            
                <SignedOutOptions />
            </div>

        </div>
    )
}

export default Header