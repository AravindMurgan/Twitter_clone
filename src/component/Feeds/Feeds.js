import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
import GifIcon from '@material-ui/icons/Gif';
import MoodIcon from '@material-ui/icons/Mood';
import PhotoFilterIcon from '@material-ui/icons/PhotoFilter';
import PhotoIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import PollIcon from '@material-ui/icons/PollOutlined';
import ScheduleIcon from '@material-ui/icons/Schedule';
import React from 'react';
import FeedBar from './FeedBar';
import './Feeds.css';
import Posts from './Posts/Posts'
function Feeds() {

	const handleSubmit=(e)=>{
		e.preventDefault();
		console.log(e.target.value);
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
					<input type="text" placeholder='Whats happening' />
					
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
				<Posts />
			</div>
		</header>
	);
}

export default Feeds;