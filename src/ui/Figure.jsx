import useNumberAnimation from "../hooks/useNumberAnimation";

const Figure = ({ name = "", value = 0, svg, dir = "vertical" }) => {
  const { number } = useNumberAnimation();

  return (
    <div
      className={`flex flex-col  items-center md:text-start text-center  ${
        dir === "vertical"
          ? "md:items-start"
          : "lg:gap-9 md:gap-7 gap-4 md:flex-row"
      }`}
    >
      <figure>
        <img className="w-16 mb-1" src={svg} alt="prize" />
      </figure>
      {dir === "vertical" ? (
        <>
          <h2>
            <span ref={number} className="number" data-final-value={value}>
              0
            </span>
            +
          </h2>
          <p>{name}</p>
        </>
      ) : (
        <div>
          <h3>
            <span ref={number} className="number" data-final-value={value}>
              0
            </span>
            +
          </h3>
          <p className="uppercase">TRUSTED PARTNERS</p>
        </div>
      )}
    </div>
  );
};
export default Figure;
