import React, {Component} from 'react';
import {Collapse,
          Navbar,
          NavbarToggler,
          NavbarBrand,
          Nav,
          NavItem,
          NavLink,
          container
          //UncontrolledDropdown,
          //DropdownToggle,
          //DropdownMenu,
          //DropdownItem 
        } from 'reactstrap';

class Appnavbar extends Component{
  state= {
    isOpen: false
    }
toggle = () =>{
      this.setState({
      isOpen: !this.state.isOpen
    });
}
render() 
    {
    return ( 
            <div>
            <Navbar color="dark" dark expand="md" className="mb-10">
              <container>
                <NavbarBrand href="/">shoppinglist</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="https://github.com/jothikumarsk">
                      Components
                    </NavLink>
                  </NavItem>
                  </Nav>
                  </Collapse>
              </container>
            </Navbar>
        </div> 
      );
    }
  }

  export default Appnavbar;