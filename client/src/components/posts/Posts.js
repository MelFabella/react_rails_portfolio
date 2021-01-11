import { Component } from 'react';
import { PostConsumer } from '../../providers/PostProvider';
import PostForm from './PostForm';
import PostList from './PostList';

class Posts extends Component {
  componentDidMount() {
    const { getAllBlogPost, blogId } = this.props 
    getAllBlogPost(blogId)
  }
  
  render() {
    const { blogId, addPost, posts, deletePost, updatePost } = this.props
    return(
      <>
        <PostForm 
          blogId={blogId}
          addPost={addPost}
        />
        <PostList  
          blogId={blogId}
          posts={posts}
          deletePost={deletePost}
          updatePost={updatePost}
        />
      </>
    )
  }
} 

const ConnectedPosts = (props) => (
  <PostConsumer>
   { value =>
    <Posts 
      {...value}
      {...props}
    />
   } 
  </PostConsumer>
)

export default ConnectedPosts;