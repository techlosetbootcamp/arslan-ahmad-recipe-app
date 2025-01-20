import { Link } from "react-router-dom";

const FooterLink = ({
  href,
  icon,
  name,
}: {
  href: string;
  icon: string;
  name: string;
}) => {
  return (
    <Link
      to={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-lignt_yellow rounded-md hover:bg-lignt_yellow/60 transition-colors"
      title={name}
    >
      <img src={icon} alt={name} />
    </Link>
  );
};

export default FooterLink;
