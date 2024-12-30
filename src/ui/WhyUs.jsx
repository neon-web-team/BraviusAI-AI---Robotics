import { FaDiamond } from "react-icons/fa6"

const WhyUs = () => {
  return (
    <section>
        <div className="container">
          <div
            className="flex lg:flex-row flex-col-reverse lg:gap-4 gap-6 lg:justify-between justify-center"
          >
            <div
              className="xl:w-[42%] lg:w-[40%] flex lg:justify-start justify-center"
            >
              <figure className="w-fit">
                <img
                  className="w-full"
                  src="/whyUs.webp"
                  alt="wayus"
                  data-aos="zoom-in-up"
                />
              </figure>
            </div>
            <div className="xl:w-[58%] lg:w-[60%]">
              <div
                className="flex lg:text-start text-center flex-col text-primary lg:items-start items-center"
              >
                <div className="lg:pb-8 pb-6" data-aos="fade-up">
                  <div
                    className="flex items-center lg:justify-start justify-center"
                  >
                    <FaDiamond className="w-7 h-7 lg:pe-3 pe-2"/>
                    <h6>WHY US</h6>
                  </div>
                  <h3 className="pt-4 md:pb-4 pb-3 xl:w-[85%]">
                    Innovate, Ignite, Invent: Your AI Business Companion
                  </h3>
                  <p className="xl:w-[85%]">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium sint voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi.
                  </p>
                </div>
                <div className="flex gap-6 flex-col">
                  <div
                    className="flex lg:gap-7 gap-5 lg:flex-row flex-col lg:items-start items-center md:px-0 px-3 group"
                    data-aos="fade-up"
                  >
                    <figure>
                      <img
                        className="w-12 pt-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
                        src="/solution.svg"
                        alt="solution"
                      />
                    </figure>
                    <div className="flex flex-col gap-1">
                      <h5 className="group-hover:text-secondary">Smart Solution</h5>
                      <p className="lg:w-[65%]">
                        Lorem ipsum dolor sit amet, dui consectetur adipiscing
                        elit, sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex lg:gap-7 gap-5 lg:flex-row flex-col lg:items-start items-center md:px-0 px-3 group"
                    data-aos="fade-up"
                  >
                    <figure>
                      <img
                        className="w-12 pt-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
                        src="/reliability.svg"
                        alt="solution"
                      />
                    </figure>
                    <div className="flex flex-col gap-1">
                      <h5 className="group-hover:text-secondary">
                        Better Reliability
                      </h5>
                      <p className="lg:w-[65%]">
                        Lorem ipsum dolor sit amet, dui consectetur adipiscing
                        elit, sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex lg:gap-7 gap-5 lg:flex-row flex-col lg:items-start items-center md:px-0 px-3 group"
                    data-aos="fade-up"
                  >
                    <figure>
                      <img
                        className="w-12 pt-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
                        src="/integration.svg"
                        alt="solution"
                      />
                    </figure>
                    <div className="flex flex-col gap-1">
                      <h5 className="group-hover:text-secondary">
                        Easy Integration
                      </h5>
                      <p className="lg:w-[65%]">
                        Lorem ipsum dolor sit amet, dui consectetur adipiscing
                        elit, sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:mt-10 mt-7 flex lg:justify-start justify-center">
                  <a href="About.html" className="hover1">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
export default WhyUs