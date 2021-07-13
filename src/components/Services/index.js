import React from "react";
import icon1 from "../../assets/images/discountIcon.svg"
import icon2 from "../../assets/images/virtualIcon.svg"
import icon3 from "../../assets/images/servicesIcon.svg"
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            We help you reduce your fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            You can access our platform online anywhere in the world
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>Premium Services</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
