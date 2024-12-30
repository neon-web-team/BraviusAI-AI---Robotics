import { useRef } from "react";
import useRotate from "../hooks/useRotate";
import Duty from "./duty";
import { useHref } from "react-router";
import ListContainer from "./ListContainer";
const OurBlog = ({ children, warp, data = [], titals = [], count = 10 }) => {
  const path = useHref().slice(1);
  const ref = useRef();
  const rotate = useRotate(ref);
  return (
    <ListContainer refs={ref} titals={titals} warp>
      {data.map(
        (item, index) =>
          count >= index + 1 && (
            <Duty
              {...item}
              key={item.id}
              to={"/blog"}
              warp={warp}
              rotate={rotate}
              component={path}
              // photo={item?.photo}
              // tital={item?.tital}
              // text={item?.text}
              // date={item?.date}
            />
          )
      )}
    </ListContainer>
  );
};
export default OurBlog;
