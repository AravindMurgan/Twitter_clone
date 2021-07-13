import { Avatar } from '@material-ui/core';
import ReplyIcon from '@material-ui/icons/Reply';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import React,{forwardRef} from 'react';
import './Posts.css';
import PostIcon from './PostIcon';

const Posts = forwardRef( ({ name, description, photoUrl, message,email },ref) => {
	return (
		<div >
		<div  ref={ref} className='post'>
				<div className='post__header'>
					<Avatar src={photoUrl}> {description[0]} </Avatar>
					<div className='post__info'>
						<h3> {name} </h3>
						<p> {description} </p>
					</div>
				</div>
				<div className='post__body'>
					<p> {message} </p>
				</div>

				<div className='post__buttons'>
					<PostIcon
						Icon={ReplyIcon}
                        number='125'
					/>
					<PostIcon Icon={AutorenewIcon} number='68' />
					<PostIcon Icon={FavoriteBorderIcon} number='300' />
					<PostIcon Icon={PresentToAllIcon}/>
				</div>
			</div>
		</div>
	);
});

export default Posts;