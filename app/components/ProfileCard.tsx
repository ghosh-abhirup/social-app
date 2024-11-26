import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 shadow-md rounded-lg text-xs items-center bg-white flex flex-col gap-4">
      <div className="h-20 w-full relative">
        <Image fill src={"https://images.pexels.com/photos/28758823/pexels-photo-28758823/free-photo-of-serene-backlit-forest-landscape-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="user" className="rounded-md object-cover" />
        <Image
          width={100}
          height={100}
          src={"https://images.pexels.com/photos/28758823/pexels-photo-28758823/free-photo-of-serene-backlit-forest-landscape-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          alt="user"
          className="w-12 h-12 rounded-full object-cover absolute left-0 right-0 m-auto -bottom-6 ring-2 ring-white z-10"
        />
      </div>

      <div className="flex flex-col items-center gap-2 mt-4">
        <p className="font-semibold text-lg">User name</p>
        <div className="flex items-center justify-center gap-2">
          <div className="flex">
            <Image width={12} height={12} src={"https://images.pexels.com/photos/28758823/pexels-photo-28758823/free-photo-of-serene-backlit-forest-landscape-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="user" className="w-3 h-3 rounded-full object-cover " />
            <Image width={12} height={12} src={"https://images.pexels.com/photos/28758823/pexels-photo-28758823/free-photo-of-serene-backlit-forest-landscape-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="user" className="w-3 h-3 rounded-full object-cover " />
            <Image width={12} height={12} src={"https://images.pexels.com/photos/28758823/pexels-photo-28758823/free-photo-of-serene-backlit-forest-landscape-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="user" className="w-3 h-3 rounded-full object-cover " />
          </div>
          <p className="text-xs text-gray-500">500 Followers</p>
        </div>
        <button className="text-white font-semibold bg-blue-500 px-2 py-1 rounded-md">My Profile</button>
      </div>
    </div>
  );
};

export default ProfileCard;
