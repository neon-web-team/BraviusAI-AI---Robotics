import React from "react";
import { FaDiamond } from "react-icons/fa6";
import { useHref } from "react-router";
import { Link } from "react-router";

const SubPageHero = ({ tital = "" ,name}) => {
  const path = useHref();
  const pathNames = path.split("/");
  const pathLenght = pathNames.length;

  function capitalize(p) {
    if (p === "") return "Home";
    const name = p.replace(p.slice(0, 1), p.slice(0, 1).toUpperCase());
    return name;
  }

  return (
    <section>
      <div className="container lg:pt-40 md:pt-36 pt-32 lg:pb-[80px] md:pb-[60px] pb-[45px] border-b-[1px] border-solid border-white text-center">
        <div
          className="flex flex-col items-center justify-center text-primary lg:gap-7 gap-5"
          data-aos="zoom-in-up"
        >
          <h2>{tital}</h2>
          <div className="flex items-center md:justify-start justify-center">
            {pathNames.map((path, index) =>
              pathLenght - 2 >= index ? (
                <React.Fragment  key={index}>
                  <Link
                    to={path === "" ? "/" : "path"}
                   
                    className="linkhover"
                  >
                    <p>{capitalize(path)}</p>
                  </Link>
                  <FaDiamond className="p-2 w-7 h-7 text-[#00f0ff]"/>
                </React.Fragment>
              ) : (
                <p key={index} className="text-secondary">
                  {name}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SubPageHero;
