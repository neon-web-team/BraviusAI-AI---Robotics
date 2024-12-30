import { FaAnglesRight, FaDiamond } from "react-icons/fa6";
import { Link } from "react-router";

const Duty = ({
  photo,
  tital = "",
  text = "",
  to = "",
  warp = false,
  component = "service",
  date = "",
  rotate,
}) => {

  return (
    
    <div
      style={{ transform: `rotateY(${rotate}deg)` }}
      className={`transition-all duration-500 delay-200  ${
        warp ? "md:w-1/3 md:px-3 sm:w-[45%] sm:px-3 " : "lg:w-1/4 md:w-1/2 md:px-3"
      }`}
    >
      <div className="relative group h-full" data-aos="flip-left">
        <div className="relative h-full">
          <figure className="h-full">
            <img
              className="w-full h-full relative top-0 left-0"
              src={photo}
              alt="services_1"
            />
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background:
                  "linear-gradient(  180deg  rgba(4, 7, 14, 0) 0%  rgba(4, 7, 14, 0.8) 100%)",
              }}
            ></div>
          </figure>
        </div>
        <div className="absolute bottom-0 flex flex-col justify-center p-6 text-primary transition-all group-hover:justify-start group-hover:pb-6">
          {component === "services" || component === "" ? (
            <>
              <Link to={to} className="linkhover">
                <h4 className="transition-all group-hover:translate-y-[-20%]">
                  {tital}
                </h4>
              </Link>
              <p className="hidden group-hover:block transition-all">{text}</p>
            </>
          ) : (
            <>
              <div className="transition-all group-hover:translate-y-[-20%] flex flex-col">
                <div className="flex items-center md:justify-start justify-center">
                  <FaDiamond className="w-7 h-7 text-[#00f0ff] lg:pe-3 pe-2" /> 
                  <p>{date}</p>
                </div>
                <h5 className="md:text-start text-center">
                  <Link to="/blog" className="h5 hover:text-secondary">
                    {tital}
                  </Link>
                </h5>
              </div>
              <div className="hidden group-hover:block transition-all">
                <Link
                  to="/blog"
                  className="flex gap-2 items-center h6 font-main hover:text-secondary md:justify-start justify-center"
                >
                  Read More <FaAnglesRight className="text-sm"/>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Duty;
