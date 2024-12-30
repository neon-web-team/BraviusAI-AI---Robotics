import { useState } from "react";
import { HiChevronDown, HiMiniXMark } from "react-icons/hi2";
import { NavLink } from "react-router";

const navList = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/aboutus" },
  { name: "Services", to: "/services" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
  {
    name: "pages",
    more: [
      { name: "Project", to: "/project" },
      { name: "Pricing", to: "/pricing" },
      { name: "Team", to: "/team" },
      { name: "Single Post", to: "singlepost" },
      { name: "Coming soon", to: "comingsoon" },
      { name: "404", to: "" },
    ],
  },
];

const SmallNav = ({ onToggleAside, toggleAside }) => {
  const [open, setOpen] = useState("");

  function handleToggle(){
    setOpen( open ===''?'open':'')
  }
  return (
    <aside
      className={`lg:hidden fixed inset-0 bg-background-primaryBg text-white transform translate-x-full transition-transform duration-300 overflow-y-scroll aside-menu z-50 ${toggleAside}`}
      id="asideMenu"
    >
      <div className="p-4">
        <div className="flex justify-between items-center">
          <figure>
            <img src="/logo.svg" className="w-32 pt-3 pb-7" alt="logo" />
          </figure>
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={onToggleAside}
          >
            <HiMiniXMark className="text-3xl text-white linkhover" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          {navList.map((nav, index) =>
            nav.name !== "pages" ? (
              <NavLink
                to={nav.to}
                key={index}
                className="p linkhover "
                onClick={onToggleAside}
              >
                {nav.name}
              </NavLink>
            ) : (
              <div key={index} className="relative aside-dropdown ">
                <a className="cursor-pointer p pb-3 linkhover flex flex-row items-center " onClick={handleToggle}>
                  Pages 
                  <HiChevronDown className="w-3 h-3 mt-1 ms-1" />
                </a>
                <div
                  className={`left-0 mt-2 w-48 text-primary rounded-lg shadow-lg bg-transparent dropdown-menu ${open}`}
                >
                  {nav.more.map((item, i) => (
                    <NavLink
                      to={item.to}
                      key={i}
                      onClick={toggleAside}
                      className="block py-2 linkhover p"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            )
          )}
        </nav>
      </div>
    </aside>
  );
};
export default SmallNav;
