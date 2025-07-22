import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href={"/"}>
        <div className="flex items-center justify-center cursor-pointer gap-2.5">
          <Image src="images/logo.svg" alt="Logo" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <Link href={"/sign-in"} >
            <p>Sign In</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
