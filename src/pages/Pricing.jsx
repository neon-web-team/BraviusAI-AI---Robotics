import SubPagehero from "../ui/SubPageHero";
import OurPricing from "../ui/OurPricing";
import Data from "../data/data";
import useTital from "../hooks/useTital";
import { useLoaderData } from "react-router";

const Pricing = () => {
  useTital("Pricing Plans");
  const { data, name } = useLoaderData();

  return (
    <>
      <SubPagehero tital="Flexible Pricing Plans for AI" name={name} />
      <OurPricing data={data} />
    </>
  );
};

export function Loader() {
  const plans = { data: Data.cartsData.data, name: Data.cartsData.name };
  return plans;
}
export default Pricing;
