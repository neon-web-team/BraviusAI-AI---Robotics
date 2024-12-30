import SubPageHero from "../ui/SubPageHero"
import ContactDetail from "../ui/ContactDetail"
import ContactForm from "../ui/ContactForm"
import Map from "../ui/Map"
import useTital from "../hooks/useTital"

const Contact = () => {

  useTital('Contact')
  return (
    <>
    <SubPageHero tital="Stay Connected With Us" name='Our Contact'/>
    <ContactDetail />
    <ContactForm/>
    <Map/>
    
    </>
  )
}
export default Contact