import Data from "../data/data";
import CTA from "../ui/CTA";
import WhyUs from "../ui/WhyUs";
import SubPageHero from "../ui/SubPageHero";
import TransformYourBusiness from "../ui/TransformYourBusiness";
import Stats from "../ui/Stats";
import MyTeam from "../ui/MyTeam";
import useTital from "../hooks/useTital";
import { useLoaderData } from "react-router";

const AboutUs = () => {
  useTital("About Us");
  const { about, team } = useLoaderData();

  const teamProps = {
    warp: false,
    count: 3,
    data: team.data,
  };

  return (
    <>
      <SubPageHero
        tital="Artificial Intelligence Innovation"
        name={about.name}
      />
      <TransformYourBusiness data={about.data} />
      <CTA />
      <Stats />
      <WhyUs />
      <MyTeam {...teamProps} />
    </>
  );
};

export function Loader() {
  const AboutUs = { about: Data.About, team: Data.team };

  return AboutUs;
}

export default AboutUs;
