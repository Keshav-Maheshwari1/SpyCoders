import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import About from "../keshavDirectory/About";
import Contact from "../keshavDirectory/Contact";
import Service from "../keshavDirectory/Service";
import Checkout from "../payment/Checkout";
import Home from "../keshavDirectory/Home";
import Navigation from "../keshavDirectory/Navigation";
import { useAuth } from "@clerk/clerk-react";
import Organization from "../keshavDirectory/Organization";


const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

const routes = [
  {
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-organization",
        element: <Organization/>
      },
      {
        path: "/about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        ),
      },
      {
        path: "/service",
        element: (
          <ProtectedRoute>
            <Service />
          </ProtectedRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

const AppRoutes = () => {
  const routeResult = useRoutes(routes);
  return routeResult;
};

export default AppRoutes;
