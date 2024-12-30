import CTA from "../ui/CTA";
import FAQs from "../ui/FAQs";
import Hero from "../ui/Hero";
import OurPages from "../ui/OurPages";
import OurPortfolio from "../ui/OurPortfolio";
import Testimional from "../ui/Testimional";
import TransformYourBusiness from "../ui/TransformYourBusiness";
import WhyUs from "../ui/WhyUs";


import { Link, useLoaderData} from "react-router";
import Data from "../data/data";
import MyTeam from "../ui/MyTeam";
import OurPricing from "../ui/OurPricing";
import useTital from "../hooks/useTital";
import Partners from "../ui/Partners";

const Home = () => {
  useTital("Home");

  const { services, blog, team, plans, about,feedback } = useLoaderData();
  const serviceProps = {
    titals: ["OUR SERVICES", "Explore Best AI Services"],
    warp: false,
    count: 4,
    data: services,
  };
  const blogProps = {
    titals: ["OUR BLOGS", "Latest News & Articles"],
    warp: true,
    count: 3,
    data: blog,
  };
  const teamProps = {
    titals: ["OUR TEAM", "A Community Of AI Professionals"],
    warp: false,
    count: 3,
    data: team,
  };
  const pricingProps = {
    titals: ["PRICING PLANS", "Flexible Pricing Plans for AI"],
    warp: false,
    count: 3,
    data: plans,
  };

  const feedbackProps={
    name:feedback.name,
    data:feedback.data
  }

  return (
    <>
      <Hero />
      <Partners />
      <TransformYourBusiness data={about} />
      <OurPortfolio />
      <main className="bg-background-dim border-y-[5px] border-borderColor border-solid">
        <OurPages {...serviceProps}>
          <Link to="/services" className="hover1">
            View All
          </Link>
        </OurPages>

        <WhyUs />
        <OurPricing {...pricingProps} />
        <Testimional {...feedbackProps}  />
        <CTA />
        <FAQs />
        <OurPages {...blogProps} />
        <MyTeam {...teamProps} />
      </main>
    </>
  );
};

export function Loader() {
  const homeData = {
    services: Data.services.data,
    blog: Data.blog.data,
    team: Data.team.data,
    plans: Data.cartsData.data,
    about: Data.About.data,
    feedback: Data.feedback
  };
  return homeData;
}
export default Home;
