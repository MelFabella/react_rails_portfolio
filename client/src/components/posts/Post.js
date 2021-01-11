import { Component } from 'react';
import { Grid, Card, Image, Button, Modal } from 'semantic-ui-react';
import PostForm from './PostForm';

class Post extends Component {
  state = { open: false }

  setOpen = (val) => this.setState({ open: val})

  render() {
    const { deletePost, blogId, id, pic, title, body } = this.props
    const { open } = this.state 
    return (
      <Grid.Column>
            <Card>
              <Image src={pic} wrapped ui={false} size='medium' />
                <Card.Content>
                  <Card.Header>{title}</Card.Header>
                  <Card.Description>
                    {body}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button icon='trash' color='black' onClick={() => deletePost(blogId, id)} />
                    <Modal
                      onClose={() => this.setOpen(false)}
                      onOpen={() => this.setOpen(true)}
                      open={open}
                      trigger={<Button icon='pencil' color='black' />}
                    >
                       <Modal.Header>Edit Blog Post</Modal.Header>
                       <Modal.Content >
                         <Modal.Description>
                            <PostForm 
                              setOpen={this.setOpen}                         
                              {...this.props}                 
                            />
                          </Modal.Description>
                        </Modal.Content>
                    </Modal>
                </Card.Content>
              </Card>
           </Grid.Column>
    )
  }
}

export default Post;