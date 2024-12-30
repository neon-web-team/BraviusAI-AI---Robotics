import { FaMinus } from "react-icons/fa6";
import Figure from "./figure";

const Stats = () => {
  return (
    <section className="lg:py-[100px] md:py-[70px] py-[50px]">
      <div className="container">
        <h2
          className="lg:w-[55%] md:w-[60%] text-primary lg:mb-4 mb-3 md:text-start text-center"
          data-aos="fade-up"
        >
          Innovating the Future with AI and Robotics
        </h2>
        <div className="flex md:gap-4 gap-6 justify-between md:flex-row flex-col">
          <div className="flex md:w-[60%] flex-col" data-aos="flip-left">
            <figure>
              <img className="w-full" src="/stats.webp" alt="statsImg" />
            </figure>
            <div className="lg:px-10 lg:py-7 px-6 py-5 flex flex-col gap-3 text-primary bg-background-secondaryBg  md:text-start text-center">
              <div className="flex gap-3 items-center md:justify-start justify-center md:flex-nowrap flex-wrap">
                <h5>Kylan Gentry</h5>
                <FaMinus className="text-primary"/>
                <p>CEO</p>
                <span>-</span>
                <p>AI GLOBE</p>
              </div>
              <p className="xl:w-[80%] lg:w-[90%]">
                At auctor urna nunc id cursus metus. Odio ut enim blandit
                volutpat phasellus faucibus scelerisque eius maecenas fringilla
                volutpat blandit.
              </p>
            </div>
          </div>
          <div className="flex lg:w-[35%] md:w[40%] flex-col">
            <div
              className="flex lg:gap-7 md:gap-5 gap-6 flex-col text-primary"
              data-aos="fade-up"
            >
              <Figure
                name="TRUSTED PARTNERS"
                value={300}
                dir="horizontal"
                svg={"/trust.svg"}
              />
              <hr className="w-full bg-white" />
              <Figure
                name="Years Of Experience"
                value={15}
                svg={"/prize.svg"}
                dir="horizontal"
              />

              <hr className="w-full bg-white" />
              <Figure
                name="CREATIVE PROFESSIONALS"
                value={200}
                svg="/community.svg"
                dir="horizontal"
              />

              <hr className=" w-full bg-white" />
              <Figure
                name="WORLDWIDE USERS"
                value={150}
                svg="/worldwide.svg"
                dir="horizontal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats;
