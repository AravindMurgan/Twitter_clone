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

			<div className='news__feed'>
				<div className='header'>
					<h2>Whats Happenging</h2>
				</div>

				<RightSidebarOption />
			</div>
		</div>
	);
}

export default RightSidebar;
