import React from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo ,MobileIcon, NavMenu, NavItem, NavLinks } from "./NavBarElements"



const NavBar = ({history,toggle}) => {

    

    return (
       <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to= "/"> CookBook </NavLogo>
                    <MobileIcon onClick={()=> toggle()}><FaBars /></MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks onClick={()=>history.push('/recipe/new')}>Create</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={()=>history.push('/recipe/search')}>Search</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={()=>history.push('/my-profile')}>Profile</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={()=>history.push('/logout')}>Logout</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
       </>
    )
}

export default NavBar;

