import { FOOTER_TEXT, SOCIAL_MEDIA_LINKS } from "../../constants/text";
import WEBSITE_LOGO from "/assets/icons/logo.svg";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="p-20 bg-primary grid lg:grid-cols-2 grid-cols-1 gap-10">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <img
          className="w-[49.68px] h-[46.13px]"
          src={WEBSITE_LOGO}
          alt="Delícias à Mesa logo"
        />
        <p className="font-bold text-nowrap hidden sm:block text-[5vw] lg:text-[46.13px]">
          Delícias à Mesa
        </p>
      </div>

      <div className="flex flex-col items-center md:items-start gap-4">
        <p
          className="font-bold text-[26px]"
          dangerouslySetInnerHTML={{ __html: FOOTER_TEXT }}
        ></p>
        <div className="flex gap-4">
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <FooterLink
              key={index}
              href={link.href}
              icon={link.icon_path}
              name={link.name}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
