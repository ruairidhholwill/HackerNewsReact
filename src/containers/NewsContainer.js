import React, {Component} from "react"
import StoryList from '../components/StoryList'

class NewsContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            stories: []
        }
    }

    componentDidMount() {
        fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
          .then(res => res.json())
          .then((data) => {
            const newData = data.slice(0, 10);
            const promises = newData.map((id) => {
              return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then(res => res.json());
            });
     
            Promise.all(promises)
            .then((results) => {
                this.setState({ stories: results });
              });
          });
        }

    render(){
        return <StoryList stories = {this.state.stories}/>
    }

}

export default NewsContainer;