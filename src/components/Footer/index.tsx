// import InstagramIcon from "/icons/youtube.svg";
// import TwitterIcon from "../src/assets/icons/logo.svg";
import YoutubeIcon from "../IconComponents/Youtube";
import BrowserIcon from "../IconComponents/Browser";
import PinterestIcon from "../IconComponents/Pinterest";
// import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";

import FooterLink from "./FooterLink";

const Footer = () => {
  const socialMediaLinks = [
    { name: "Instagram", href: "https://instagram.com", icon: <YoutubeIcon /> },
    { name: "Twitter", href: "https://twitter.com", icon: <BrowserIcon /> },
    { name: "Facebook", href: "https://facebook.com", icon: <PinterestIcon /> },
  ];

  return (
    <footer className="p-20 bg-yellow-500 grid lg:grid-cols-2 grid-cols-1 gap-10">
      {/* Logo and Branding */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <img
          className="w-[49.68px] h-[46.13px]"
          src="../src/assets/icons/logo.svg"
          alt="Delícias à Mesa logo"
        />
        <p className="font-bold hidden sm:block text-[5vw] lg:text-[46.13px]">
          Delícias&nbsp;à&nbsp;Mesa
        </p>
      </div>

      {/* Social Media Section */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <p className="font-bold text-[26px]">Redes sociais:</p>
        <div className="flex gap-4">
          {socialMediaLinks.map((link, index) => (
            <FooterLink
              key={index}
              href={link.href}
              icon={link.icon}
              name={link.name}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
