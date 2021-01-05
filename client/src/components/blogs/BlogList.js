import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => (
  <List divided relaxed>
    { blogs.map( b => 
      <List.Item>
        <List.Icon name='blogger' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header>
            <Link to={`/blog/${b.id}`}>
              {b.title}
            </Link>
          </List.Header>
          <List.Description as='a'>{b.updated_at}</List.Description>
        </List.Content>
      </List.Item>
    )}
  </List>
)

export default BlogList;