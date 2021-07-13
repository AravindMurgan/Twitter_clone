import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Feeds from './component/Feeds/Feeds';
import LeftSidebar from './component/leftSidebar/Leftsidebar';
import Login from './component/Login/Login';
import RightSidebar from './component/rightSidebar/RightSidebar';

function App() {
	const user = useSelector((state) => state.user.user);
	return (
		<div>
			{!user ? (
				<Login />
			) : (
				<div className='app'>
					{/* LeftSideBar */}
					<LeftSidebar />

					{/* Feeds */}
					<Feeds />

					{/* RightSidebar */}
					<RightSidebar />
				</div>
			)}
		</div>
	);
}

export default App;
