import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
import GifIcon from '@material-ui/icons/Gif';
import MoodIcon from '@material-ui/icons/Mood';
import PhotoFilterIcon from '@material-ui/icons/PhotoFilter';
import PhotoIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import PollIcon from '@material-ui/icons/PollOutlined';
import ScheduleIcon from '@material-ui/icons/Schedule';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../Firebase/firebase';
import FeedBar from './FeedBar';
import './Feeds.css';
import Posts from './Posts/Posts';
import firebase from 'firebase';


function Feeds() {
	 const [input,setInput]=useState('');
	 const [posts,setPosts]= useState([]);

	 useEffect(()=>{
		db.collection('posts')
		.orderBy('timestamp','desc')
		.onSnapshot((snapshot)=>(
			setPosts(snapshot.docs.map(doc=>(
				{
					id:doc.id,
					data:doc.data(),

				}
			)))
		))
	 },[])

	const handleSubmit=(e)=>{
		e.preventDefault();

		db.collection('posts')
			.add({
			name:'Aravind M',
			description:'test',
			message: input,
			photoUrl:'',
			timestamp:firebase.firestore.FieldValue.serverTimestamp()

		})
		console.log(input);
		setInput('')
		
	}

	return (
		<header className='feed'>
			<div className='feed__title'>
				<h2>Home</h2>

				<div className='toptweet__icon'>
					<PhotoFilterIcon style={{ color: blue[500], fontSize: 30 }} />
				</div>
			</div>

			<div className='feed__tweet'>
				<Avatar />
				<form onSubmit={handleSubmit} >
					<input type="text" placeholder='Whats happening' value={input} onChange={(e)=> setInput(e.target.value) } />
					
				</form>
			</div>

			<div className='feed__icons'>
                <div className="media__icons">
                <FeedBar Icon={PhotoIcon} />
				<FeedBar Icon={GifIcon} />
				<FeedBar Icon={PollIcon} />
				<FeedBar Icon={MoodIcon} />
				<FeedBar Icon={ScheduleIcon} />
                </div>
				

				<div className='tweet__button'>
					<button >Tweet</button>
				</div>
			</div>

			<div className='twitter__posts' >
				{
					posts.map(({id,data:{name,description,message,photoUrl}})=>(
						<Posts
						key={id}
						name={name}
						description={description}
						message={message}
						photoUrl={photoUrl}
						/>
					))
				}
				
			</div>
		</header>
	);
}

export default Feeds;