import React, { Component } from 'react';
import PropTypes from 'prop-types'
import blogPost from './countrtTime.json';
import './App.css'

/**
* @author
* @class Timezone
**/

class Timezone extends Component {
    constructor(props){
        super();
        this.state = {
            Selectedcountry : "",
            Selectedtime : "",
            countrylist : []
         } 
    }

 componentDidMount(){
    this.countrySetup();
 }
 countrySetup = () => {
    this.setState({countrylist : blogPost.metaData},()=>{
        let id = blogPost.metaData[0];
        const utc = new Date().getTime() + (new Date().getTimezoneOffset() * 60000)
        this.setState({Selectedtime : (new Date(utc + (3600000*id.timeUtc)).toLocaleString())})
        this.setState({Selectedcountry : id.country})   
        
    });
 }
 countrySelector = (place) => {
    this.state.countrylist.forEach(e=>{
        if(place === e.country) {
            const utc = new Date().getTime() + (new Date().getTimezoneOffset() * 60000)
            let value = new Date(utc + (3600000*e.timeUtc)).toLocaleString();
            this.setState({Selectedtime : value})
            this.setState({Selectedcountry : place})
        }
    })
}

 render() {
  return(
    <div className="App">
    <div className="card shadow ">
      <div className="marginTop">
        <h3>Time Zone</h3>
      </div>
      <div className="marginTop">
            <button className="btnCountry" onClick={()=>this.countrySelector("India")}>India</button>
            <button className="btnCountry" onClick={()=>this.countrySelector("London")}>London</button>
            <button className="btnCountry" onClick={()=>this.countrySelector("Singapore")}>Singapore</button>
      </div>
      <div className="marginTop">
        The local time in {this.state.Selectedcountry} is {this.state.Selectedtime}.
      </div>
    </div>
   </div>
    )
   }
 }


Timezone.propTypes = {}
export default Timezone