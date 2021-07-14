import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
import GifIcon from '@material-ui/icons/Gif';
import MoodIcon from '@material-ui/icons/Mood';
import PhotoFilterIcon from '@material-ui/icons/PhotoFilter';
import PhotoIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import PollIcon from '@material-ui/icons/PollOutlined';
import ScheduleIcon from '@material-ui/icons/Schedule';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import FlipMove from 'react-flip-move';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { db } from '../Firebase/firebase';
import FeedBar from './FeedBar';
import './Feeds.css';
import Posts from './Posts/Posts';

function Feeds() {
	const [input, setInput] = useState('');
	const [posts, setPosts] = useState([]);

	const user = useSelector(selectUser);

	useEffect(() => {
		db.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		db.collection('posts').add({
			name: user.displayName,
			description: user.email,
			message: input,
			photoUrl: user.photoUrl || '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput('');
	};

	return (
		<header className='feed'>
			<div className='feed__title'>
				<h2>Home</h2>

				<div className='toptweet__icon'>
					<PhotoFilterIcon style={{ color: blue[500], fontSize: 30 }} />
				</div>
			</div>

			<div className='feed__tweet'>
				<Avatar src={user.photoUrl}> {user.email[0]} </Avatar>

				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Whats happening'
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</form>
			</div>

			<div className='feed__icons'>
				<div className='media__icons'>
					<FeedBar Icon={PhotoIcon} />
					<FeedBar Icon={GifIcon} />
					<FeedBar Icon={PollIcon} />
					<FeedBar Icon={MoodIcon} />
					<FeedBar Icon={ScheduleIcon} />
				</div>

				<div className='tweet__button'>
					<button>Tweet</button>
				</div>
			</div>

			<div className='background__color'></div>

			<div className='twitter__posts'>
				<FlipMove
					duration={300}
					easing='ease-out'
					enterAnimation='fade'
					leaveAnimation={null}
					typeName={null}
				>
					{posts.map(
						({ id, data: { name, description, message, photoUrl } }) => (
							<Posts
								key={id}
								name={name}
								description={description}
								message={message}
								photoUrl={photoUrl}
							/>
						)
					)}
				</FlipMove>
			</div>
		</header>
	);
}

export default Feeds;
