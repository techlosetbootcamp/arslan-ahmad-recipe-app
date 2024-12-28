
const FooterLink = ({
  href,
  icon,
  name,
}: {
  href: string;
  icon: string | JSX.Element; // Ensure this type is correct for React components
  name: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-low-yel rounded-md hover:bg-low-yel/60 transition-colors"
      title={name}
    >
      {icon}
    </a>
  );
};

export default FooterLink;
