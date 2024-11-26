import Image from "next/image";

const Comments = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4 ">
        <Image width={32} height={32} src={"https://images.pexels.com/photos/28758823/pexels-photo-28758823/free-photo-of-serene-backlit-forest-landscape-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="user" className="w-8 h-8 rounded-full" />

        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2">
          <input type="text" placeholder="Write a comment ..." className="bg-transparent outline-none flex-1" name="" id="" />
          <Image width={16} height={16} src={"/emoji.png"} alt="emoji" className="cursor-pointer" />
        </div>
      </div>
      <div>
        <div className="flex items-start gap-4 ">
          <Image width={40} height={40} src={"https://images.pexels.com/photos/28758823/pexels-photo-28758823/free-photo-of-serene-backlit-forest-landscape-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="user" className="w-10 h-10 rounded-full" />

          <div className="flex-1 ">
            <p className="font-medium ">User name</p>
            <p className="line-clamp-3 mt-[4px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde quaerat reprehenderit odit dolorum eaque magnam dolores sapiente, rem consectetur tenetur. Doloribus vero voluptatum libero recusandae quasi atque quos cumque?</p>

            <div className="flex items-center gap-4 mt-[4px]">
              <Image src={"/like.png"} alt="like" width={16} height={16} className="cursor-pointer" />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500 font-medium">
                123 <span className="hidden md:inline-block">Likes</span>
              </span>

              <span className="text-gray-400 ml-4 font-medium">Reply</span>
            </div>
          </div>

          <Image width={16} height={16} src={"/more.png"} alt="more" className="cursor-pointer w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Comments;
