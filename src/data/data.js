import {
  FaLinkedin,
  FaSquareEnvelope,
  FaSquareFacebook,
  FaSquareWhatsapp,
} from "react-icons/fa6";

export const navbars = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about-us",
  },
  {
    id: 3,
    title: "Services",
    link: "/services",
  },
  {
    id: 4,
    title: "Teams",
    link: "/teams",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
];

export const sliders = [
  {
    id: 1,
    image: "/assets/slider-1.png",
  },
  {
    id: 2,
    image: "/assets/slider-2.png",
  },
  {
    id: 3,
    image: "/assets/slider-3.png",
  },
  {
    id: 4,
    image: "/assets/slider-4.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    icon: <FaSquareEnvelope size={40} />,
    link: `mailto:?subject&body`,
  },
  {
    id: 2,
    icon: <FaSquareFacebook size={40} />,
    link: `https://www.facebook.com/`,
  },
  {
    id: 3,
    icon: <FaLinkedin size={40} />,
    link: `https://www.linkedin.com/`,
  },
  {
    id: 4,
    icon: <FaSquareWhatsapp size={40} />,
    link: `https://api.whatsapp.com/send?text`,
  },
];
