import FooterLink from "./FooterLink";

const Footer = () => {
  const socialMediaLinks = [
    {
      name: "Youtube",
      href: "https://youtube.com",
      icon_path: "/assets/icons/youtube.svg",
    },
    {
      name: "Browser",
      href: "https://browser.com",
      icon_path: "/assets/icons/browser.svg",
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com",
      icon_path: "/assets/icons/pinterest.svg",
    },
  ];

  return (
    <footer className="p-20 bg-pri grid lg:grid-cols-2 grid-cols-1 gap-10">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <img
          className="w-[49.68px] h-[46.13px]"
          src="/assets/icons/logo.svg"
          alt="Delícias à Mesa logo"
        />
        <p className="font-bold hidden sm:block text-[5vw] lg:text-[46.13px]">
          Delícias&nbsp;à&nbsp;Mesa
        </p>
      </div>

      <div className="flex flex-col items-center md:items-start gap-4">
        <p className="font-bold text-[26px]">Redes&nbsp;sociais:</p>
        <div className="flex gap-4">
          {socialMediaLinks.map((link, index) => (
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
