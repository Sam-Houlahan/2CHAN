import React from 'react'

class AddPost extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    // alert('A Post was submitted: ' + this.state.value)
    const post = {
      title: this.state.title,
      message: this.state.message
    }
    this.props.addPost(post)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
      Title:<br />
          <input type='text' value={this.state.title} name='title' onChange={this.handleChange} />
        </label><br />
        <label>
      Message:<br />
          <textarea type='text' value={this.state.message} name='message' onChange={this.handleChange} />
        </label><br />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default AddPost
