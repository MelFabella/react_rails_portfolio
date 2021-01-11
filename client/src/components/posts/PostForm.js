import { Component } from 'react';
import { Form } from 'semantic-ui-react';

class PostForm extends Component {
  state = { title: '', body: '', pic: '' }

  componentDidMount() {
    if (this.props.id) {
      const { title, body, pic } = this.props
      this.setState({ title, body, pic })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { body } = this.state
    this.setState({ body: (body) })
    if (this.props.id) {
      const { blogId, updatePost, id, setOpen } = this.props
      updatePost(blogId, id, this.state)
      setOpen(false)
    } else {
      const { addPost, blogId } = this.props
      addPost(blogId, this.state)
    }
    this.setState({ title: '', body: '', pic: '' })
  }

  render() {
    const { title, body, pic } = this.state 
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='title'
          value={title}
          onChange={this.handleChange}
          required
          label='Title'
        />
        <Form.Input
          name='body'
          value={body}
          onChange={this.handleChange}
          required
          label='Body'
          // type="text" 
          // step="0.01"
        />
        <Form.Input
          name='pic'
          value={pic}
          onChange={this.handleChange}
          required
          label='Picture'
        />
        <Form.Button>
          Submit
        </Form.Button>
      </Form>
    )
  }
}

export default PostForm;