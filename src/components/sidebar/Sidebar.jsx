import React from 'react'
import "./sidebar.css"
import {Home, Assessment, Group, ViewModule, TableChart} from "@material-ui/icons";
import {NavLink} from "react-router-dom";

export default function Sidebar() {
  return (
	<div className="sidebar">
		<div className="sidebarWrapper">
			<div className="sidebarMenu">
				<h3 className="sidebarTitle">
					Dashboard
				</h3>
				<ul className="sidebarList">
					<li className="sidebarListItem"><NavLink to="/" activeClassName="active"><Home className="sidebarIcon"/>Home</NavLink></li>
					<li className="sidebarListItem"><NavLink to="/statistics" activeClassName="active"><Assessment className="sidebarIcon"/>Statistics</NavLink></li>
				</ul>
			</div>
			<div className="sidebarMenu">
				<h3 className="sidebarTitle">
					Quick Menu
				</h3>
				<ul className="sidebarList">
					<li className="sidebarListItem"><NavLink to="/teams" activeClassName="active"><Group className="sidebarIcon"/>Teams</NavLink></li>
					<li className="sidebarListItem"><NavLink to="/matches" activeClassName="active"><ViewModule className="sidebarIcon"/>Matches</NavLink></li>
					<li className="sidebarListItem"><NavLink to="/points-table" activeClassName="active"><TableChart className="sidebarIcon"/>Points Table</NavLink></li>
				</ul>
			</div>
		</div>
	</div>
  )
}
