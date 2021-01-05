import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const BlogContext = React.createContext();

export const BlogConsumer = BlogContext.Consumer;

class BlogProvider extends Component {
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
    axios.put(`/api/blogs/${id}`, { blog })
    .then( res => {
      // update to the state
      const blogs = this.state.blogs.map( b => {
        if (b.id === id) {
          return res.data
        } 
        return b
      })
      this.setState({ blogs })
    })
    .catch( err => {
      console.log(err);
    })
  }

  deleteBlog = (id) => {
    // delete in the db
    axios.delete(`/api/blogs/${id}`)
    .then( res => {
      // delete in the state
      const { blogs } = this.state
        this.setState({ blogs: blogs.filter( b => b.id !== id)})
        window.location.href = '/myblog'
        // return <Redirect to='/myblog' />
    })
    .catch( err => {
      console.log(err);
    })
  }

  render() {
    return(
      <BlogContext.Provider value={{
        ...this.state,
        addBlog: this.addBlog,
        updateBlog: this.updateBlog,
        deleteBlog: this.deleteBlog,
      }}>
        { this.props.children }
      </BlogContext.Provider>
    )
  }
}

export default BlogProvider;