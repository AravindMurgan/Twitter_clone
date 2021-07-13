import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../Firebase/firebase';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {

    const [name, setName] = useState('');
	const [profilePic, setProfilepic] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

    const loginToApp=(e)=>{
        e.preventDefault();
        
    }

    const register=()=>{
        if(!name){
            toast.error('Please Enter the name',{autoClose: 3000,})
        }
    }

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
