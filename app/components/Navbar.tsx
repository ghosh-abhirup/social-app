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
      <div className="hidden md:flex gap-6 text-gray-600 w-[50%] text-sm">
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
      <div className="w-[30%] flex items-center justify-end">
        <ClerkLoading>
          <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
            <span className="sr-only">Loading...</span>
          </div>
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src={"/people.png"} alt="people" width={20} height={20} />
              <Image src={"/messages.png"} alt="messages" width={20} height={20} />
              <Image src={"/notifications.png"} alt="notifications" width={20} height={20} />
            </div>
            <UserButton />
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
