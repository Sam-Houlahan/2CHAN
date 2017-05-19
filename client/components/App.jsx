import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import List from './List'
import AddPost from './AddPost'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [
        {title: '',
          message: '',
          comments: ['']}
      ]

    }
    this.addPost = this.addPost.bind(this)
  }

  addPost (post) {
    console.log(post)
    const newPosts = [].concat(this.state.posts)
    newPosts.push(post)
    this.setState({
      posts: newPosts
    })
    console.log(newPosts)
  }

  render () {
    return (
      <Router>
        <div>
          <AddPost addPost={this.addPost} />
          <List />
        </div>
      </Router>
    )
  }
}
export default App
