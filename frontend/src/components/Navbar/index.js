import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import Navbar from 'react-bootstrap/Navbar'
import logo from './logo.png'

const PageNavbar = () => {
    return (
        <>
           <Nav>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="35"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Search
                </NavLink>
                <NavLink to="/profile" activeStyle>
                    My Profile
                </NavLink>
                <NavLink to="/wishlist" activeStyle>
                    My Wishlist
                </NavLink>
                <NavLink to="/signin" activeStyle>
                    Sign In
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
                </NavBtn>
            </NavMenu>
           </Nav>
        </>
    );
};
export default PageNavbar;
