import React from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import List from './List'
import AddPost from './AddPost'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts:[
        {title: 'hello',
        message: 'testing',
        comments:[ ]
        }
      ],
    }
    this.addPost = this.addPost.bind(this)
    this.addComment = this.addComment.bind(this)
  }
  
addPost(post) {

  const newPosts = [].concat(this.state.posts)
  newPosts.push(post)
  this.setState({
    posts: newPosts
    })

  }

  addComment (title, comment) {
    let position
    for (i = 0; i <this.state.posts; i++){
      if (this.state.posts[i] === title){
        position = i
      }
    }

      let x =  this.state.posts[position].comments.push(comment)
      this.setState({
        posts: x
      })
  }

 

render() {
  return (
<Router>
  <div>
    <AddPost addPost = {this.addPost} />
    <List list = {this.state.posts} />
  </div>
   </Router>
    )
  }
}
export default App
