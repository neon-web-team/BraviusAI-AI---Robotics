import OurPages from "../ui/OurPages";
import FAQs from "../ui/FAQs";
import SubPageHero from "../ui/SubPageHero";
import Data from "../data/data";
import useTital from "../hooks/useTital";
import { useLoaderData } from "react-router";

const Services = () => {
  useTital('Services')

  const {data,name} = useLoaderData()
  const props = {
    warp:true ,data
  } 
    
  

  return (
    <>
      <SubPageHero tital="Explore Best AI Services" name={name} />
      <OurPages {...props} />
      <FAQs />
    </>
  );
};

export function Loader(){
  const  services = {data:Data.services.data,name:Data.services.name};
  return services
}
export default Services;
