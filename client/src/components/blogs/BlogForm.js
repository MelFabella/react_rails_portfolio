import { Component } from 'react';
import { Form } from 'semantic-ui-react';

class BlogForm extends Component {
  state = { title: ''}

  componentDidMount() {
    if (this.props.id) {
      const { title } = this.props
      this.setState({ title })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { id, updateBlog, toggleEdit } = this.props
      updateBlog(id, this.state )
      toggleEdit()
    } else {
      this.props.addBlog(this.state)
    }
    this.setState({ title: '' })
  }

  render() {
    const { title } = this.state 
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='title' 
          value={title}
          onChange={this.handleChange}
          required
          label='Title'
        />
        <Form.Button>
          Submit
        </Form.Button>
      </Form>
    )
  }
}

export default BlogForm;