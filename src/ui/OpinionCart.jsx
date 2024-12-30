import { FaStar } from "react-icons/fa6";

const OpinionCart = ({ photo, stars = 0, comment = "", name = "", job = "" ,id,rotate}) => {
  const star = Array.from({ length: stars }, () => "");
  return (
    <div
    style={{transform:`rotateY(${rotate}deg)`}}
      className={`flex lg:py-10 py-8 lg:px-8 px-6  gap-8 bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary xl:w-[85%] lg:w-[90%] sm:flex-row flex-col sm:items-start items-center sm:text-start text-center group duration-500 delay-200 transition-all ${id%2 !== 1 &&'self-end' }`}
      data-aos="flip-left"
    >
      <figure>
        <img
          className="rounded-full md:w-44 w-[90px]"
          src={photo}
          alt={photo}
        />
      </figure>
      <div className="flex gap-2 flex-col">
        <figure className="flex gap-2 sm:justify-start justify-center text-yellow-300">
          {star.map((_, index) => (
            <FaStar key={index} className="text-[12px]" />
          ))}
        </figure>
        <p>{comment}</p>
        <p className="lg:text-[14px] text-[12px]">
          <span className="group-hover:text-secondary">{name}</span> / {job}
        </p>
      </div>
    </div>
  );
};
export default OpinionCart;
