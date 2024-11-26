import LeftMenu from "@/app/components/LeftMenu";
import { RightMenu } from "@/app/components/RightMenu";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 p-0 md:p-4 ">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-4">{/* show all of users posts */}</div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userID={"test"} />
      </div>
    </div>
  );
};

export default ProfilePage;
