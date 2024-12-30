import { FaDiamond } from 'react-icons/fa6';
import ProgressBar from './ProgressBar'



const TransformYourBusiness = ({data}) => {
    const { tital, details, image, text } = data;
  return (
    <section className="lg:py-[100px] md:py-[70px] py-[50px]">
      <div className="container">
        <div className="grid lg:grid-cols-[55%_45%] md:grid-cols-[48%_48%] justify-around md:gap-0 gap-6">
          <div
            className="flex text-primary flex-col xl:w-full lg:w-[90%] md:text-start text-center"
            data-aos="fade-up"
          >
            <div className="flex items-center md:justify-start justify-center">
              <FaDiamond className='w-7 h-7 lg:pe-3 pe-2'/>
              <h6>ABOUT US</h6>
            </div>
            <h2 className="py-4">{tital}</h2>
            <p className="xl:w-[93%] lg:w-[95%]">{text}</p>
            <div className="flex md:gap-8 gap-4 pt-10 flex-col">
              {details.map((bar) => (
                <ProgressBar key={bar.name} data={bar} />
              ))}
            </div>

            <div className="lg:mt-14 md:mt-10 mt-6">
              <a href="About.html" className="hover1">
                More About
              </a>
            </div>
          </div>
          <div className="w-full flex lg:justify-end justify-center">
            <figure>
              <img
                className="w-fit"
                src={image}
                alt="about_Img"
                data-aos="zoom-in-up"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TransformYourBusiness;
