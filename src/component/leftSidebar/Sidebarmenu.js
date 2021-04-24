import React from 'react';
import './Sidebarmenu.css';

function Sidebarmenu({Icon,title}) {
    return (
        <div className='sidebar__menu'>
            <div className="menu__option">
            {<Icon/>}
            <h3>{title}</h3>
            </div>
            
        </div>
    )
}

export default Sidebarmenu
