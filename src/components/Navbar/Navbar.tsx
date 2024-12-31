import { useState } from "react";
import SeachBar from "../searchBar/SearchBar";
import { NavLink } from "./NavLink";
import { Link } from "react-router-dom";
import { SidebarButton, Sidebar } from "./SidebarSetUp";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Receitas", href: "/recipes" },
    { name: "Sobre nós", href: "/sobre-nos" },
  ];

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <header className="bg-pri pt-2 sticky top-0 w-full z-20">
      <nav className="p-6 bg-white flex justify-between items-center shadow-sm">
        <Link to="/" className="flex justify-start items-center gap-x-2">
          <img
            className="w-[25px] h-[26px]"
            src="/assets/icons/logo.svg"
            alt="logo"
          />
          <span className="hidden sm:inline-block font-[500] text-[26px]">
            Delícias à Mesa
          </span>
        </Link>

        <div className="gap-4 hidden lg:flex">
          {navItems.map((item, index) => (
            <NavLink key={index} itemKey={index} name={item.name} href={item.href} />
          ))}
        </div>

        <div className="flex items-center gap-5">
          <div className="max-w-[258px] hidden md:flex gap-5">
            <SeachBar className="py-2 px-4" />
          </div>
          <SidebarButton toggleSidebar={toggleSidebar} />
        </div>
      </nav>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        navItems={navItems}
      />
    </header>
  );
};

export default Navbar;
