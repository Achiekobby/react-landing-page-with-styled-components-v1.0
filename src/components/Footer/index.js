import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIconLink,
  SocialIcons,
  WebsiteRights
} from "./FooterElements";

const Footer = () => {
  
  const toggleHome = () => {
    scroll.scrollToTop()
  }


  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/sign-in">How it Works</FooterLink>
              <FooterLink to="/sign-in">Testimonials</FooterLink>
              <FooterLink to="/sign-in">Careers</FooterLink>
              <FooterLink to="/sign-in">Investors</FooterLink>
              <FooterLink to="/sign-in">Terms of Service</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/sign-in">Contact</FooterLink>
              <FooterLink to="/sign-in">Support</FooterLink>
              <FooterLink to="/sign-in">Destination</FooterLink>
              <FooterLink to="/sign-in">Sponsorship</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/sign-in">Submit Video</FooterLink>
              <FooterLink to="/sign-in">Ambassadors</FooterLink>
              <FooterLink to="/sign-in">Agency</FooterLink>
              <FooterLink to="/sign-in">Influencer</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/sign-in">Instagram</FooterLink>
              <FooterLink to="/sign-in">Facebook</FooterLink>
              <FooterLink to="/sign-in">Twitter</FooterLink>
              <FooterLink to="/sign-in">LinkedIn</FooterLink>
              <FooterLink to="/sign-in">Github</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>QuickPay</SocialLogo>
            <WebsiteRights>
              QuickPay &amp; {new Date().getFullYear()} All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="linkedin">
                <FaLinkedin/>
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
