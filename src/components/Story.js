import React from "react"
import StoryList from './StoryList'

const Story = (props) => {
    const storyData = props.storiesData.map(story => {
        return(
            <div>
            <li key={story.id}><a href={story.url}>{story.title}</a></li>
            <h4>{story.score}</h4>
            </div>
        )
    })

    return (<ul>{storyData}</ul>)
}

export default Story