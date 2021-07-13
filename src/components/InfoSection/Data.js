import onlinePayment from "../../assets/images/premium-package.svg";
import developersImg from "../../assets/images/developers.svg";
import aboutImg from "../../assets/images/online-payment.svg";
import joinImg from "../../assets/images/piggybank.svg";

export const homeObjOne = {
  id: "premium",
  lightBg: false,
  lightText: true,
  topLine: "Premium Package",
  headline: "Unlimited Transaction with zero fees",
  description:
    "Get Access to our Exclusive gateway that allows you to send unlimited transactions without getting charged any fees",
  buttonLabel: "Subscribe",
  imgStart: false,
  img: onlinePayment,
  alt: "Online-Payment",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "developers",
  lightBg: true,
  lightText: false,
  topLine: "For Developers",
  headline: "Learn the fastest way to Integrate Quickpay into your products",
  description:
    "Quickpay helps you create any type of payment flow for your particular use case, from online collections, to payouts and everything in between",
  buttonLabel: "Get Started",
  imgStart: true,
  img: developersImg,
  alt: "On",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "about-us",
  lightBg: false,
  lightText: true,
  topLine: "About Us",
  headline: "Accept payments anywhere.",
  description:
    "One platform that lets you sell wherever your customers are — online, in‑person, anywhere in the world, and everywhere in‑between.",
  buttonLabel: "Read More",
  imgStart: false,
  img: aboutImg,
  alt: "Online-Payment",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjFour = {
  id: "join-our-team",
  lightBg: true,
  lightText: false,
  topLine: "Join Our Team",
  headline: "Creating an account is extremely Easy.",
  description:
    "Get Everything set up and ready in just about 10 seconds. All you need to do is add your information and you are ready to go",
  buttonLabel: "Get Started",
  imgStart: true,
  img: joinImg,
  alt: "On",
  dark: false,
  primary: false,
  darkText: true,
};
