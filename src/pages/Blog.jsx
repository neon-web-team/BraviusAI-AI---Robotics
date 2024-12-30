
import OurPages from "../ui/OurPages";
import SubPageHero from "../ui/SubPageHero";
import Data from "../data/data";
import useTital from "../hooks/useTital";
import { useLoaderData } from "react-router";

const Blog = () => {
  useTital('Blog')
  const {data,name} = useLoaderData()
  const props = {
    warp:true ,data
  }
  return (
    <>
    <SubPageHero tital="Latest News & Articles" name={name}/>
    <OurPages {...props}/>
    </>
  );
};

export function Loader(){
  const blogData = {data:Data.blog.data,name:Data.blog.name}
  return blogData;
}
export default Blog;
