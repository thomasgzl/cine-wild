import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../img/logo.png'

export default class Navigate extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar className="nav" light>
          <NavbarBrand href="/" className="mr-auto"> <img className="logo" src={logo} alt="logo" /> </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link className="links" to="/add">Add</Link>
              </NavItem>
              <NavItem>
                <Link className="links" to="/films">Films</Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://twitter.com/realDonaldTrump" target="_blank"> <i class="fab fa-twitter"></i> </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}