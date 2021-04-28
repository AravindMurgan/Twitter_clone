import React from 'react';
import './RightSidebarOption.css';

function RightSidebarOption({title,body,tweets}) {
	return (
		<div className='feed__body'>
			<div className='feed__description  '>
				<small> {title} </small>
				<h4>{body} </h4>
                <small>{tweets} </small>
			</div>
            


		</div>
	);
}

export default RightSidebarOption;
