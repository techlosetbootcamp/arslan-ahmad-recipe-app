// Sidebar.tsx
import React from "react";
import SeachBar from "../SearchBar";
import { NavLink } from "./NavLink";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  navItems: { name: string; href: string }[];
}

export const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar, navItems }) => {
  
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:hidden pt-6 px-2`}
    >
      <SeachBar className="py-2 px-4" />
      <ul className="flex flex-col gap-6 p-2">
        {navItems.map((item, index) => (
            <NavLink name={item.name} key={index} onClick={toggleSidebar} className="px-4 py-2 hover:bg-slate-100" href={item.href} />
        ))}
      </ul>
    </div>
  );
};



interface SidebarButtonProps {
  toggleSidebar: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ toggleSidebar }) => {
  return (
    <>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleSidebar}>
          <svg
            className="w-6 h-6 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </>
  );
};



export { SidebarButton };
