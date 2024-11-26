import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        <Link href={"/"} className="font-bold text-xl text-blue-600">
          Social
        </Link>
      </div>
      <div className="hidden md:flex w-[50%] items-center justify-between text-sm">
        <div className="flex gap-6 text-gray-600">
          <Link href={"/"} className="flex gap-2 items-center">
            <Image src={"/home.png"} alt="Home page" width={16} height={16} className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image src={"/friends.png"} alt="Friends page" width={16} height={16} className="w-4 h-4" />
            <span>Friends</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image src={"/stories.png"} alt="Stories page" width={16} height={16} className="w-4 h-4" />
            <span>Stories</span>
          </Link>
        </div>

        <div className="hidden p-2 rounded-xl xl:flex items-center gap-2 bg-slate-100 ">
          <input type="text" placeholder="Search..." className="bg-transparent outline-none" />
          <Image src={"/search.png"} alt="search" width={14} height={14} />
        </div>
      </div>

      <div className="w-[30%] flex items-center justify-end gap-4">
        <ClerkLoading>
          <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
            <span className="sr-only">Loading...</span>
          </div>
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <div className="flex items-center gap-4 ">
              <div className=" items-center gap-4 hidden md:flex">
                <div className="cursor-pointer">
                  <Image src={"/people.png"} alt="people" width={20} height={20} />
                </div>
                <div className="cursor-pointer">
                  <Image src={"/messages.png"} alt="messages" width={20} height={20} />
                </div>
                <div className="cursor-pointer">
                  <Image src={"/notifications.png"} alt="notifications" width={20} height={20} />
                </div>
              </div>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src={"/login.png"} alt="login" width={20} height={20} />
              <Link href={"/sign-in"}>Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
