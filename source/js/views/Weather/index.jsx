import React, { Component, PropTypes } from 'react';
import Menu from 'components/Global/Menu';

export default class Weather extends Component {

  getAddress() {
    return new Promise(function (resolve, reject) {
        let location = localStorage.getItem('city');
        let city = location.substring(0, location.indexOf(','));
        let request = new XMLHttpRequest();
        let method = 'GET';
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&cnt=7' + '&APPID=f38b041a41b17dac7981d34f42a9c5af';
        let async = false;
        request.open(method, url, async);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    let data = JSON.parse(request.responseText);
                    console.log('Data',data);                    
                }
                else {
                    reject(request.status);
                }
            }
        };
        request.send();
    });
};

  render() {

    this.getAddress();

    const { children } = this.props;
    console.log(localStorage.getItem('city'));;

    return (
        <div className='Page'>
            Weather
        </div>
    );
  }
}
