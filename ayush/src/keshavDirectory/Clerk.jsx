import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";
import React, { useState } from "react";

const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );
};

const Clerk = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { has, isLoaded } = useAuth();
  const navMenus = ["Home", "About", "Service", "Contact"];

  if (!isLoaded) {
    return <span>Loading...</span>;
  }

  const isAdmin = has({ permission: "org:app:admin" });

  return (
    <main className="min-h-full flex w-full bg-gray-900/80">
      <nav className="flex text-white items-center px-5 sm:px-10 h-[60px] border-b w-full border-b-blue-500/50">
        <h1 className="text-2xl font-semibold">Logo</h1>

        <div className="sm:flex hidden gap-x-10 text-lg mx-auto">
          {navMenus.map((nav, key) => (
            <a key={key} href="#">
              {nav}
            </a>
          ))}
        </div>

        <h1 className="text-lg font-medium sm:block hidden relative">
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="relative">
              <UserButton>
                
                  <UserButton.MenuItems>
                    <UserButton.Link
                      label="Create organization"
                      labelIcon={<DotIcon />}
                      href="/create-organization"
                    />
                  </UserButton.MenuItems>
                
              </UserButton>
            </div>
          </SignedIn>
        </h1>

        <img
          src="/menu.png"
          alt=""
          className="block sm:hidden w-6 h-6 ml-auto"
        />
      </nav>
    </main>
  );
};

export default Clerk;
