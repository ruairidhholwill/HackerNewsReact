import React from "react"
import StoryList from './StoryList'

const Story = (props) => {
    const storyData = props.storiesData.map(story => {
        return <h3>{story.title}</h3>
    })

    return storyData
}

export default Story