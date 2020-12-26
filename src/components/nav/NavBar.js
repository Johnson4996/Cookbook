import React from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo ,MobileIcon, NavMenu, NavItem, NavLinks } from "./NavBarElements"



const NavBar = ({toggle}) => {

    

    return (
       <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to= "/"> Home </NavLogo>
                    <MobileIcon onClick={()=> toggle()}><FaBars /></MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/recipes/create">Create</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/recipes/search">Search</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/profile">Profile</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/logout">Logout</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
       </>
    )
}

export default NavBar;

