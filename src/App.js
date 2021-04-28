import React from 'react';
import LeftSidebar from './component/leftSidebar/Leftsidebar';
import './App.css'

function App() {
	return (
		<div className='app'>
			<LeftSidebar />
			<Feeds />
		</div>
	);
}

export default App;
