import { useRef } from "react";
import ListContainer from "./ListContainer";
import PricingCart from "./PricingCart";
import useRotate from "../hooks/useRotate";

const OurPricing = ({ data = [], warp, titals = "", count = "10" }) => {
  const ref = useRef();
  const rotate = useRotate(ref);

  return (
    <ListContainer refs={ref} warp={warp} titals={titals}>
      {data.map(
        (cart, index) =>
          count >= index + 1 && (
            <PricingCart key={cart.name} data={cart} rotate={rotate} />
          )
      )}
    </ListContainer>
  );
};
export default OurPricing;
