import LeftMenu from "@/app/components/LeftMenu";
import { RightMenu } from "@/app/components/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 p-0 md:p-4 ">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image fill src={"https://images.pexels.com/photos/28758823/pexels-photo-28758823/free-photo-of-serene-backlit-forest-landscape-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="user" className=" object-cover" />

              <Image
                width={128}
                height={128}
                src={"https://images.pexels.com/photos/28758823/pexels-photo-28758823/free-photo-of-serene-backlit-forest-landscape-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                alt="user"
                className="w-32 h-32 rounded-full object-cover absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10"
              />
            </div>

            <h1 className="mt-20 mb-4 text-2xl font-medium">User name</h1>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userID={"test"} />
      </div>
    </div>
  );
};

export default ProfilePage;
