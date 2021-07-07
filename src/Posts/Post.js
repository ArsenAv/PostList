import React from 'react';
import Comments from './Coments';
import './Pool.css';

class Post extends React.Component{
    render(){
        return(
            <div>
            
                <span>
                {this.props.posttitle}
                </span>
                
                <Comments comment = {this.props.post.comments} key = {this.props.post.comments.id}/>
            
            </div>
        )
    }
}
export default Post;