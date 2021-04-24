import React from 'react';
import  './Leftsidebar.css';
import Sidebarmenu from './Sidebarmenu';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';


function LeftSidebar() {
    return (
        <div className='left__sidebar' >
            <div className="logo">
                <img src="https://cdn.usbrandcolors.com/images/logos/twitter-logo.svg" className='twitter__logo' alt=""/>
            </div>

            <div className="sidebar__menu">

                <Sidebarmenu Icon={HomeIcon} title='Home' />
                <Sidebarmenu Icon={ExploreIcon} title='Explore' />
                <Sidebarmenu Icon={NotificationsIcon} title='Notifications' />
                <Sidebarmenu Icon={MailOutlineIcon} title='Messages' />
                <Sidebarmenu Icon={BookmarkBorderIcon} title='Bookmarks' />
                <Sidebarmenu Icon={ListAltIcon} title='Lists' />
                <Sidebarmenu Icon={PersonIcon} title='Profile' />
                <Sidebarmenu Icon={MoreHorizIcon} title='More' />

                <button className='tweet__btn' >Tweet</button>
            </div>

            <div className="profile">
                <Avatar/>
                <b>Aravind Murugan</b>
                <p>@Aravind261296</p>
            </div>
        </div>
    )
}

export default LeftSidebar
