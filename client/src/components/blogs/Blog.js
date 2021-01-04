import { Component } from 'react';
import Posts from '../posts/Posts';

class Blog extends Component {
  
  render() {
    return(
      <Posts blogId={this.props.id} />
    )
  }
}

export default() Blog;