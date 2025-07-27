import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import MobileNavItems from "./MobileNavItems";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center justify-center cursor-pointer gap-2.5">
              <Image 
                src="/images/logo.svg" 
                alt="Logo" 
                width={46} 
                height={44}
                className="w-auto h-8 sm:h-10" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavItems />
            <div className="flex items-center gap-4">
              <SignedOut>
                <SignInButton>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#fe5933] transition-colors">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
              </SignedIn>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNavItems />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;