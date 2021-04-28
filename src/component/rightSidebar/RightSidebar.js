import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './RightSidebar.css';
import RightSidebarOption from './RightSidebarOption';

function RightSidebar() {
	return (
		<div className='right__sidebar'>
			<header className='search'>
				<SearchIcon />
				<input className='search__button' type='text' placeholder='Search...' />
			</header>

	
				<header className='title' >
					<h2>What's Happening</h2>
				</header>

				<RightSidebarOption title='COVID-19 LIVE' body="COVID-19 SOS: Here's a list of resources" tweets='27.9K Tweets'   />
		</div>
	);
}

export default RightSidebar;
