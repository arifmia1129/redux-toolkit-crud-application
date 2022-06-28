import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-student">Add Student</Link></li>
                <li><Link to="/students">Show Students</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;