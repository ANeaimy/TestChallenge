import React, { Component } from 'react';
class Selection extends Component {
    state = {  }
    render() { 
        const {selectOptions, disabled, Title} = this.props.Source;
        const {onSelection} = this.props;
        return ( 
            <React.Fragment>
            <label>{Title}</label>
            <select onChange={onSelection} disabled={disabled}>
          <option value="-1" key="-1">Select a {Title}</option>
          {selectOptions.map((item, index) => {
        return(
          <option value={item.code} key={index}>
            {item.name}
          </option>
        )
      })}
        </select>
            </React.Fragment>
         );
    }
}
 
export default Selection;