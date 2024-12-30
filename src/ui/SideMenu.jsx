import { HiMiniXMark, HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePaperAirplane, HiOutlinePhone } from "react-icons/hi2";
import useOutsideClick from "../hooks/useOutsideClick";
import SocialMedia from "./SocialMedia";

const SideMenu = ({ onToggleMenu, toggleMenu }) => {
  const ref = useOutsideClick(onToggleMenu, toggleMenu !== "");
  return (
    <div
      ref={ref}
      id="sideMenu"
      className={`fixed top-0 right-0 pt-24 px-12 h-full bg-background-primaryBg text-white side-menu transform translate-x-full transition-transform duration-300 overflow-y-scroll z-50 ${toggleMenu}`}
    >
      <div className="p-4">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onToggleMenu}
        >
           <HiMiniXMark className="text-3xl text-white linkhover" />
        </button>
        <figure>
          <img src="/logo.svg" className="w-40" alt="logo" />
        </figure>
        <p className="w-[min-content] min-w-96 py-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex flex-col gap-8">
          <a href="#" className="flex gap-4 items-center linkhover">
             <HiOutlineMapPin />
            <h6>120 West Lancashire, England</h6>
          </a>
          <a href="#" className="flex gap-4 items-center linkhover">
            <HiOutlineEnvelope />
            <h6>
              <span
                className="__cf_email__"
                data-cfemail="03707673736c717743767066716d626e662d606c6e"
              >
                [email&#160;protected]
              </span>
            </h6>
          </a>
          <a href="#" className="flex gap-4 items-center linkhover">
            <HiOutlinePhone />
            <h6>(+122) 34 5678 9100</h6>
          </a>
        </div>
        <div className="py-12 flex flex-col gap-6">
          <h5>Get News & Updates</h5>
          <form
            action="#"
            className="w-full flex justify-between items-center bg-white rounded-[100px] ps-6 pe-1 py-2 text-secondary"
          >
            <input
              type="email"
              placeholder="Your email..."
              className="text-black placeholder:text-black p"
              required
              name="sideMail"
              autoComplete="off"
            />
            <button className="ps-1  bg-secondary transition-all rounded-full h-11 w-11 flex justify-center items-center hover:text-white text-black">
              <HiOutlinePaperAirplane className="w-7 h-7" />
            </button>
          </form>
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};
export default SideMenu;
