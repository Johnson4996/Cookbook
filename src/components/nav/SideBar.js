import React from "react"
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu} from "./SideBarElements"

const SideBar = ({isOpen, toggle, history}) => {
    return(
        <SidebarContainer isOpen = {(isOpen)} onClick= {()=> toggle}>
            <Icon onClick= {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={()=>history.push('/recipe/new')}>Create</SidebarLink>
                    <SidebarLink onClick={()=>history.push("/recipes/search")}>Search</SidebarLink>
                    <SidebarLink onClick={()=>history.push("/my-profile")}>Profile</SidebarLink>
                    <SidebarLink onClick={()=>history.push("/logout")}>Logout</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar;