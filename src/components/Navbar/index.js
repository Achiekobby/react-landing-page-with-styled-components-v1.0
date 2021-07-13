import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  FaGlobeStyle,
} from "./NavbarElements";
import { FaBars, FaGlobe } from "react-icons/fa";

const Navbar = ({ toggleBars }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const handleScrollNavState = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNavState);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <FaGlobeStyle>
                <FaGlobe />
              </FaGlobeStyle>
              QuickPay
            </NavLogo>
            {/* Mobile Menu Icon */}
            <MobileIcon onClick={toggleBars}>
              <FaBars />
            </MobileIcon>

            {/* Actual Menu Items ul Element*/}
            <NavMenu>
              {/* li Element for the nav links */}
              <NavItem>
                {/* Links tag of the nav links */}
                <NavLinks
                  to="premium"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Premium
                </NavLinks>
              </NavItem>

              <NavItem>
                {/* Links tag of the nav links */}
                <NavLinks
                  to="developers"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Developers
                </NavLinks>
              </NavItem>

              <NavItem>
                {/* Links tag of the nav links */}
                <NavLinks
                  to="about-us"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  About
                </NavLinks>
              </NavItem>

              <NavItem>
                {/* Links tag of the nav links */}
                <NavLinks
                  to="join-our-team"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Join our Team
                </NavLinks>
              </NavItem>

              <NavItem>
                {/* Links tag of the nav links */}
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Services
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/sign-in">Register Now</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
