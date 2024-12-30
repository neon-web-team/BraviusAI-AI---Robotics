import { Link, useHref } from "react-router";
import data from "../data/data";
import { FaDiamond } from "react-icons/fa6";

const OurPortfolio = () => {
  const path = useHref();
  const { project, tital } = data.portfolio.data;
  const { p1, p2, p3, p4, p5 } = project;
  return (
    <>
      <section>
        <div className="lg:w-[95%] w-[97%] m-auto ">
          {path === "/" && (
            <div
              className="flex items-center justify-center text-center flex-col text-primary"
              data-aos="fade-up"
            >
              <div className="flex items-center md:justify-start justify-center">
                <FaDiamond className=" w-7 h-7 lg:pe-3 pe-2" />

                <h6>OUR PORTFOLIO</h6>
              </div>
              <h2 className="pt-4 pb-11">{tital}</h2>
            </div>
          )}
          <div className="flex w-full h-auto lg:flex-row flex-col lg:pb-[100px] md:pb-[70px] pb-[50px] lg:gap-0 gap-6">
            <div className="flex lg:w-1/2">
              <div
                className="relative group h-full w-full"
                data-aos="flip-left"
              >
                <figure>
                  <img className="w-full" src={p1.PImage} alt="portfolio_1" />
                </figure>
                <div className="absolute md:bottom-8 bottom-4 left-[5%] flex flex-col justify-center p-6 bg-[#131B2699] backdrop-blur-[54px] w-[90%] transform -translate-y-1/2 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-primary">
                  <Link to="/project">
                    <h4 className="linkhover">{p1.PTital}</h4>
                  </Link>
                  <p>{p1.PText}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2 h-auto lg:gap-0 gap-6">
              <div className="flex h-full sm:flex-row flex-col w-full lg:gap-0 gap-6">
                <div
                  className="relative group h-full w-full"
                  data-aos="flip-left"
                >
                  <figure className="h-full">
                    <img
                      className="w-full h-full"
                      src={p2.PImage}
                      alt="portfolio_1"
                    />
                  </figure>
                  <div className="absolute md:bottom-8 bottom-4 left-[5%] flex flex-col justify-center p-6 bg-[#131B2699] backdrop-blur-[54px] w-[90%] transform -translate-y-1/2 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-primary">
                    <Link to="/project" className="linkhover">
                      <h4>{p2.PTital}</h4>
                    </Link>
                    <p>{p2.PText}</p>
                  </div>
                </div>
                <div
                  className="relative group h-full w-full"
                  data-aos="flip-left"
                >
                  <figure className="h-full w-full">
                    <img
                      className="w-full h-full"
                      src={p3.PImage}
                      alt="portfolio_1"
                    />
                  </figure>
                  <div className="absolute md:bottom-8 bottom-4 left-[5%] flex flex-col justify-center p-6 bg-[#131B2699] backdrop-blur-[54px] w-[90%] transform -translate-y-1/2 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-primary">
                    <Link to="/project" className="linkhover">
                      <h4>{p3.PTital}</h4>
                    </Link>
                    <p>{p3.PText}</p>
                  </div>
                </div>
              </div>
              <div className="flex h-full sm:flex-row flex-col lg:gap-0 gap-6">
                <div
                  className="relative group h-full w-full"
                  data-aos="flip-left"
                >
                  <figure className="h-full w-full">
                    <img
                      className="w-full h-full"
                      src={p4.PImage}
                      alt="portfolio_1"
                    />
                  </figure>
                  <div className="absolute md:bottom-8 bottom-4 left-[5%] flex flex-col justify-center p-6 bg-[#131B2699] backdrop-blur-[54px] w-[90%] transform -translate-y-1/2 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-primary">
                    <Link to="/project" className="linkhover">
                      <h4>{p4.PTital}</h4>
                    </Link>
                    <p>{p4.PText}</p>
                  </div>
                </div>
                <div
                  className="relative group h-full w-full"
                  data-aos="flip-left"
                >
                  <figure className="h-full w-full">
                    <img
                      className="w-full h-full"
                      src={p5.PImage}
                      alt="portfolio_1"
                    />
                  </figure>
                  <div className="absolute md:bottom-8 bottom-4 left-[5%] flex flex-col justify-center p-6 bg-[#131B2699] backdrop-blur-[54px] w-[90%] transform -translate-y-1/2 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-primary">
                    <Link to="/project" className="linkhover">
                      <h4>{p5.PTital}</h4>
                    </Link>
                    <p>{p5.PText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex text-primary items-center w-[95%] m-auto justify-between md:flex-row flex-col md:gap-0 gap-6 lg:pb-[100px] md:pb-[70px] pb-[50px]"
          data-aos="zoom-in-up"
        >
          <h6 className="xl::text-[60px] lg:text-[45px] md:text-[35px] text-[30px] text-stroke w-max">
            Skilled Experts
          </h6>
          <FaDiamond className="text-stroke lg:border-4 md:border-2 rotate-45 lg:w-9 lg:h-9 md:xl" />

          <h6 className="xl:text-[60px] lg:text-[45px] md:text-[35px] text-[30px] text-stroke w-max">
            Creativity
          </h6>
          <FaDiamond className="text-stroke lg:border-4 md:border-2 rotate-45 lg:w-9 lg:h-9 md:xl" />


          <h6 className="xl:text-[60px] lg:text-[45px] md:text-[35px] text-[30px] text-stroke w-max">
            Magical World
          </h6>
        </div>
      </section>
      <div className="bg-background-dim border-y-[5px] border-borderColor border-solid"></div>
    </>
  );
};
export default OurPortfolio;
