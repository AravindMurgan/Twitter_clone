import React from 'react';
import LeftSidebar from './component/leftSidebar/Leftsidebar';
import './App.css'
import Feeds from './component/Feeds/Feeds';

function App() {
	return (
		<div className='app'>
			<LeftSidebar />
			<Feeds />
		</div>
	);
}

export default App;
