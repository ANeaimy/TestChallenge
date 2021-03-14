import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'
class Search extends Component {
    state = {  }
    render() { 
        return ( 
            <Input icon='search' placeholder='Search...' />
        );
    }
}
 
export default Search;