import { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get(`/api/blogs/${this.props.blogId}/posts`)
    .then( res => {
      const { posts } = this.state 
      this.setState({ posts: [...posts, res.data ]})
    })
  }
  
  render() {
    return(
      <>

      </>
    )
  }
}

export default Posts;