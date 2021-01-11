import { Grid } from 'semantic-ui-react';
import Post from './Post';

const PostList = ({posts, deletePost, blogId, updatePost}) => (
  <Grid columns={3}>
    {
      posts.map( p =>
        <Post 
          deletePost={deletePost}
          blogId={blogId}
          updatePost={updatePost}
          {...p}
        />
      )
    }
  </Grid>
)
  
export default PostList;