"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" md:hidden">
      <div className="flex flex-col gap-[4px] cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "rotate-45" : ""} origin-left ease-in duration-200`}></div>
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "opacity-0" : ""} ease-in duration-200`}></div>
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "-rotate-45" : ""} origin-left ease-in duration-200`}></div>
      </div>

      {isOpen && (
        <div className="absolute font-medium text-xl z-20 left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Friends</Link>
          <Link href={"/"}>Groups</Link>
          <Link href={"/"}>Stories</Link>
          <Link href={"/"}>Profile</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
