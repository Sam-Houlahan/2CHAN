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

  handleChange(event) {
     this.setState({[event.target.name]: event.target.value});
   }

  handleSubmit(event) {
    event.preventDefault();
   
      const post = { title:this.state.title, message:this.state.message}


         this.props.addPost(post);
       
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
      <label>
      Title:
      <input type="text" value={this.state.title} name="title" onChange={this.handleChange} />
      </label>
      <label>
      Message:
      <input type="text" value={this.state.message} name="message" onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />

      </form>
    )
  }
}

export default AddPost
