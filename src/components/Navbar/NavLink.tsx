import { Link } from "react-router-dom";

export const NavLink = ({ name, href }: { name: string; href: string }) => {
    return (
      <Link
        to={href}
        className="font-bold text-xl text-gray-700"
      >
        {name}
      </Link>
    );
  };
  