import React from 'react';
import NavLink from './NavLink';

function NavBar() {
    return (
        <div>
            <NavLink name="ABOUT ME"/>
            <NavLink name="PROJECTS" />
            <NavLink name="CONTACT" />
        </div>
    )
}

export default NavBar;