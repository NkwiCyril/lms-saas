"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Learning Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();
  
  return (
    <div className="flex items-center gap-6 lg:gap-8">
      {navItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={cn(
            "text-sm font-medium transition-colors hover:text-[#fe5933] relative py-2",
            pathname === item.href 
              ? "font-bold text-[#fe5933]" 
              : "text-gray-700"
          )}
        >
          <span>{item.label}</span>
          {pathname === item.href && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fe5933] rounded-full" />
          )}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;