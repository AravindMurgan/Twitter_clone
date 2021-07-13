import React from 'react';
import LeftSidebar from './component/leftSidebar/Leftsidebar';
import './App.css'
import Feeds from './component/Feeds/Feeds';
import RightSidebar from './component/rightSidebar/RightSidebar';

function App() {
	return (
		<div className='app'>
			{/* LeftSideBar */}
			<LeftSidebar />

			{/* Feeds */}
			<Feeds />

			{/* RightSidebar */}
			<RightSidebar />
		</div>
	);
}

export default App;



