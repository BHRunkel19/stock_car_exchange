import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component{
  render() {
    return (
      <div classname="nav_container">
        <div classname="navigation_dropdown">

          <NavLink activeClassName="selected" className="nav-link" exact-to="/">
            <div className="link_box">Home</div>
          </NavLink>

          <NavLink activeClassName="selected" className="nav-link" exact-to="/myaccount">
            <div className="link_box">My Account</div>
          </NavLink>

          <NavLink activeClassName="selected" className="nav-link" exact-to="/trending">
            <div className="link_box">Trending</div>
          </NavLink>

          <NavLink activeClassName="selected" className="nav-link" exact-to="/watching">
            <div className="link_box">Watching</div>
          </NavLink>

          <NavLink activeClassName="selected" className="nav-link" exact-to="/search">
            <div className="link_box">Search</div>
          </NavLink>

          <NavLink activeClassName="selected" className="nav-link" exact-to="/sell">
            <div className="link_box">Sell</div>
          </NavLink>

          <NavLink activeClassName="selected" className="nav-link" exact-to="/help">
            <div className="link_box">Help</div>
          </NavLink>

        </div>

        {this.props.children}

      </div>
    )
  }
}