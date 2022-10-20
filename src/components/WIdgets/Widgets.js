import { Search } from "@mui/icons-material"
import React from "react"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed"
import "./Widgets.css"

const Widgets = () => {
    return(
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"1307046632517664771"} />
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="atharvabrand"
                options={{height:400}} />

                <TwitterShareButton
                url={"https://twitter.com/timtronic_"}
                options={{text:"React Developer"}}
                />
            </div>
        </div>
    )
}

export default Widgets