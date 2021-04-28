import React from 'react';
import './Sidebarmenu.css';

function Sidebarmenu({ Icon, title }) {
	return (
		<div className='icon__title'>
			{<Icon />}
			<h3>{title}</h3>
			
		</div>
	);
}

export default Sidebarmenu;
