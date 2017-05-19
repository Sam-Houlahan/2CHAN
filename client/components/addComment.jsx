import React from 'react'

class AddComment extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.match.params.title,
      comment: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    const comment = {
      comment: this.state.comment
    }
    this.props.addComment(this.state.title, comment)
  }

  render () {

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
      Comment:<br />
          <textarea type='text' value={this.state.comment} name='comment' className="form-control" onChange={this.handleChange} />
        </label><br />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default AddComment
