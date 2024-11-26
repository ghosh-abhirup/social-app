import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="p-4 rounded-lg bg-white flex gap-4 justify-between text-sm">
      <Image width={48} height={48} src={"https://images.pexels.com/photos/28995805/pexels-photo-28995805/free-photo-of-misty-autumn-landscape-in-norwegian-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="user" className="w-12 h-12 rounded-full object-cover" />

      <div className="flex-1">
        <div className="flex gap-4 w-full">
          <textarea placeholder="What's on your mind?" className="bg-slate-100 rounded-lg p-2 flex-1 font-semibold text-xs" style={{ resize: "none" }} name="" id=""></textarea>
          <Image width={20} height={20} src={"/emoji.png"} alt="emoji" className="self-end w-5 h-5 cursor-pointer" />
        </div>

        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image width={20} height={20} src={"/addimage.png"} alt="addimage" className="self-end w-5 h-5 " />
            <span>Photo</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image width={20} height={20} src={"/addVideo.png"} alt="addVideo" className="self-end w-5 h-5 " />
            <span>Video</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image width={20} height={20} src={"/poll.png"} alt="poll" className="self-end w-5 h-5 " />
            <span>Poll</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image width={20} height={20} src={"/addevent.png"} alt="addevent" className="self-end w-5 h-5 " />
            <span>Event</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
