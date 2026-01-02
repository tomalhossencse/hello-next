import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-3 py-4 border-b-2 border-gray-200 flex flex-wrap justify-between items-center">
      <Link href={"/"}>📘Dev-Story</Link>

      <nav className="space-x-5">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/tutorials">Tutorials</Link>
        <Link href="/about">About</Link>
        <Link href="/stories">Stories</Link>
      </nav>
    </header>
  );
};

export default Header;
