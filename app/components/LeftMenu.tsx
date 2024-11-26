import React from "react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import Image from "next/image";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}

      <div className="p-4 w-full shadow-md rounded-lg text-xs items-center bg-white flex flex-col gap-2">
        <Link href={"/"} className="flex w-full items-center gap-4 p-2 hover:bg-slate-100 rounded-lg">
          <Image width={20} height={20} src={"/posts.png"} alt="posts" className="cursor-pointer" />
          <p>My posts</p>
        </Link>
        <Link href={"/"} className="flex w-full items-center gap-4 p-2 hover:bg-slate-100 rounded-lg">
          <Image width={20} height={20} src={"/activity.png"} alt="activity" className="cursor-pointer" />
          <p>Activity</p>
        </Link>
        <Link href={"/"} className="flex w-full items-center gap-4 p-2 hover:bg-slate-100 rounded-lg">
          <Image width={20} height={20} src={"/market.png"} alt="marketplace" className="cursor-pointer" />
          <p>Marketplace</p>
        </Link>
        <Link href={"/"} className="flex w-full items-center gap-4 p-2 hover:bg-slate-100 rounded-lg">
          <Image width={20} height={20} src={"/events.png"} alt="events" className="cursor-pointer" />
          <p>Events</p>
        </Link>
        <Link href={"/"} className="flex w-full items-center gap-4 p-2 hover:bg-slate-100 rounded-lg">
          <Image width={20} height={20} src={"/albums.png"} alt="albums" className="cursor-pointer" />
          <p>Albums</p>
        </Link>
        <Link href={"/"} className="flex w-full items-center gap-4 p-2 hover:bg-slate-100 rounded-lg">
          <Image width={20} height={20} src={"/videos.png"} alt="videos" className="cursor-pointer" />
          <p>Videos</p>
        </Link>
        {/* <Link href={"/"} className="flex w-full items-center gap-4 p-2 hover:bg-slate-100 rounded-lg">
          <Image width={20} height={20} src={"/news.png"} alt="news" className="cursor-pointer" />
          <p>News</p>
        </Link> */}
        <Link href={"/"} className="flex w-full items-center gap-4 p-2 hover:bg-slate-100 rounded-lg">
          <Image width={20} height={20} src={"/settings.png"} alt="settings" className="cursor-pointer" />
          <p>Settings</p>
        </Link>
      </div>
    </div>
  );
};

export default LeftMenu;
