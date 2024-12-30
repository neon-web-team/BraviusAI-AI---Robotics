import { createBrowserRouter, RouterProvider } from "react-router";

import AppLayout from "./AppLayout";



import { Loader as homeLoader } from "./pages/Home";
import { Loader as prcingLoader } from "./pages/Pricing";
import { Loader as projectLoader } from "./pages/Project";
import { Loader as serviceLoader } from "./pages/Services";
import { Loader as aboutusLoader } from "./pages/AboutUs";
import { Loader as blogLoader } from "./pages/Blog";
import { Loader as teamLoader } from "./pages/Team";



import Home from"./pages/Home";
import AboutUs from"./pages/AboutUs";
import Blog from"./pages/Blog";
import ComingSoon from"./pages/ComingSoon";
import Contact from"./pages/Contact";
import Pricing from"./pages/Pricing";
import Project from"./pages/Project";
import Services from"./pages/Services";
import SinglePost from"./pages/SinglePost";
import Team from"./pages/Team";
import PageNotFound404 from"./pages/PageNotFound404";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound404 />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:homeLoader
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
        loader: aboutusLoader
      },
      {
        path: "/blog",
        element: <Blog />,
        loader:blogLoader

      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
        loader:prcingLoader
      },
      {
        path: "/project",
        element: <Project />,
        loader:projectLoader

      },
      {
        path: "/services",
        element: <Services />,
        loader:serviceLoader
      },
      {
        path: "/singlepost",
        element: <SinglePost />,
      },
      {
        path: "/team",
        element: <Team />,
        loader: teamLoader
      },
    ],
  },
  {
    path: "/comingsoon",
    element: <ComingSoon />,
  },
]);

function App() {
     
  return <RouterProvider router={router} />;
}

export default App;
