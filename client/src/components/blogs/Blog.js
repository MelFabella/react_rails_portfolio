import { Component } from 'react';
import Posts from '../posts/Posts';
import axios from 'axios';
import { BlogConsumer } from '../../providers/BlogProvider';
import { Button, Icon } from 'semantic-ui-react';
import BlogForm from './BlogForm';

class Blog extends Component {
  state = { id: 0, title: '', created_at: '', updated_at: '', editing: false }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/blogs/${id}`)
      .then( res => {
        this.setState({ ...res.data })
      })
      .catch( err => {
        console.log(err);
      });
  }

  toggleEdit = () => {
    const { editing } = this.state 
    this.setState({ editing: !editing })
  }

  render() {
    const { id, title, updated_at, editing } = this.state
    const { deleteBlog, updateBlog } = this.props
    let blogId = this.props.match.params.id
    return(
      <>
        <h1>{title}</h1>
        <h5>{updated_at}</h5>
        <Button icon color = 'red' onClick={() => deleteBlog(id)}>
          <Icon name='trash' />
        </Button>
        { 
          editing ? 
            <BlogForm 
              id={id}
              title={title}
              toggleEdit={this.toggleEdit}
              updateBlog={updateBlog}
            />
          :
          <Button icon color='yellow' onClick={() => this.toggleEdit()}>
            <Icon name='pencil' />
          </Button>
        }
        <Posts blogId={blogId} />
      </>
    )
  }
}

const ConnectedBlog = (props) => (
  <BlogConsumer>
    { value => (
      <Blog 
        {...props}
        deleteBlog={value.deleteBlog}
        updateBlog={value.updateBlog}
      />
    )}
  </BlogConsumer>
)

export default ConnectedBlog;