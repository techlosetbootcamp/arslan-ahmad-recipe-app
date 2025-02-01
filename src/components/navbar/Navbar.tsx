import { Link } from "react-router-dom";
import useSideBarHandler from "../../hooks/useSideBar";
import { SidebarButton, Sidebar } from "./SidebarSetUp";
import SeachBar from "../searchBar/SearchBar";
import { NavLink } from "./NavLink";
import { NAV_ITEMS } from "../../constants/text";
import WEBSITE_LOGO from "/assets/icons/logo.svg";

const Navbar = () => {
  const { isSidebarOpen, setSidebarOpen } = useSideBarHandler();
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <header className="bg-primary pt-[29px] sticky top-0 w-full z-20">
      <nav className="p-6 bg-white flex justify-between items-center shadow-sm">
        <Link to="/" className="flex justify-start items-center gap-x-2">
          <img className="w-[25px] h-[26px]" src={WEBSITE_LOGO} alt="logo" />
          <span className="hidden sm:inline-block font-[500] text-nowrap text-[26px]">
            Delícias à Mesa
          </span>
        </Link>

        <div className="gap-4 hidden lg:flex">
          {NAV_ITEMS.map((item, index) => (
            <NavLink
              key={index}
              itemKey={index}
              name={item?.name}
              href={item?.href}
            />
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
        navItems={NAV_ITEMS}
      />
    </header>
  );
};

export default Navbar;
