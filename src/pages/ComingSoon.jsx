import { useEffect, useState } from "react";
import SocialMedia from "../ui/SocialMedia";
import useTital from "../hooks/useTital";

const ComingSoon = () => {
  const [days, setDays] = useState(6);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(12);
useTital('Coming Soon')
 

  useEffect(() => {
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        targetDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(String(days).padStart(2, "0"));
      setHours(String(hours).padStart(2, "0"));
      setMinutes(String(minutes).padStart(2, "0"));
      setSeconds(String(seconds).padStart(2, "0"));
    }

    let targetDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
    const timer =setInterval(updateCountdown, 1000);

    return ()=>clearInterval(timer)
  }, []);

  return (
    <section className="lg:pt-[100px] md:pt-[70px] pt-[50px] lg:pb-[50px] md:pb-[30px] pb-[20px] bg-comingSoonBg relative overflow-hidden bg-fixed bg-no-repeat bg-cover min-h-svh">
      <div className="container">
        <div
          className="flex flex-col text-center items-center justify-center gap-3 text-primary relative z-10 aos-init aos-animate"
          data-aos="fade-up"
        >
          <h3>We Are</h3>
          <h1 className="text-secondary">Coming Soon...</h1>
          <p className="xl:w-[55%] lg:w-[65%] w-11/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation .
          </p>
          <div className="flex justify-center items-center lg:gap-4 gap-4 mt-7 md:flex-row flex-col md:w-fit w-full">
            <div className="flex justify-center items-center text-center flex-col bg-background-cardBg rounded-xl px-10 py-6 border border-solid border-[#717171] gap-2 md:w-fit w-full">
              <h2 id="days" className="leading-none">
                {days}
              </h2>
              <p className="uppercase">Days</p>
            </div>
            <div className="flex justify-center items-center text-center flex-col bg-background-cardBg rounded-xl px-10 py-6 border border-solid border-[#717171] gap-2 md:w-fit w-full">
              <h2 id="hours" className="leading-none">
                {hours}
              </h2>
              <p className="uppercase">HOURS</p>
            </div>
            <div className="flex justify-center items-center text-center flex-col bg-background-cardBg rounded-xl px-10 py-6 border border-solid border-[#717171] gap-2 md:w-fit w-full">
              <h2 id="minutes" className="leading-none">
                {minutes}
              </h2>
              <p className="uppercase">MINUTES</p>
            </div>
            <div className="flex justify-center items-center text-center flex-col bg-background-cardBg rounded-xl px-10 py-6 border border-solid border-[#717171] gap-2 md:w-fit w-full">
              <h2 id="seconds" className="leading-none">
                {seconds}
              </h2>
              <p className="uppercase">SECONDS</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 lg:mt-28 mt-16 text-center">
            <SocialMedia />
            <p>
              Copyright © 2022 BraviusAI by Evonicmedia. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[#04070E99] z-0"></div>
    </section>
  );
};
export default ComingSoon;
