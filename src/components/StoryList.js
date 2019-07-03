import React from "react"
import Story from './Story'

const StoryList = ({stories}) => {
    if (!stories) return null

    const storiesData = stories.map((story) => {
        return {
            id: story.id,
            title: story.title,
            username: story.by,
            url: story.url,
            time: story.time,
            score: story.score

        }
    })

    return (<Story storiesData={storiesData}/>)
}

export default StoryList