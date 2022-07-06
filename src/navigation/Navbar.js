import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav id='navbar' className='flex items-center bg-green-500 p-4'>
            <div className='flex w-full justify-start'>
                <h1 className="text-3xl font-bold">
                    Matthew Pryor
                </h1>
            </div>

            <list className='flex space-x-3 items-center list-none'>
                <li className=''>
                    <Link to="/">Home</Link>
                </li>
                <li className=''>
                    <Link to="/About">About</Link>
                </li>
                <li className=''>
                    <Link to="/Portfolio">Portfolio</Link>
                </li>
                <li className=''>
                    <Link to="/Contact">Contact</Link>
                </li>
            </list>
        </nav>
    );
}

export default Navbar;