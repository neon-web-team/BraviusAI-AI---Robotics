import '../styles/Spinner.css'
const Spinner = () => {
  return (
    <div className="w-screen h-[100vh] relative items-center flex justify-center ">
      <div className='spinner'>
      </div>
        <img src="/SmallLogo.svg" className='miniSpinner' />
    </div>
  );
};
export default Spinner;
