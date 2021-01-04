import { Component } from 'react';
import axios from 'axios';
import BlogForm from './BlogForm';

class MyBlog extends Component {
  state = { blogs: []}

  componentDidMount() {
    // grab our menus from db
    axios.get('/api/blogs')
      .then( res => {
        // set to state
        this.setState({ blogs: res.data })
      })
      .catch( err => {
        console.log(err);
      })
  }

  addBlog = (blog) => {
    // add to the db
    axios.post('/api/blogs', { blog })
      .then(res => {
        // add to the state
        const { blogs } = this.state;
        this.setState({ blogs: [...blogs, res.data]})
      })
      .catch( err => {
        console.log(err);
      })
  }

  updateBlog = (id, blog) => {
    // update to the db
    // update to the state
  }

  deleteBlog = (id) => {
    // delete in the db
    // delete in the state
  }

  render() {
    return(
      <>
        <h1>Blog</h1>
        <BlogForm addBlog={this.addBlog} />
      </>
    )
  }
}

export default MyBlog;