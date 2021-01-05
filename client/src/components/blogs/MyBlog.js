import BlogForm from './BlogForm';
import BlogList from './BlogList';
import { BlogConsumer } from '../../providers/BlogProvider';

const MyBlog = () => (
  <BlogConsumer>
    { value => (
      <>
        <h1>Blog</h1>
        <BlogForm addBlog={value.addBlog} />
        <BlogList blogs={value.blogs} />
      </>
    )}
  </BlogConsumer>
)

export default MyBlog;