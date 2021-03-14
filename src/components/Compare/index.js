import  React  , {Component} from 'react'
import  SearchForm from '../SearchForm'
import { Divider, Grid, Segment } from 'semantic-ui-react'


export class Compare extends Component
{
render() {
    return (      
    <React.Fragment>
    <Segment placeholder>
        <Grid columns={2} relaxed='very'>
          <Grid.Column >
          <SearchForm></SearchForm>
          </Grid.Column>
          <Grid.Column >
          <SearchForm></SearchForm>
          </Grid.Column>
        </Grid>
        <Divider vertical>VS</Divider>
      </Segment>
    </React.Fragment>
   );
}

}