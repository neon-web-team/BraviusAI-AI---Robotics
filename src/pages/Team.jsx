import MyTeam from "../ui/MyTeam";
import Data from "../data/data";
import SubPageHero from "../ui/SubPageHero";
import useTital from "../hooks/useTital";
import { useLoaderData } from "react-router";

const Team = () => {
  useTital("Team");
  const { data, name } = useLoaderData();
  const props = {
    warp: true,
    data,
  };
  return (
    <>
      <SubPageHero tital="A Community Of AI Professionals" name={name} />
      <MyTeam {...props} />
    </>
  );
};

export function Loader() {
  const team = { data: Data.team.data, name: Data.team.name };
  return team;
}
export default Team;
