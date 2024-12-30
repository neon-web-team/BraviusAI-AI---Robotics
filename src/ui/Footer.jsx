import { useState } from "react";
import { Link } from "react-router";
import SuccessModal from "./SuccessModal";
import SocialMedia from "./SocialMedia";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  const onClose = () => setOpenModal(false);

  return (
    <footer className="lg:pt-[100px] md:pt-[70px] pt-[50px] border-t-[5px] border-solid border-borderColor">
      <div className="container">
        <div className="flex md:flex-row flex-col gap-4 justify-between">
          <div className="flex flex-col xl:w-1/4 md:w-[30%] text-primary md:items-start items-center md:text-start text-center">
            <figure>
              <img className="w-44" src="logo.svg" alt="logo" />
            </figure>
            <p className="lg:py-4 py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <h5 className="pt-3 pb-5">Social Media</h5>
            <SocialMedia />
            <p>
              Developed by :{" "}
              <a href="tel:0778247837" className="text-red-500">Mohammad Fayeq Aqib</a>{" "}
            </p>

            <p>
            Redesigned by :{" "}
              <a href="tel:0778247837" className="text-red-500">Neon Web Team</a>{" "}
            </p>

          </div>
          <div className="flex flex-col lg:w-[60%] md:w-[65%]">
            <div className="flex flex-col gap-3 w-full md:text-start text-center">
              <h6 className="text-primary">Subscribe To Newsletter</h6>
              <form
                className="flex lg:gap-4 gap-3 w-full md:flex-row flex-col"
                onSubmit={handleSubmitForm}
              >
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Your email address..."
                  className="rounded-[30px] text-primary border-[1px] border-solid border-primary bg-transparent py-3 px-5 p w-full"
                  required
                  name="footerMail"
                />
                <button className="hover1">Subscribe</button>
              </form>
              {openModal && <SuccessModal onClose={onClose} open={openModal} />}
            </div>
            <hr className="text-primary my-6" />
            <div className="flex flex-row justify-between md:gap-3 gap-6 md:flex-nowrap flex-wrap">
              <div className="flex flex-col gap-3">
                <h4 className="text-primary">Contact</h4>
                <ul className="flex gap-2 flex-col">
                  <li className="text-primary linkhover">
                    <a href="#" className="flex gap-3 items-center">
                      <HiOutlineMapPin />

                      <p>120 West Lancashire, England</p>
                    </a>
                  </li>
                  <li className="text-primary linkhover">
                    <a href="#" className="flex gap-3 items-center">
                      <HiOutlineEnvelope />

                      <p>
                        <span
                          className="__cf_email__"
                          data-cfemail="a6d5d3d6d6c9d4d2e6d3d5c3d4c8c7cbc388c5c9cb"
                        >
                          [email&#160;protected]
                        </span>
                      </p>
                    </a>
                  </li>
                  <li className="text-primary linkhover">
                    <a href="#" className="flex gap-3 items-center">
                      <HiOutlinePhone />

                      <p>(+122) 34 5678 9100</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-primary">Pages</h4>
                <ul className="flex flex-col gap-2">
                  <li className="text-primary linkhover">
                    <Link to="aboutus" className="p">
                      About
                    </Link>
                  </li>
                  <li className="text-primary linkhover">
                    <Link to="contact" className="p">
                      Contact
                    </Link>
                  </li>
                  <li className="text-primary linkhover">
                    <Link to="pricing" className="p">
                      Pricing
                    </Link>
                  </li>
                  <li className="text-primary linkhover">
                    <Link to="project" className="p">
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-primary">Help</h4>
                <ul className="flex flex-col gap-2">
                  <li className="text-primary linkhover">
                    <a href="#" className="p">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="text-primary linkhover">
                    <a href="#" className="p">
                      Customer Support
                    </a>
                  </li>
                  <li className="text-primary linkhover">
                    <a href="#" className="p">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[5px] border-[#FFFFFF33] border-solid lg:mt-[50px] md:mt-[30px] mt-[20px]">
        <p className="lg:py-3 py-2 text-center text-primary">
          Copyright 2024 Evonicmedia, All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
