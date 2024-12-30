import { Outlet, useNavigation } from "react-router";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Spinner from "./ui/Spinner";

const AppLayout = () => {
  const navgation = useNavigation()

  return (
    <>
      <Header />
      {navgation.state !== 'idle'?
      <Spinner/>
      :
      <Outlet />
      }
      <Footer />
    </>
  );
};
export default AppLayout;
