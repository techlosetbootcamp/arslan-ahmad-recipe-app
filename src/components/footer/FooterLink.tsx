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
      className="p-2 bg-low-yel rounded-md hover:bg-low-yel/60 transition-colors"
      title={name}
    >
      <img src={icon} alt={name} />
    </Link>
  );
};

export default FooterLink;
