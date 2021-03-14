import  React  , {Component} from 'react'
import {
    Grid,
    Header,
    Message,
  } from 'semantic-ui-react'
export class Home extends Component
{
render() {
    return (
        <Grid.Row>
        <Grid.Column>
          <Message>
            <Header as='h1'>Welcome to our test app!</Header>
            <p> Goto Compare page, select two cities/locations then you can view the different measurements.
            </p>
          </Message>
        </Grid.Column>
      </Grid.Row>
    );
}

}