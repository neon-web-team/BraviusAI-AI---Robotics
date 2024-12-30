import { Link } from "react-router"
import SocialMedia from "../ui/SocialMedia"
import useTital from "../hooks/useTital"

const PageNotFound404 = () => {

    useTital('PageNotFound')
  return (
    <section className="lg:pt-[100px] md:pt-[70px] pt-[50px] lg:pb-[50px] md:pb-[30px] pb-[20px]">
        <div className="flex justify-center items-center flex-col lg:gap-6 gap-4 text-primary aos-init aos-animate" data-aos="fade-up">
            <figure>
                <img className="w-full" src="./404.webp" alt="404"/>
            </figure>
            <div className="flex gap-3 text-center items-center flex-col justify-center">
                <h2>Oops! Page Not Found!</h2>
                <p className="lg:w-[55%] md:w-[70%] w-[85%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>
                <div>
                    <Link to="/" className="hover1 lg:mt-6 mt-4">Back to Home</Link>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 lg:mt-28 mt-16 text-center">
                <SocialMedia/>
                <p>Copyright © 2022 BraviusAI by Evonicmedia. All Rights Reserved.</p>
            </div>
        </div>
    </section>
  )
}
export default PageNotFound404