import React, { useState } from "react";
import SeachBar from "../SearchBar";
import { NavLink } from "./NavLink";
import { Link } from "react-router-dom";
import { SidebarButton } from "./SidebarSetUp";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Receitas", href: "/recipes" },
    { name: "Sobre nós", href: "/sobre-nos" },
  ];

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <header className="bg-yellow-500 pt-2 sticky top-0 w-full z-20">
      <nav className="p-6 bg-white flex justify-between items-center shadow-sm">
        {/* Logo Section */}
        <Link to="/" className="flex justify-center items-center gap-2">
          <img
            className="w-[25px] h-[26px]"
            src="../src/assets/icons/logo.svg"
            alt="logo"
          />
          <span className="hidden md:inline-block font-[500] text-[26px]">
            Delícias à Mesa
          </span>
        </Link>

        {/* Navigation Items */}
        <div className="gap-4 hidden lg:flex">
          {navItems.map((item, index) => (
            <NavLink key={index} name={item.name} href={item.href} />
          ))}
        </div>

        <div className="flex items-center gap-5">
          {/* Search Input (visible on medium screens and up) */}
          <div className="max-w-[258px] hidden md:flex gap-5">
            <SeachBar className="py-2 px-4" />
          </div>
          {/* Burger Icon (visible on small screens) */}
          <SidebarButton toggleSidebar={toggleSidebar} />
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden pt-6 px-2`}
      >
        <SeachBar className="py-2 px-4" />
        <ul className="flex flex-col gap-6 p-6">
          {navItems.map((item, index) => (
            <li key={index} className="hover:slate-100">
              <NavLink name={item.name} href={item.href} />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
