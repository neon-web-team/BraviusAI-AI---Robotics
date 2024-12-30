import useTital from "../hooks/useTital";
import BlogDetails from "../ui/BlogDetails";
import SubPageHero from "../ui/SubPageHero";

const SinglePost = () => {
  useTital('Single Blog')
  return (
    <>
      <SubPageHero
        tital="The Future of Robots - Collaboration or Cooperation?"
        name="Single Blog"
      />
      <BlogDetails />
    </>
  );
};
export default SinglePost;
