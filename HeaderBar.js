import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Navbar, NavItem, Nav, Clearfix, FormControl, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class HeaderBar extends Component
{
  //==============================================================================================

  static propTypes =
    {
      //logged: PropTypes.bool.isRequired,
      //user: PropTypes.object.isRequired,
      onSignUp: PropTypes.func.isRequired,
      onLogIn: PropTypes.func.isRequired,
      onLogOut: PropTypes.func.isRequired,
    };

  static defaultProps =
    {
      //logged: false,
      // user:
      //   {
      //     id: null,
      //     username: null,
      //     email: null,
      //     access: null,
      //     photo: null
      //   },
      onSignUp:() => {},
      onLogIn: () => {},
      onLogOut: () => {},
    };

  //==============================================================================================

  render()
  {
    return(
      <Clearfix>

        <Navbar inverse={true} collapseOnSelect={true} id={"HeaderBar"}>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to={"/"}>
                <div className = "picture">
                  Здесь будет картинка
                </div>
              </LinkContainer>
            </Navbar.Brand>
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav pullRight={true}>
                <div className = "flex-container">
               <ul className = "horizontal ">
                <li><FormControl  type = "text" size = "16" placeholder = {"Login"}/> </li>

                   <li> <FormControl  type = "text" size = "16" placeholder = {"Password"}/> </li>

                   <li> <NavItem className = "border" onClick={() => {this.props.onLogIn()}}>
                Log In
              </NavItem>
                   </li>
               </ul>
                </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </Clearfix>
    )
  }
}

export default HeaderBar