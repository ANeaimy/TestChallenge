import React from 'react'
import Navigation from '../Navigation'
import {
  Grid,
  Header,
} from 'semantic-ui-react'

const HeadBar = () => (
  <Grid container style={{ padding: '0em 0em' }}>
    <Grid.Row>
      <Grid.Column>
        <Navigation></Navigation>        
        <Header as='h1' dividing>
          Air Quality Assesment Tool
        </Header>

      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default HeadBar