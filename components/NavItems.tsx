"use client"; // once you use a hook, change component into a client component

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
    <div className="flex items-center gap-8">
      {navItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          // className={pathname == item.href ? "font-semibold" : "text-normal"} // using ternary operators
          className={cn(pathname === item.href && "font-bold text-[#fe5933]")}
        >
          <p>{item.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
