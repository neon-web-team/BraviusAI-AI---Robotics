import useNumberAnimation from "../hooks/useNumberAnimation";

const ProgressBar = ({data}) => {
    const {name,value} = data
    const {number,progressBar}= useNumberAnimation()
  return (
    <div className="flex flex-col w-full gap-[10px]">
      <div className="flex justify-between">
        <p>{name}</p>
        <p>
          <span ref={number} className="number" data-final-value={value}>
            0
          </span>
          %
        </p>
      </div>
      <div className="w-full bg-background-secondaryBg rounded-full h-2.5">
        <div
        ref={progressBar}
          className="bg-secondary h-2.5 rounded-full"
          data-final-width={value}
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};
export default ProgressBar;
