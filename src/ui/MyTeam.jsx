import { useRef } from "react";
import Member from "./member";
import useRotate from "../hooks/useRotate";
import ListContainer from "./ListContainer";

const MyTeam = ({ count = 10, data = [], titals }) => {
  const ref = useRef();
  const rotate = useRotate(ref);
  return (
    <ListContainer refs={ref} titals={titals} warp={true}>
      {data.map(
        (item, index) =>
          count >= index + 1 && (
            <Member
              key={item.id}
              name={item.name}
              job={item.job}
              photo={item.photo}
              rotate={rotate}
            />
          )
      )}
    </ListContainer>
   
  );
};
export default MyTeam;
