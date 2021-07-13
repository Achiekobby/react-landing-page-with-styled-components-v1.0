import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../assets/videos/globe.mp4";
import { Button } from "../helpers/ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Online Payments Made Easy and Reliable</HeroH1>
        <HeroP>
          QuickPay is the leading Payments platform solution at the
          moment. We believe in a world characterized by an easy to understand online payment ecosystem.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="sign-up"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            primary={true}
            dark={true}
          >
            Register {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
