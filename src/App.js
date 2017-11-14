import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

import classnames from 'classnames';

export default class App extends Component {
  

  render() {
    return (
      <div>
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
          <Container text>
            <Header as='h1' inverted style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}>
              Thomas Northall-Little
            </Header>
            <Header as='h2' inverted style={{ fontSize: '1.7em', fontWeight: 'normal' }}>
            Do whatever you want when you want to.
            </Header>
          </Container>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>

              <Grid.Column floated='left' width={6}>
                <Header as='h3' style={{ fontSize: '2em' }}>Header</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Short Text
                </p>
              </Grid.Column>

              <Grid.Column floated='right' width={6}>
                <Header as='h3' style={{ fontSize: '2em' }}>Header</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Image ?
                </p>
               
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Button</Button>
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>Break One</Header>
                <p style={{ fontSize: '1.33em' }}>Minor</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>Break Two</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Minor 
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>Grid Break</Header>
            <p style={{ fontSize: '1.33em' }}>
              Attention grabber
            </p>
            <Button as='a' size='large'>Read More</Button>

            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>Break with Link</a>
            </Divider>

            <Header as='h3' style={{ fontSize: '2em' }}>etc</Header>
            <p style={{ fontSize: '1.33em' }}>
              Another grabber
            </p>
            <Button as='a' size='large'>I'm Still Quite Interested</Button>
          </Container>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>1</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Other</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>More.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}