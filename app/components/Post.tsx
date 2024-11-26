import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={"https://images.pexels.com/photos/28758823/pexels-photo-28758823/free-photo-of-serene-backlit-forest-landscape-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="user" width={40} height={40} className="w-10 h-10 rounded-full" />
          <p className="font-medium">User name</p>
        </div>

        <Image src={"/more.png"} alt="more" width={12} height={12} />
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="min-h-96 w-full relative ">
          <Image fill src={"https://images.pexels.com/photos/28758823/pexels-photo-28758823/free-photo-of-serene-backlit-forest-landscape-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="post" className="rounded-md object-cover" />
        </div>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore, fugiat est cum obcaecati consequatur animi vitae aspernatur temporibus tenetur!</p>
      </div>

      <div className="flex items-center justify-between text-sm mb-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src={"/like.png"} alt="like" width={16} height={16} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 font-medium">
              123 <span className="hidden md:inline-block">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src={"/comment.png"} alt="comment" width={16} height={16} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 font-medium">
              123 <span className="hidden md:inline-block">Comments</span>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src={"/share.png"} alt="share" width={16} height={16} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 font-medium">
              123 <span className="hidden md:inline-block">Shares</span>
            </span>
          </div>
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default Post;
