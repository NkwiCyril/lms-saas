import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <div className="flex items-center justify-center cursor-pointer gap-2.5">
          <Image src="images/logo.svg" alt="Logo" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
