import React from 'react';
import ListElements from './ListElements';
import './List.css';

class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {posts:[]}
        this.addToList = this.addToList.bind(this)
        this.removeFromList = this.removeFromList.bind(this)
    }
    addToList(){
        const lastFreePost = this.props.useLastPost()
        if (lastFreePost !== null){
            let posts = [...this.state.posts]
            posts.push(lastFreePost)
            this.setState({posts:posts})
        }
    }
    removeFromList(){
        this.props.freeLastPost()
        let posts = [...this.state.posts]
        if (posts.length > 0){
            posts.pop()
            this.setState({posts:posts})
        }
    }
    render(){
      
        return(
            <div className = "ListDiv">
                {
                    this.state.posts.map(post => {
                            return <ListElements post ={post} key = {post.id}/>
                    })
                }
                <button onClick = {this.addToList}>+</button>
                <button onClick = {this.removeFromList}>-</button>
            </div>
        )
    }
}
export default List;