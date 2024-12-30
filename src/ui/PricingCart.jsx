import { Link } from "react-router";
import useNumberAnimation from "../hooks/useNumberAnimation";
import { FaDiamond } from "react-icons/fa6";

const PricingCart = ({ data, rotate }) => {
  const { name, discription, price, details } = data;

  const { number } = useNumberAnimation();

  return (
    <div
      style={{ transform: `rotateY(${rotate}deg)` }}
      className="flex flex-col gap-2 md:w-1/3 lg:p-9 md:p-6 p-8 bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary group transition-all delay-500 duration-500"
      data-aos="flip-left"
    >
      <h3 className="pt-2 group-hover:text-secondary">{name}</h3>
      <p>{discription}</p>
      <div className="flex items-center gap-1 lg:pb-3 pb-2">
        <h2>
          $
          <span ref={number} className="number" data-final-value={price}>
            0
          </span>
        </h2>
        <p className="mb-3">/ month</p>
      </div>
      <hr />
      <ul className="lg:pt-8 md:pt-6 pt-4 flex flex-col lg:gap-5 gap-3">
        {details.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <FaDiamond className="w-7 h-7  lg:pe-3 pe-2" />

              <p>{item}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="lg:mt-10 md:mt-7 mt-5">
        <Link to="pricing" className="hover1 w-full">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default PricingCart;
