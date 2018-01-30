import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Navbar, NavItem, Nav, Clearfix, FormControl, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';




class Carousel extends Component
{
    //==============================================================================================

    static propTypes =
        {
            //logged: PropTypes.bool.isRequired,
            //user: PropTypes.object.isRequired,
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
        };

    //==============================================================================================

    render()
    {
        return(
            <Clearfix id = {"Carousel"}>

                    <div className = "flex-photo-container">
                        <div className = "flex-element"> <img src = "\server\public\images\photo-1.jpg"/> </div>
                        <div className = "flex-element"> Пикча </div>
                        <div className = "flex-element"> Пикча </div>
                        <div className = "flex-element"> Пикча </div>
                        <div className = "flex-element"> Пикча </div>
                        <div className = "flex-element"> Пикча </div>
                        <div className = "flex-element"> Пикча </div>
                        <div className = "flex-element"> Пикча </div>
                    </div>

            </Clearfix>
        )
    }
}

export default Carousel