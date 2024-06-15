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

export const abouts = [
  {
    id: 1,
    title: "Company Overview",
    description: `RizzCorps is a dynamic and innovative web development company dedicated to crafting top notch digital experiences. Founded with a passion for technology and a commitment to excellence, we specialize in creating customized websites that not only meet but exceed our clients' expectations. Our team of skilled developers, designers, and strategists work collaboratively to deliver seamless, user friendly, and visually stunning websites tailored to your unique business needs.`,
  },
  {
    id: 2,
    title: "About Us",
    description: `At RizzCorps, we believe that a strong online presence is crucial in today's digital landscape. We pride ourselves on our ability to transform ideas into reality, offering comprehensive web solutions that drive engagement and growth. From initial concept to final launch, our process is transparent, efficient, and focused on delivering results that matter.`,
  },
  {
    id: 3,
    title: "About Us",
    description: `Whether you're a startup looking to establish your brand or an established business aiming to enhance your digital footprint, RizzCorps is your trusted partner in achieving your online goals. Join us on a journey to innovate, create, and elevate your web presence to new heights.`,
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
