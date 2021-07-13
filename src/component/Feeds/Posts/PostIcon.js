import { grey } from '@material-ui/core/colors';
import React from 'react';
import './PostIcon.css';

function PostIcon({ Icon,number }) {
	return (
		<div className='post__icons'>
			<Icon style={{ color: grey[500] }} />
            <p style={{ color: grey[500] }} className='post__number' >{number} </p>
		</div>
	);
}

export default PostIcon;