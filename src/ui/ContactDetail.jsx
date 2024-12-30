import { FaEnvelope, FaLocationDot, FaPhoneVolume, FaUserGroup } from "react-icons/fa6";

const contactDetailData = [
  {
    id: 1,
    tital: "Phone",
    Icon: <FaPhoneVolume />,
    details: ["(+122) 34 5678 9100", "(+122) 34 5678 9010"],
  },
  {
    id: 2,
    tital: "Address",
    Icon: <FaLocationDot/>,
    details: ["120 West Lancashire,", "England"],
  },
  {
    id: 1,
    tital: "Email",
    Icon: <FaEnvelope/>,
    details: ["info@username.com", "exmple@mail.com"],
  },
  {
    id: 1,
    tital: "Follow Us",
    Icon:       <FaUserGroup/>,
    details: ["instagram.com/BraviusAI", "facebook.com/BraviusAI"],
  },
];
const ContactDetail = () => {
  return (
    <section className="lg:py-[100px] md:py-[70px] py-[50px]">
      <div className="container">
        <div className="flex lg:gap-7 gap-5 md:flex-row flex-col">
          {contactDetailData.map((contact) => (
            <div key={contact.id} className="flex md:w-1/4">
              <a
                href="#"
                className="flex flex-col text-primary justify-center items-center text-center bg-background-cardBg w-full border-[1px] border-solid border-[#717171] gap-4 lg:py-7 py-5 px-4 hover:bg-background-primaryBg hover:border-secondary aos-init"
                data-aos="flip-left"
              >
                <figure className="rounded-full w-[60px] h-[60px] flex justify-center items-center bg-secondary text-background-primaryBg text-2xl">
                  {contact.Icon}
                </figure>
                <div className="flex justify-center items-center text-center flex-col gap-3">
                  <h6>{contact.tital}</h6>
                  <div className="flex justify-center items-center text-center flex-col gap-1">
                    {contact.details.map((det, i) => (
                      <p key={i}>{det}</p>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ContactDetail;
