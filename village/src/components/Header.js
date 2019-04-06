import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <h2>Welcome to Smurf village</h2>
            <NavLink to="/smurfs">
                <button>View Smurfs</button>
            </NavLink>
            <NavLink to="smurf-form">
                <button>Add Smurfs</button>
            </NavLink>
        </div>
    );
}
