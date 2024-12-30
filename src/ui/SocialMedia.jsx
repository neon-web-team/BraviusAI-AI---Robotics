import { Link } from "react-router";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const SocialMediaList = [
  { Icon: <MdFacebook className="w-6 h-6" />, to: "#" },
  { Icon: <AiFillInstagram className="w-6 h-6" />, to: "#" },
  { Icon: <AiFillTwitterCircle className="w-6 h-6" />, to: "#" },
  { Icon: <AiFillLinkedin className="w-6 h-6" />, to: "#" },
];

const SocialMedia = () => {
  return (
    <div className="flex gap-4 pb-4">
      {SocialMediaList.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          className="p-3 flex justify-center items-center border-white border-[1px] border-solid text-white bg-background-primaryBg hover:bg-[#00F0FF] hover:text-black hover:border-[#00F0FF]"
        >
          {item.Icon}
        </Link>
      ))}
    </div>
  );
};
export default SocialMedia;
