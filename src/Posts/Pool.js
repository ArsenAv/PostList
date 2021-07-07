
import React from 'react';
import Post from './Post';
import './Pool.css';

class Pool extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {
            serchFiled: ""
        }
    }
    handlechange = (event) =>{
        const serchword = event.target.value;
        this.setState({serchFiled: serchword});
    }
    render(){
     const filtredPosts = this.props.postsArr.filter(post =>{
         return post.title.toLowerCase().includes(this.state.serchFiled.toLowerCase());
         })
       return(
        <div className = "poolDiv">
            <input className = "poolInput" placeholder = "SerchPosts" type = "text" onChange = {this.handlechange}/>
             <ul className = "poolposts">{filtredPosts.filter(post => post.used === false).map(post =>{
                return <Post post = {post} key= {post.id} posttitle = {post.title}/>;
             })}</ul>
        </div>
        )
    }
}
export default Pool;