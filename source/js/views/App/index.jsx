import React, { Component, PropTypes } from 'react';
import Menu from 'components/Global/Menu';


export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }


  render() {
    const { children } = this.props;
    console.log('App');

    return (
      <div className='App'>
        <Menu />

        <div className="content">
          <div className='Page'>
            { children }
          </div>
        </div>
      </div>
    );
  }
}
