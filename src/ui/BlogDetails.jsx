import { useState } from "react";
import { Link } from "react-router";
import SocialMedia from "./SocialMedia";
import { FaDiamond } from "react-icons/fa6";

const BlogDetails = () => {
  const [messega, setMessega] = useState("");
  function handleFormSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="lg:py-[100px] md:py-[70px] py-[50px]">
      <div className="container">
        <div className="flex flex-col lg:gap-12 gap-7">
          <figure>
            <img
              className="w-full aos-init aos-animate"
              src="./single-post.webp"
              alt="single-post"
              data-aos="zoom-in-up"
            />
          </figure>
          <div
            className="flex flex-col lg:gap-4 gap-3 text-primary lg:w-[86%] md:w-[95%] md:text-start text-center aos-init aos-animate"
            data-aos="fade-up"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. get nunc scelerisque viverra mauris in aliquam.
              Tristique senectus et netus et malesuada fames ac. Potenti non
              numquam eius modi tempora incidunt ut labore nullam ac tortor
              vitae purus faucibus ornare.
            </p>
            <p>
              Mauris cursus mattis molestie a iaculis at erat pellentesque. At
              auctor urna nunc id cursus metus. Odio ut enim blandit volutpat
              maecenas volutpat blandit. Egestas fringilla phasellus faucibus
              scelerisque eleifend donec pretium. Malesuada proin libero nunc
              consequat. In tellus integer feugiat scelerisque varius. In ante
              metus dictum non numquam eius modi tempora incidunt ut labore at
              tempor commodo ullamcorper a. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices onec ac odio tempor orci
              dapibus ultrices in. Purus semper eget duis at tellus.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada. Enim diam vulputate ut pharetra sit amet aliquam id
              diam. Odio morbi quis commodo odio aenean. Tempor commodo
              ullamcorper a lacus vestibulum sed arcu non. Purus gravida quis
              blandit turpis cursus in hac. Bibendum est ultricies integer quis
              auctor. Nullam vehicula ipsum a arcu cursus vitae congue. Aliquam
              faucibus purus in massa. Ipsum faucibus vitae aliquet nec
              ullamcorper sit amet risus. Sollicitudin tempor ideu nisl nunc mi
              ipsum faucibus vitae. Posuere urna nec tincidunt praesent semper
              feugiat nibh sed pulvinar. Eu feugiat pretium nibh ipsum.
              Elementum nibh tellus molestie nunc non blandit massa.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur
            </p>
          </div>
          <div className="lg:py-12 py-8 border-y-[1px] border-solid border-primary flex md:justify-between justify-center items-center flex-wrap gap-4">
            <div className="flex items-center md:justify-start justify-center text-primary md:text-start text-center">
              <Link to="#" className="linkhover">
                <h6>BY ADMIN</h6>
              </Link>
              <FaDiamond className=" w-10 h-10 lg:pe-3 p-2" />

              <h6>SINGLE BLOG</h6>
            </div>
            <div className="flex lg:gap-5 gap-4 text-primary items-center flex-wrap md:justify-start justify-center">
              <h5>Share This :</h5>
              <SocialMedia />
            </div>
          </div>
          <div className="flex flex-col lg:gap-8 gap-6 text-primary md:text-start text-center">
            <h4>Add Comment</h4>
            <form
              className="flex flex-col lg:gap-4 gap-3 lg:w-1/2"
              onSubmit={handleFormSubmit}
            >
              <textarea
                id="messege"
                onChange={(e) => setMessega(e.target.value)}
                value={messega}
                className="p bg-background-cardBg border-[1px] border-solid border-[#717171] py-3 px-5 focus:outline-none placeholder:text-primary"
                rows="7"
                placeholder="Write here..."
                required=""
              />
              <button type="submit" className="hover1 md:mt-4 mt-2">
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogDetails;
