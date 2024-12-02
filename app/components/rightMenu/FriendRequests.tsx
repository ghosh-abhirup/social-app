import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendRequests = () => {
  return (
    <div className="p-4 shadow-md rounded-lg overflow-scroll text-xs bg-white flex flex-col gap-4 scrollbar-hide">
      <div className="flex items-center justify-between font-medium">
        <p className="text-gray-500">Friend Requests</p>
        <Link href={"/"} className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image width={40} height={40} src={"https://images.pexels.com/photos/28758823/pexels-photo-28758823/free-photo-of-serene-backlit-forest-landscape-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="user" className="w-10 h-10 rounded-full" />
          <p className="font-semibold">User name</p>
        </div>
        <div className="flex items-center gap-3">
          <Image width={20} height={20} src={"/accept.png"} alt="accept" className="cursor-pointer" />
          <Image width={20} height={20} src={"/reject.png"} alt="reject" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
