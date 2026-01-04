"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";
const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname.startsWith("/dashboard")) return <></>;
  return (
    <header className="px-3 py-4 border-b-2 border-gray-200 flex flex-wrap justify-between items-center">
      <Link href={"/"}>📘Dev-Story</Link>

      <nav className="space-x-5">
        <NavLink href="/auth/login">Login</NavLink>
        <NavLink href="/auth/register">Register</NavLink>
        <NavLink href="/tutorials">Tutorials</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/stories">Stories</NavLink>
      </nav>
    </header>
  );
};

export default Header;
