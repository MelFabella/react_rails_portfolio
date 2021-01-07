import { Component } from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

class PostList extends Component {
  
  render() {
    const { posts } = this.props
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
                {/* </Card.Content extra>
                  <a>
                    22 Friends
                  </a>
                </Card.Content> */}
              </Card>
            </Grid.Column>
          )
        }
      </Grid>
    )
  }
}

export default PostList;