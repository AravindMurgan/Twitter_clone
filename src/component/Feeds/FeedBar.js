import { blue } from '@material-ui/core/colors';
import React from 'react';
import './FeedBar.css';

function FeedBar({ Icon }) {
	return (
		<div className='icons'>
			<Icon style={{ color: blue[500] }} />
		</div>
	);
}

export default FeedBar;
