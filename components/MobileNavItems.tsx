// MobileNavItems Component (New)
"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Learning Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const MobileNavItems = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button 
          className="p-2 text-gray-700 hover:text-[#fe5933] transition-colors"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 sm:w-80">
        <SheetHeader className="text-left">
          <SheetTitle className="text-xl font-bold">Navigation</SheetTitle>
          <SheetDescription className="text-sm text-gray-600">
            Navigate through the app
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-8 space-y-6">
          {/* Navigation Links */}
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                onClick={handleLinkClick}
                className={cn(
                  "block px-4 py-3 text-base font-medium transition-colors rounded-lg hover:bg-gray-50",
                  pathname === item.href 
                    ? "font-bold text-[#fe5933] bg-orange-50" 
                    : "text-gray-700"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Section */}
          <div className="pt-6 border-t border-gray-200">
            <SignedOut>
              <SignInButton>
                <button 
                  onClick={handleLinkClick}
                  className="w-full px-4 py-3 text-base font-medium text-white bg-[#fe5933] rounded-lg hover:bg-[#e54d2b] transition-colors"
                >
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-3 px-4 py-3">
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10"
                    }
                  }}
                />
                <span className="text-sm text-gray-600">Account</span>
              </div>
            </SignedIn>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavItems;