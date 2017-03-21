import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';

export default class Menu extends Component {

  render() {
    return (
      <div className='Menu'>
        <IndexLink to={ routeCodes.DASHBOARD }>
          Dashboard
        </IndexLink>
        <Link to={ routeCodes.WEATHER }>
          Weather
        </Link>
      </div>
    );
  }
}
