import { Link } from "react-router-dom";

export const NavLink = ({ name, href, className, key, onClick }: { name: string; href: string, className:string, onClick?:()=> void }) => {
    return (
      <Link
        to={href}
        className={`font-bold text-xl text-gray-700 ${className}`}
        onClick={onClick}
      >
        {name}
      </Link>
    );
  };
  