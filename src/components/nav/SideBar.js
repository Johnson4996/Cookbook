//side bar component for use when user is viewing on mobile. styled with styled components

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
                    <SidebarLink onClick={()=>{history.push('/')
                toggle()}}>Home</SidebarLink>
                    <SidebarLink onClick={()=>{history.push('/recipe/new')
                toggle()}}>Create</SidebarLink>
                    <SidebarLink onClick={()=>{history.push("/search")
                     toggle()}}>Search</SidebarLink>
                    <SidebarLink onClick={()=>{history.push(`/user/${localStorage.getItem('cbuser_id')}`)
                toggle()}}>Profile</SidebarLink>
                    <SidebarLink onClick={()=>{history.push("/logout")
                toggle()}}>Logout</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar;