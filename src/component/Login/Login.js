import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../features/userSlice';
import { auth } from '../Firebase/firebase';
import './Login.css';

function Login() {
	const [name, setName] = useState('');
	const [profilePic, setProfilepic] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const loginToApp = (e) => {
		e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profileUrl:userAuth.user.photoURL
            }))
        })
        .catch((err)=>{
            toast.error('Login failed')
            console.log(err.message);
        })
	};

	const register = () => {
		if (!name) {
			toast.error('Please Enter the name', { autoClose: 3000 });
		}

		auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
			userAuth.user
				.updateProfile({
					displayName: name,
					photoURL: profilePic,
				})
				.then(() => {
					dispatch(
						login({
							email: userAuth.user.email,
							uid: userAuth.user.uid,
                            displayName:name,
                            photoUrl:profilePic
						})
					);
				});
		})
        .catch((err)=>{
            toast.error('Registration failed')
            console.log(err.message);
        })
	};

	return (
		<div className='login'>
			<ToastContainer />
			<img
				src='https://cdn.usbrandcolors.com/images/logos/twitter-logo.svg'
				className='twitter__logo'
				alt=''
			/>

			<form>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Full name (required if registering)'
				/>
				<input
					type='text'
					value={profilePic}
					onChange={(e) => setProfilepic(e.target.value)}
					placeholder='Placeholder pic URL (optional)'
				/>
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Email'
				/>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Password'
				/>
				<button type='submit' onClick={loginToApp}>
					Sign In
				</button>
			</form>
			<p>
				Not a memeber?{' '}
				<span className='login__regitser' onClick={register}>
					Register Now !
				</span>
			</p>
		</div>
	);
}

export default Login;
