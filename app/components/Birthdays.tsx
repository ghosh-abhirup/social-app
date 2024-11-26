import Image from "next/image";
import Link from "next/link";
import React from "react";

const Birthdays = () => {
  return (
    <div className="p-4 shadow-md rounded-lg overflow-scroll text-xs bg-white flex flex-col gap-4 scrollbar-hide">
      <div className="flex items-center justify-between font-medium">
        <p className="text-gray-500">Birthdays</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image width={40} height={40} src={"https://images.pexels.com/photos/28758823/pexels-photo-28758823/free-photo-of-serene-backlit-forest-landscape-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="user" className="w-10 h-10 rounded-full" />
          <p className="font-semibold">User name</p>
        </div>

        <button className="bg-blue-500 px-2 py-1 text-xs text-white font-semibold rounded-md">Celebrate</button>
      </div>

      <div className="rounded-lg p-4 bg-slate-100 flex items-center gap-4">
        <Image width={24} height={24} src={"/gift.png"} alt="gift" />

        <Link href={"/"} className="flex flex-col gap-1 items-start text-xs">
          <p className="text-gray-700 font-semibold">Upcoming Holidays</p>
          <p className="text-gray-500">See the other 16 upcoming birthdays</p>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
