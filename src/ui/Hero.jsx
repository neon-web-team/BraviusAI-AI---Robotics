import { Link } from "react-router";
import useNumberAnimation from "../hooks/useNumberAnimation";

const Hero = () => {
  const {number} = useNumberAnimation()
  return (
    <section className="bg-heroBg bg-cover bg-center md:pt-36 pt-32 lg:pb-[100px] md:pb-[70px] pb-[50px]">
      <div className="container">
        <div className="md:text-start text-center" data-aos="fade-right">
          <h1 className="text-primary">
            Empowering
            <span className="md:flex py-4 items-center gap-2 flex-wrap">
              <img
                className="md:block hidden"
                src="/hero_img.webp"
                alt="heroImg"
              />
              the
            </span>
            Future With AI
          </h1>
          <p className="text-primary sm:pt-4 pt-3 md:pb-10 pb-4 xl:w-[40%] lg:w-[50%] md:w-[59%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <div className="flex gap-10 flex-wrap-reverse items-center md:justify-start justify-center">
            <div>
              <Link to="aboutus" className="hover1">
                {" "}
                Explore More{" "}
              </Link>
            </div>
            <div className="flex flex-col text-white">
              <h3>
                <span ref={number} className="number" data-final-value="300">
                  0
                </span>
                +
              </h3>
              <p>Trusted Companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
