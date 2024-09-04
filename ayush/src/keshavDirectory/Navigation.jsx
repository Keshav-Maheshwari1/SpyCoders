import React from "react";
import { Link, Outlet } from "react-router-dom";
import { SignedIn } from "@clerk/clerk-react";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-organization"/>
          </li>
          <SignedIn>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </SignedIn>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
