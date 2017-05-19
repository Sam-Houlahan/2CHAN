import React from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import List from './List'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
      posts:[
        {title: ''},
        {message: ''},
        {comments:['']}
      ],

    }
  }

addPost(post) {
  const newPosts = [].concat(this.state.posts)
  newPosts.push(post)
  this.setState({
    posts:newPosts
    })
  }

render() {
  return (
<Router>
  <div>
    <AddPost content = {this.addPost} />
    <List />
  </div>
   </Router>
    )
  }
}
export default App

