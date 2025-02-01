import React from "react";
import SeachBar from "../searchBar/SearchBar";
import { SidebarButtonProps, SidebarProps } from "../../types/SideBar";
import { NavLink } from "./NavLink";
import SIDEBAR_ICON from "/assets/icons/sidebarIcon.svg";

export const SidebarSetUp: React.FC<SidebarProps> = ({
  navItems,
  toggleSidebar,
  isSidebarOpen,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:hidden pt-6 px-2`}
    >
      <SeachBar className="py-2 px-4" />
      <div className="flex flex-col gap-6 p-2">
        {navItems?.map((item, index) => (
          <NavLink
            name={item?.name}
            key={index}
            itemKey={index}
            onClick={toggleSidebar}
            className="px-4 py-2 hover:bg-slate-100"
            href={item?.href}
          />
        ))}
      </div>
    </div>
  );
};

const SidebarButton: React.FC<SidebarButtonProps> = ({ toggleSidebar }) => {
  return (
    <>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleSidebar}>
          <img src={SIDEBAR_ICON} alt="Sidebar Icon" className="w-7 h-7" />
        </button>
      </div>
    </>
  );
};

export { SidebarButton };
