import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import Selection from '../Selection';
import MeasurementDetails from '../MeasurementDetails';

class SearchForm extends Component {
    state = { 
        Countries:{id:1,selectOptions:[],Title:"Country",disabled:false},
        Cities :{id:2,selectOptions:[],Title:"City/Region",disabled:true},
        CurrentSelection:{Country:"",City:""}, 
        Measurements:"",
        API_URL :"https://api.openaq.org/"
     }
     handleCountry = (event) => 
     {
        this.getCitiesList(event.target.value);
        this.setState({  CurrentSelection :{Country:event.target.value,City:""}});
     }
     handleCity = (event) =>
     {
        let CurrentSelection = this.state.CurrentSelection;
        CurrentSelection.City = event.target.value;
        this.setState({CurrentSelection});
        this.getCountryStatistics(CurrentSelection);
     };
     getCountriesList() {
        const url = this.state.API_URL;
        fetch(`${url}v1/countries`)
          .then(response => response.json())
          .then(data => {
            this.setState({ Countries: {id:1,selectOptions:data.results,Title:"Country",disabled:false} });
          });
      }
      getCitiesList(country) {
        const url = this.state.API_URL;
        fetch(`${url}v2/cities?country=${country}`)
          .then(response => response.json())
          .then(data => {
            this.setState({  Cities :{id:2,selectOptions:data.results.map(c=> ({code:c.city, name:c.city})),Title:"City/Region",disabled:false} });
          });
      }
    getCountryStatistics(curentSelection) {
      if(curentSelection.Country === '-1' || curentSelection.Country === undefined) return;
      if(curentSelection.City === '-1' || curentSelection.City === undefined) return;
      const url = this.state.API_URL;
      fetch(`${url}v1/measurements?country=${curentSelection.Country}&city=${curentSelection.City}&parameter[]=co&parameter[]=pm25`)
        .then(response => response.json())
        .then(data => {
          this.setState({ Measurements: data.results[0] });
          
      });
    }
     componentDidMount()
     {
        this.getCountriesList();
     };

    render() { 
        return ( 
            <Form>  
            <Form.Field>
                <Selection key={this.state.Countries.id} Source={this.state.Countries} onSelection={this.handleCountry}></Selection>
            </Form.Field>
            <Form.Field>
                <Selection key={this.state.Cities.id} Source={this.state.Cities} onSelection={this.handleCity}></Selection>
            </Form.Field>           
            {(this.state.Measurements !== "" )? <MeasurementDetails data={this.state.Measurements}/>:""}
          </Form>

         );
    }
}


export default SearchForm;