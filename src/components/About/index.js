import  React  , {Component} from 'react'
import {
    Grid,
    Header,
    Message,
    List,
  } from 'semantic-ui-react'
export class About extends Component
{
render() {
    return (
        <Grid.Row>
        <Grid.Column>
          <Message>
            <Header as='h1'>About test app!</Header>
            <p>
              This app is a simple Air Quality Assessment Tool that uses React with semantic ui ( <a href='https://react.semantic-ui.com/'>https://react.semantic-ui.com/</a>) that utilizes Open AQ Platform API (<a href='https://docs.openaq.org/'>https://docs.openaq.org/</a>) It will have the ability to compare the Air Quality of two cities.
            </p>
          </Message>
          The tool must: 
        <List bulleted>
            <List.Item>Allow the user to input two cities</List.Item>
            <List.Item>Display the air quality of the corresponding cities, allowing the user to compare the two</List.Item>
            <List.Item>Gracefully handle any API or user errors</List.Item>
            <List.Item>Tool should be easily used by the general public</List.Item>
        </List>
        </Grid.Column>
      </Grid.Row>
    );
}

}