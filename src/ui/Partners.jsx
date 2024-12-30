

const Partners = () => {
  return (
    <section
    className="lg:py-[70px] md:py-[50px] py-[30px] border-b border-white border-solid"
  >
    <h1 className="hidden">Lorem ipsum dolor sit.</h1>
    <div className="container m-auto" data-aos="zoom-in">
      <div className="partners_Slider overflow-hidden relative group">
        <div
          className="w-[calc(250px*14)] animate-scroll flex group-hover:animate-paused"
        >
          <div className="w-60">
            <img
              className="w-36"
              src="/partners1.svg"
              alt="partners1"
            />
          </div>
          <div className="w-60">
            <img
              className="w-36"
              src="/partners2.svg"
              alt="partners2"
            />
          </div>
          <div className="w-60">
            <img
              className="w-36"
              src="/partners3.svg"
              alt="partners3"
            />
          </div>
          <div className="w-60">
            <img
              className="w-36"
              src="/partners4.svg"
              alt="partners4"
            />
          </div>
          <div className="w-60">
            <img
              className="w-36"
              src="/partners5.svg"
              alt="partners5"
            />
          </div>
          <div className="w-60">
            <img
              className="w-36"
              src="/partners6.svg"
              alt="partners6"
            />
          </div>
          <div className="w-60">
            <img
              className="w-36"
              src="/partners7.svg"
              alt="partners7"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
export default Partners