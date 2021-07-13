import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({isOpen, toggleTimes, closeSidebar}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleTimes}>
      <Icon onClick={toggleTimes}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="premium" onClick={closeSidebar}>
            Premium
          </SidebarLink>
          <SidebarLink to="developers" onClick={closeSidebar}>
            Developers
          </SidebarLink>
          <SidebarLink to="about" onClick={closeSidebar}>
            About
          </SidebarLink>
          <SidebarLink to="join-our-team" onClick={closeSidebar}>
            Join our Team
          </SidebarLink>

          <SidebarLink to="services" onClick={closeSidebar}>
            Services
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="sign-in" onClick={closeSidebar}>
            Register Now
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
