import React from 'react';

function NavLink(props) {
    return (
        <button className="link">
            {props.name}
        </button>
    )
}

export default NavLink;