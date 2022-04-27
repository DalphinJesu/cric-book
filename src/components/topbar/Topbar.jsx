import React from 'react'
import "./topbar.css"
import {NotificationsSharp, Settings, Language} from '@material-ui/icons';
import {Link} from 'react-router-dom'

export default function Topbar() {
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className='topLeft'>
					{/* <span className="logo">IPL 2022</span> */}
					<Link to="/"><img src="https://www.iplt20.com/assets/images/ipl-logo-new-old.png" alt="" className="logoImg" /></Link>
				</div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<NotificationsSharp/>
						<span className="topIconBadge">5</span>
					</div>
					<div className="topbarIconContainer">
						<Settings/>
					</div>
					<div className="topbarIconContainer">
						<Language/>
					</div>
					<img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" alt="" className="topbarAvatar" />
				</div>
			</div>
		</div>
	)
}