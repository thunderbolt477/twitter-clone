import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import {Twitter, Home, Search, NotificationsNone, MailOutline, BookmarkBorder, ListAlt, PermIdentity, MoreHoriz} from "@mui/icons-material"
import { Button } from "@mui/material"


const Sidebar = () => {
    return(
        <div className="sidebar">
            <Twitter className="sidebar__twitterIcon" />
            <SidebarOption Icon={Home} text="Home" active={true}/>
            <SidebarOption Icon={Search} text="Explore"/>
            <SidebarOption Icon={NotificationsNone} text="Notifications"/>
            <SidebarOption Icon={MailOutline} text="Messages"/>
            <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
            <SidebarOption Icon={ListAlt} text="Lists" />
            <SidebarOption Icon={PermIdentity} text="Profile" />
            <SidebarOption Icon={MoreHoriz} text="More" />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
        </div>
    )
}

export default Sidebar