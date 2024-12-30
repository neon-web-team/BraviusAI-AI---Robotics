import { Link } from "react-router";

const Icon = ({children,to='/'}) => {
  return (
    <Link to={to}>
      <figure className="flex justify-center items-center lg:w-11 lg:h-11 w-9 h-9 bg-white rounded-full hover:bg-background-primaryBg text-background-primaryBg hover:text-secondary">
       {children}
      </figure>
    </Link>
  );
};
export default Icon;
