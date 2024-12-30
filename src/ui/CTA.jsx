import { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { FaDiamond, FaPlay } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";

const CTA = () => {

  const [openVideoModal, setOpenVideoModal] = useState("hidden");
  const handleOpenVideoModal = () => {
    setOpenVideoModal("flex");
  };

  const handleCloseVideoModal = () => {
    setOpenVideoModal("hidden");
  };
  const ref = useOutsideClick(
     handleCloseVideoModal, openVideoModal !== "hidden"
  );

  return (
    <>
      <section className="mx-auto lg:mb-[100px] md:mb-[70px] mb-[50px] bg-ctaBg bg-no-repeat bg-center lg:w-[95%] w-[95%]">
        <div className="container">
          <div className="flex md:gap-4 gap-10 md:flex-row flex-col lg:py-32 md:py-24 py-16">
            <div className="flex md:w-1/2 justify-center" data-aos="fade-up">
              <div className="text-primary md:text-start text-center flex flex-col md:items-start items-center">
                <div className="flex items-center md:justify-start justify-center">
                  <FaDiamond className='w-7 h-7 lg:pe-3 pe-2' />
                  
                  <h6>AI KNOWLEDGE HUB</h6>
                </div>
                <h2 className="pt-4 md:pb-4 pb-3 xl:w-[90%]">
                  Unlock The Potential Of AI And Robotics
                </h2>
                <div className="lg:mt-6 mt-4">
                  <a href="Pricing.html" className="hover1">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="flex md:w-1/2 justify-center items-center">
              <a
                id="openVideoModal"
                onClick={handleOpenVideoModal}
                className="flex gap-4 items-center group transition-all"
                data-aos="zoom-in-up"
              >
                <figure className="flex items-center justify-center md:w-24 w-20 h-20 md:h-24 rounded-full bg-primary animate-pulse group-hover:bg-secondary">
                  <FaPlay className="text-background-primaryBg md:text-4xl text-2xl"/>
                </figure>
              </a>
              {/* <!-- videoModal --> */}
              <div
                id="videoModal"
                className={`fixed inset-0 items-center justify-center bg-black bg-opacity-50 z-50 ${openVideoModal}`}
              >
                <div
                  className="rounded-lg overflow-hidden shadow-lg w-full max-w-3xl"
                  ref={ref}
                >
                  <button
                    id="closeModal"
                    onClick={handleCloseVideoModal}
                    className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 z-50"
                  >
            <HiMiniXMark className=" text-3xl text-white hover:text-secondary" />

                  </button>
                  <div className="relative p-4 animate-slideFadeTwistEntrance">
                    <iframe
                      src="https://www.youtube.com/embed/u31qwQUeGuM?si=o1Nt3XrgyYRKwJ13"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                      className="w-full h-64 md:h-96 border-0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-background-dim border-t-[5px] border-borderColor border-solid"></div>
    </>
  );
};
export default CTA;
