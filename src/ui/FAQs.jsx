import React, { useEffect, useState } from "react";
import { FaDiamond, FaMinus, FaPlus } from "react-icons/fa6";

const accordions = [
  {
    id: "a1",
    tital: "Lorem ipsum dolor sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod dui tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
  },
  {
    id: "a2",
    tital: "Lorem ipsum dolor sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod dui tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
  },
  {
    id: "a3",
    tital: "Lorem ipsum dolor sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod dui tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
  },
  {
    id: "a4",
    tital: "Lorem ipsum dolor sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod dui tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
  },
  {
    id: "a5",
    tital: "Lorem ipsum dolor sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod dui tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
  },
];
const FAQs = () => {
  const [openAccor, setOpenAccor] = useState("a1");

  const handleOpenAccor = (e) => {
    e === openAccor ? setOpenAccor("") : setOpenAccor(e);
  };

  useEffect(() => {
    document.querySelectorAll(".accordion-content").forEach((accor) => {
      accor.id === openAccor
        ? (accor.style.maxHeight = accor.scrollHeight + "px")
        : (accor.style.maxHeight = 0);
    });
  }, [openAccor]);
  return (
    <section className="lg:pt-[100px] md:pt-[70px] pt-[50px]">
      <div className="container">
        <div className="flex md:gap-4 gap-6 md:flex-row flex-col">
          <div className="flex flex-col md:w-1/2">
            <div
              className="pb-2 text-primary md:text-start text-center flex flex-col md:items-start items-center"
              data-aos="fade-up"
            >
              <div className="flex items-center md:justify-start justify-center">
                <FaDiamond className=' w-7 h-7 lg:pe-3 pe-2' />
                <h6>FAQ’s</h6>
              </div>
              <h3 className="pt-3 md:pb-5 pb-3 lg:w-[90%]">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="accordion lg:w-[90%]" data-aos="fade-up">
              {accordions.map((accor) => (
                <React.Fragment key={accor.id}>
                  <div className="accordion-item border-b border-gray-200 flex flex-col">
                    <button
                      onClick={() => handleOpenAccor(accor.id)}
                      className="accordion-header flex flex-row items-center w-full text-left bg-transparent focus:outline-none text-primary h6 active "
                    >

                      {
                        accor.id === openAccor ?
                        <FaMinus className="me-3 text-[#00f0ff]"/>:
                      <FaPlus className="me-3"/>
                      }
                    

                      {accor.tital}
                      
                    </button>
                    <div
                      id={accor.id}
                      className={`accordion-content text-primary ${
                        accor.id === openAccor && "open"
                      }`}
                    >
                      <p>{accor.content}</p>
                    </div>
                  </div>
                  <hr className="text-primary md:my-6 my-4" />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex md:w-1/2">
            <figure className="w-full">
              <img
                className="w-full"
                src="/faq_img.webp"
                alt="faq_img"
                data-aos="zoom-in-up"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQs;
