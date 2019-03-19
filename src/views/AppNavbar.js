import React, {Component} from 'react'
import {Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap'

class AppNavbar extends Component {
  state = {isOpen: false}
  toggle = () => this.setState({isOpen: !this.state.isOpen})
  render() {
  return <>
    <Navbar dark color='dark' expand='sm' className='mb-5'>
      <NavbarBrand href='/'>Shopping Planner</NavbarBrand>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse navbar isOpen={this.state.isOpen}>
        <Nav navbar className='ml-auto' >
          <NavItem>
            <NavLink href='https://github.com/shinesincere'>Github</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </>
  }
}

export default AppNavbar