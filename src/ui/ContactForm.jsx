import { useState } from "react";
import Lable from "./Lable";
import SuccessModal from "./SuccessModal";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messega, setMessega] = useState("");
  const [openModal, setOpenModal] = useState(false);
  function handleSubmitForm(e) {
    e.preventDefault();
    setOpenModal(true);
  }

  const onClose = () => setOpenModal(false);

  return (
    <section>
      <div className="container">
        <div className="flex md:flex-row flex-col-reverse lg:gap-7 gap-5">
          <div className="flex md:w-1/2">
            <figure>
              <img
                className="w-full aos-init"
                src="contactImg.webp"
                alt="contactImg"
                data-aos="zoom-in-up"
              />
            </figure>
          </div>
          <div className="flex md:w-1/2">
            <div
              className="flex flex-col text-primary gap-3 w-full aos-init"
              data-aos="fade-up"
            >
              <h4 className="md:text-start text-center">Contact Us</h4>
              <form
                id="contactForm"
                className="flex flex-col lg:gap-4 gap-3"
                onSubmit={handleSubmitForm}
              >
                <Lable id="name" lable="Your Name">
                  <input
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    autoComplete="name"
                    className="p bg-background-cardBg border-[1px] border-solid border-[#717171] py-2 px-3"
                    required=""
                  />
                </Lable>
                <Lable id="email" lable="Email">
                  <input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    autoComplete="email"
                    className="p bg-background-cardBg border-[1px] border-solid border-[#717171] py-2 px-3"
                    required=""
                  />
                </Lable>
                <Lable id="phone" lable="Phone">
                  <input
                    type="number"
                    id="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    autoComplete="tel"
                    className="p bg-background-cardBg border-[1px] border-solid border-[#717171] py-2 px-3"
                    required=""
                  />
                </Lable>

                <div className="flex gap-1 flex-col">
                  <Lable id="messege" lable="Messege">
                    <textarea
                      id="messege"
                      onChange={(e) => setMessega(e.target.value)}
                      value={messega}
                      className="p bg-background-cardBg border-[1px] border-solid border-[#717171] py-2 px-3"
                      rows="4"
                      required=""
                    />
                  </Lable>
                </div>
                <button type="submit" className="hover1 mt-2">
                  Send Message
                </button>
              </form>
              {openModal && <SuccessModal onClose={onClose} open={openModal} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
