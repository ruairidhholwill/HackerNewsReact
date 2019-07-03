import React, {Fragment} from "react"
import StoryList from './StoryList'

const Story = (props) => {
    const storyData = props.storiesData.map(story => {
        const ts = new Date(story.time*1000)
        console.log(ts)
        return(
            <Fragment>
            <li key={story.id}><a href={story.url}>{story.title}</a></li>
            <h4>{ts.toLocaleString()}</h4>
            </Fragment>
        )
    })

    return (<ul>{storyData}</ul>)
}

export default Story