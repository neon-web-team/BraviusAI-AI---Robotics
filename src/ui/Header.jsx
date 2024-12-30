import { useEffect, useState } from "react";
import { NavLink } from "react-router";

import SearchOverlay from "./SearchOverlay";
import SideMenu from "./SideMenu";
import SmallNav from "./SmallNav";
import { HiBars3, HiChevronDown, HiMagnifyingGlass } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";


const Header = () => {
  const [toggleSearch, setToggleSearch] = useState("");
  const [toggleMenu, setToggleMenu] = useState("");
  const [toggleAside, setToggleAside] = useState("");
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden");
  }, [toggleSearch]);

  const handleToggleSearch = () => {
    toggleSearch === ""
      ? setToggleSearch("open animate-slideDown")
      : setToggleSearch("");
  };

  const handleToggleMenu = () => {
    toggleMenu === "" ? setToggleMenu("open") : setToggleMenu("");
  };

  const handleToggleAside = () => {
    toggleAside === "" ? setToggleAside("open") : setToggleAside("");
  };

  return (
    <header className="bg-background-blurBg text-white absolute top-0 w-full z-50">
      <div
        className="container mx-auto h-auto flex justify-between items-center p-6"
        data-aos="fade-down"
      >
        <figure className="flex items-center">
          <NavLink to="/">
            <img className="w-36" src="/logo.svg" alt="logo" />
          </NavLink>
        </figure>
        <nav className="hidden lg:flex space-x-8">
          <NavLink className="p linkhover " to="/">
            Home
          </NavLink>
          <NavLink to="/aboutus" className="p linkhover">
            About Us
          </NavLink>
          <NavLink to="/services" className="p linkhover">
            Services
          </NavLink>
          <NavLink to="/blog" className="p linkhover">
            Blog
          </NavLink>
          <div className="relative dropdown">
            <a className="cursor-pointer p pb-3 linkhover flex flex-row items-center justify-between">
              Pages
              <HiChevronDown className="w-5" />
            </a>
            <div className="absolute left-0 mt-0 w-48 text-primary bg-background-secondaryBg shadow-lg dropdown-menu py-3 px-2">
              <NavLink to="/project" className="block px-4 py-2 linkhover p">
                Project
              </NavLink>
              <NavLink to="/pricing" className="block px-4 py-2 linkhover p">
                Pricing
              </NavLink>
              <NavLink to="/team" className="block px-4 py-2 linkhover p">
                Team
              </NavLink>
              <NavLink to="/singlepost" className="block px-4 py-2 linkhover p">
                Single Post
              </NavLink>
              <NavLink to="/comingsoon" className="block px-4 py-2 linkhover p">
                Coming Soon
              </NavLink>
              <NavLink to="/page404" className="block px-4 py-2 linkhover p">
                404
              </NavLink>
            </div>
          </div>
          <NavLink to="/contact" className="p linkhover">
            Contact
          </NavLink>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <HiMagnifyingGlass
            className="text-white cursor-pointer text-xl linkhover"
            onClick={handleToggleSearch}
          />
          <hr className="w-px h-7 bg-white mx-4" />
          <HiBars3
            className="text-white cursor-pointer text-2xl linkhover"
            onClick={handleToggleMenu}
          />
        </div>
        <div className="lg:hidden flex">           
            <FaBars className=" text-white cursor-pointer text-2xl linkhover" onClick={handleToggleAside}  />
        </div>
      </div>
      <SmallNav onToggleAside={handleToggleAside} toggleAside={toggleAside} />
      <SideMenu onToggleMenu={handleToggleMenu} toggleMenu={toggleMenu} />
      <SearchOverlay
        onToggleSearch={handleToggleSearch}
        toggleSearch={toggleSearch}
      />
    </header>
  );
};
export default Header;
