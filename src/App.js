import React from 'react';
import './App.css';
import Pool from './Posts/Pool';
import List from './Lists/List';

class App extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            postsArr: this.postsArr
        }
        this.useLastPost = this.useLastPost.bind(this)
        this.freeLastPost = this.freeLastPost.bind(this)
    }
    postsArr = [
        {id: 1, used: false, title: "Text1", comments:[{id:1, text:"comment1", rating: "5"}]}, 
        {id: 2, used: false, title: "Text2", comments:[{id:2, text:"comment3", rating: "1"}, {id:3, text:"comment4" ,rating: "4"}]}, 
        {id: 3, used: false, title: "Text3", comments:[]}
    ];
    useLastPost() {
        for(let i = this.state.postsArr.length - 1; i >= 0; i--){
            if(this.state.postsArr[i].used === false){
                let postsArr = [...this.state.postsArr];
                postsArr[i].used = true;
                this.setState({
                    postsArr:postsArr
                })
                return this.state.postsArr[i]
            }
        }
        return null
    }
    freeLastPost() {
        for(let i = 0; i < this.state.postsArr.length; i++){
            if(this.state.postsArr[i].used === true){
                let postsArr = [...this.state.postsArr]
                postsArr[i].used = false;
                this.setState({
                    postsArr:postsArr
                })
                break;
            }
        }
    }
    render(){
        return (
            <div className = "divroot">
                <Pool postsArr = {this.state.postsArr}/>
                <div className = "Lists">
                <List postsArr = {this.state.postsArr} useLastPost = {this.useLastPost} freeLastPost = {this.freeLastPost}/>
                <List postsArr = {this.state.postsArr} useLastPost = {this.useLastPost} freeLastPost = {this.freeLastPost}/>
                </div>
                
            </div>
        
        )
    }
}

export default App;
