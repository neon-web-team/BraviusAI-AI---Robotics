import { MdFacebook } from "react-icons/md";
import Icon from "./Icon";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Member = ({ name = "", job = "", photo, rotate }) => {

  return (
    <div className="md:w-1/3 sm:w-[40%]  duration-500 delay-500 " style={{ transform: `rotateY(${rotate}deg)` }}>
      <div className="flex flex-col group px-3 h-full" data-aos="flip-left">
        <div className="relative h-full">
          <figure className="h-full">
            <img className="w-full h-full" src={photo} alt={photo} />
          </figure>
          <div className="absolute inset-0 bg-gradient-to-t from-[#00F0FF66] to-[#00F0FF66] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute lg:bottom-8 bottom-6 left-0 right-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:gap-4 gap-3">
            <Icon to="#">
                <MdFacebook className="lg:h-8 lg:w-8 w-4 h-4" />         
            </Icon>
            <Icon to="#">
              <AiFillTwitterCircle className="lg:h-8 lg:w-8 w-4 h-4" />
            </Icon>
            <Icon to="#">
              <AiFillInstagram className="lg:h-8 lg:w-8 w-4 h-4" />
            </Icon>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 text-primary flex-col lg:pt-6 pt-4">
          <h4>{name}</h4>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
