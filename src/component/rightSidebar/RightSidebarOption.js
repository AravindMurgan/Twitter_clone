import React from 'react';
import './RightSidebarOption.css';

function RightSidebarOption({ title, body, tweets }) {
	return (
		<div className='feed__body'>
			<small> {title} </small>
			<h4>{body} </h4>
			<small>{tweets} </small>
		</div>
	);
}

export default RightSidebarOption;
