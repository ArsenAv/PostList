import React from 'react';
import './Pool.css';
import { AiFillStar } from "react-icons/ai";
class Comments extends React.Component{
    render(){
        return(
            <>
            <ul>{this.props.comment.map(comment =>{
               return <li key ={comment.id} className = "comentli">{comment.text}<span className = "comentsspan"><AiFillStar className = "star"/> - {comment.rating}</span></li>
            })}
            </ul>
            
           </>
        )
    }
}
export default Comments;