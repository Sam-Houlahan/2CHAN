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
      <div className ="addpost">
        <h3> Add a message </h3>
      <form onSubmit={this.handleSubmit} >
      <label for = "title"> Title: </label><br/>
     
      <input type="text" value={this.state.title} placeholder ="Add your message title" name="title" onChange={this.handleChange} />
    <br/>
     <label for = "message"> Message: </label><br/>
      <textarea type="text" value={this.state.message} name="message" onChange={this.handleChange} />
     <br/>
      <input type="submit" value="Submit" className="btn btn-primary" />

      </form>
      </div>
    )
  }
}

export default AddPost
