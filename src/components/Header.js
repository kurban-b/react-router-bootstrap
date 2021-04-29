import React from 'react';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className='row header mt-3 mb-3'>
            <div className="col-4">
                <h2 className='logo'>
                    Cover
                </h2>
            </div>
            <div className="col-8">
                <div className="navbar-block d-flex justify-content-end align-items-center">
                    <NavLink exact to='/' activeClassName = 'active'>
                        Home
                    </NavLink>
                    <NavLink to='/features' activeClassName = 'active'>
                        Features
                    </NavLink>
                    <NavLink to='/contact' activeClassName = 'active'>
                        Contact
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;