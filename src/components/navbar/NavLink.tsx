import React from "react";
import { Link } from "react-router-dom";
import { NavLinkProps } from "../../types/Navbar";

export const NavLink: React.FC<NavLinkProps> = ({
  name,
  href,
  className,
  itemKey,
  onClick,
}) => {
  return (
    <Link
      key={itemKey}
      to={href}
      className={`font-bold text-xl text-gray-700 ${className}`}
      onClick={onClick}
    >
      {name}
    </Link>
  );
};
