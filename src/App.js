import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feeds from './component/Feeds/Feeds';
import { auth } from './component/Firebase/firebase';
import LeftSidebar from './component/leftSidebar/Leftsidebar';
import Login from './component/Login/Login';
import RightSidebar from './component/rightSidebar/RightSidebar';
import { login, logout } from './features/userSlice';

function App() {
	const user = useSelector((state) => state.user.user);
	const dispatch = useDispatch();
	
	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				//user logged in
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				);
			} else {
				//user is logged out//
				dispatch(logout());
			}
		});
	}, []);
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
