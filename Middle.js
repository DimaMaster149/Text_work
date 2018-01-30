import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Navbar, NavItem, Nav, Clearfix, FormControl, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class Middle extends Component
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
            <Clearfix>
                <div>
                    <h1 className="centered"> Create your free profile </h1>
                    <div className="flex-container">
                        <div className = "flex-element">
                            <p> I am </p>
                            <FormControl componentClass="select" placeholder="select">
                            </FormControl>
                        </div>

                        <div className = "flex-element">
                            <p> I am looking for </p>
                            <FormControl componentClass="select" placeholder="select">
                            </FormControl>
                        </div>

                        <div className = "flex-element">
                            <p> between </p>
                            <FormControl componentClass="select" placeholder="select">
                            </FormControl>
                        </div>

                        <div className = "flex-element">
                            <p> living in </p>
                            <FormControl componentClass="select" placeholder="select">
                            </FormControl>
                        </div>

                        <div className = "bt-margin flex-element">
                            <p> </p>
                            <Button bsStyle="warning">Following</Button>
                        </div>

                    </div>
                    <h3 className="centered"> Join us to meet people </h3>
                </div>

            </Clearfix>
        )
    }
}

export default Middle