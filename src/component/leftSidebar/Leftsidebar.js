import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ExploreIcon from '@material-ui/icons/Explore';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../Firebase/firebase';
import './Leftsidebar.css';
import Sidebarmenu from './Sidebarmenu';

function LeftSidebar() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const onClick=()=>{
		dispatch(logout());
		auth.signOut();
	}
	return (
		<div className='left__sidebar'>
			<div className='logo'>
				<img
					src='https://cdn.usbrandcolors.com/images/logos/twitter-logo.svg'
					className='twitter__logo'
					alt=''
				/>
			</div>

			<div className='sidebar__menu'>
				<Sidebarmenu Icon={HomeIcon} title='Home' />
				<Sidebarmenu Icon={ExploreIcon} title='Explore' />
				<Sidebarmenu Icon={NotificationsIcon} title='Notifications' />
				<Sidebarmenu Icon={MailOutlineIcon} title='Messages' />
				<Sidebarmenu Icon={BookmarkBorderIcon} title='Bookmarks' />
				<Sidebarmenu Icon={ListAltIcon} title='Lists' />
				<Sidebarmenu Icon={PersonIcon} title='Profile' />
				<Sidebarmenu Icon={MoreHorizIcon} title='More' />

				<button className='tweet__btn'>Tweet</button>
			</div>

			<div className='profile'>
				<div className='avatar__icon'>
					<Avatar src={user.photoUrl}>{user.email[0]} </Avatar>
				</div>

                <div className="profile__name">
                <b>{user.displayName} </b>
				<p>{user.email} </p>
                </div>
                
				<div onClick={onClick} >
				<MoreHorizIcon />
				</div>
                
				
			</div>
		</div>
	);
}

export default LeftSidebar;
