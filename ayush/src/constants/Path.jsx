import { useRoutes } from "react-router-dom";
import About from "../keshavDirectory/About";
import Contact from "../keshavDirectory/Contact";
import Service from "../keshavDirectory/Service";
import Checkout from "../payment/Checkout";
import Home from "../keshavDirectory/Home";
import Navigation from "../keshavDirectory/Navigation";

const routes = [
  {
    element: <Navigation />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/service", element: <Service /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },

];

const AppRoutes = () => {
  const routeResult = useRoutes(routes);
  return routeResult;
};

export default AppRoutes;
