import React, { Component, PropTypes } from 'react';
import Menu from 'components/Global/Menu';

export default class Weather extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: localStorage.getItem('city') || ''
    }

  }

  handleChange = (event) => {

    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    if(this.state.value == '' || this.state.value == 'City' || this.state.value == undefined) {
      alert('Please write any city');
      event.preventDefault();
      return false;
    } else {
      alert('A name was submitted: ' + this.state.value);
      localStorage.setItem('city',this.state.value);
      this.props.router.push('/weather')
      event.preventDefault();
    }
  }

  getGeolocation() {

    let _this = this;

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(_this.showPosition.bind(this));
    }
  }

  showPosition(position) {
      
      //set loading

      this.getAddress(position.coords.latitude , position.coords.longitude).catch((message) => {
        
        // end loading

      }).then((address) => {

        // end loading

        console.log(address);
        this.setState({value: address});
        localStorage.setItem('city',this.state.value);
        this.props.router.push('/weather',);

      });
  }

  getAddress(latitude, longitude) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        var method = 'GET';
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true&language=en&region=US';
        var async = false;
        request.open(method, url, async);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    var data = JSON.parse(request.responseText);
                    var address = data.results;
                    
                    for (var i = 0, len = address.length; i < len; i++) {
                        var ac = address[i];

                        if (ac.types.indexOf("locality") >= 0 && ac.types.indexOf("political") >= 0){
                          resolve(ac.formatted_address);
                          return;
                        }
                    }
                    
                    reject("Your location isn't supported. Sorry");
                }
                else {
                    reject(request.status);
                }
            }
        };
        request.send();
    });
};


  render(){
    const { children } = this.props;

    return (
          <fieldset className='city-search'>
            <div className='search-form'>
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder='City' value={this.state.value} onChange={this.handleChange}/>
                <button><i className="material-icons">&#xE8B6;</i></button>
              </form>
            </div>  
            <p className="location-info">use my <span onClick={this.getGeolocation.bind(this)}>current location</span></p>
          </fieldset>
    );
  }
}
