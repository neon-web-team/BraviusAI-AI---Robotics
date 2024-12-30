import { FaDiamond } from "react-icons/fa6";

const ListContainer = ({ children, refs, titals = [], warp = false }) => {
  return (
    <section ref={refs} className="lg:py-[100px] md:py-[70px] py-[50px]">
      <div className="container">
        {titals.length && (
          <div className="lg:w-[90%] w-[95%] m-auto" data-aos="fade-up">
            <div className="flex items-center justify-center text-center flex-col text-primary">
              <div className="flex items-center md:justify-start justify-center">
                <FaDiamond className={`w-7 h-7 pe-2 `} />
                <h6>{titals[0]}</h6>
              </div>
              <h2 className="pt-4 md:pb-11  pb-8">{titals[1]}</h2>
            </div>
          </div>
        )}
        <div
          className={
            warp
              ? "flex flex-row justify-center  md:gap-x-0 gap-x-6 flex-wrap gap-y-6"
              : "flex lg:flex-row lg:flex-nowrap flex-wrap justify-center lg:gap-y-0 gap-y-6 gap-x-5"
          }
        >
          {children}
        </div>
      </div>
    </section>
  );
};
export default ListContainer;
