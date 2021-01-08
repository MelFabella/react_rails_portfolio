import { Component } from 'react';
import { Grid, Card, Image, Button } from 'semantic-ui-react';

class PostList extends Component {
  
  render() {
    const { posts, deletePost, blogId } = this.props
    return(
      <Grid columns={3}>
        {
        posts.map( p =>
          <Grid.Column>
            <Card>
              <Image src={p.pic} wrapped ui={false} size='medium' />
                <Card.Content>
                  <Card.Header>{p.title}</Card.Header>
                  <Card.Description>
                    {p.body}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button icon='trash' color='red' onClick={() => deletePost(blogId, p.id)} />
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        }
      </Grid>
    )
  }
}

export default PostList;