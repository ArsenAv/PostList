import React from 'react';
import '../Posts/Pool.css';
import { AiFillStar } from "react-icons/ai";

class ListElements extends React.Component{
    
    render(){
        return(
            <div>
                <span>
                {this.props.post.title}
                </span>
                <ul>
                   {this.props.post.comments.map(comment =>{
                     return  <li key ={comment.id} className = "comentli">{comment.text}<span className = "comentsspan"><AiFillStar className = "star"/> - {comment.rating}</span></li>
                   })}
                </ul>
            </div> 
        )
    }
}
export default ListElements;