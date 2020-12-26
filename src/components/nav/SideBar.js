import React from "react"
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu} from "./SideBarElements"

const SideBar = ({isOpen, toggle}) => {
    return(
        <SidebarContainer isOpen = {(isOpen)} onClick= {()=> toggle}>
            <Icon onClick= {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/recipes/create">Create</SidebarLink>
                    <SidebarLink to="/recipes/search">Search</SidebarLink>
                    <SidebarLink to="/profile">Profile</SidebarLink>
                    <SidebarLink to="/logout">Logout</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar;