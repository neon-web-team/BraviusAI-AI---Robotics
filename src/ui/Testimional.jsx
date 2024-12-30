import { FaDiamond, FaPlay, FaStar } from "react-icons/fa6";
import Figure from "./figure";
import OpinionCart from "./OpinionCart";
import useRotate from "../hooks/useRotate";
import { useRef } from "react";

const Testimional = ({ name, data }) => {
  const { tital, content, feedbacks } = data;
const ref = useRef()
  const rotate = useRotate(ref)
  return (
    <section ref={ref} className="lg:py-[100px] md:py-[70px] py-[50px]">
      <div className="container">
        <div className="flex gap-4 md:flex-row flex-col">
          <div className="flex md:w-1/2">
            <div
              className="lg:pb-8 pb-6 text-primary md:text-start text-center flex flex-col md:items-start items-center"
              data-aos="fade-up"
            >
              <div className="flex items-center md:justify-start justify-center">
                <FaDiamond className="w-7 h-7 lg:pe-3 pe-2" />
                <h6>{name}</h6>
              </div>
              <h3 className="pt-4 md:pb-4 pb-3">{tital}</h3>
              <p className="xl:w-[80%]">{content.text}</p>
              <div className="flex gap-2 lg:pt-10 pt-7 items-center">
                <Figure
                  name="Years Of Experience"
                  value={content.experience}
                  svg={"/prize.svg"}
                />
                <hr className="w-[0.5px] h-44 bg-white md:mx-8 mx-4" />
                <Figure
                  name="Worldwide User"
                  value={content.worldwideUser}
                  svg={"worldwide.svg"}
                />
              </div>
              <div className="flex lg:gap-12 gap-8 items-center lg:pt-14 pt-10 flex-wrap justify-center">
                <div>
                  <a href="Services.html" className="hover1">
                    Learn More
                  </a>
                </div>
                <div>
                  <a className="flex gap-4 items-center" href="#">
                    <figure className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary animate-pulse">
                      <FaPlay className="text-[#04070E] text-sm" />
                    </figure>
                    <p>Watch Intro</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:w-1/2 flex-col gap-7">
            {feedbacks.map((feed, index) => (
              <OpinionCart key={index} {...feed} rotate={rotate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimional;
