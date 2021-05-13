import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.less';

export default class extends React.Component {
  render() {
    return (
      <div className="Header">
        <NavLink exact to="/" activeClassName="selected" activeStyle={{ color: 'red' }}>home</NavLink>
        {'  '}
        <NavLink exact to="/counter" activeClassName="selected" activeStyle={{ color: 'red' }}>Counter</NavLink>
      </div>
    );
  }
}
