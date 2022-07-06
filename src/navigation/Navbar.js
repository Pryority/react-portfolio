import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <nav id='navbar' className='flex items-center bg-green-500 p-4' >
                <div className='flex w-full justify-start'>
                    <h1 className="text-3xl font-bold">
                        Matthew Pryor
                    </h1>
                </div>

                <ul className='flex space-x-3 items-center list-none'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav >
        );
    }
}