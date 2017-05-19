import React from 'react'

class AddComment extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.match.params.title,
      comment: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
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
          <textarea type='text' value={this.state.comment} name='comment' />
        </label><br />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default AddComment
