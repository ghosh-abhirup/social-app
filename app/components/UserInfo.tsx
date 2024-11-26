import Image from "next/image";
import Link from "next/link";

const UserInfo = ({ userID }: { userID?: String }) => {
  return (
    <div className="p-4 shadow-md rounded-lg overflow-scroll text-xs bg-white flex flex-col gap-4 scrollbar-hide">
      <div className="flex items-center justify-between font-medium">
        <p className="text-gray-500">User</p>
        <Link href={"/"} className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      <div className="flex items-center gap-2 font-medium">
        <p className="text-gray-700 text-xl">User</p>
        <p className="text-gray-500 text-sm">@lamadev</p>
      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatibus, consectetur veniam, alias, id aut placeat minima voluptas molestias amet quisquam ullam odio necessitatibus sed deleniti iste ut accusamus! Nesciunt.</p>

      <div className="flex items-center gap-2">
        <Image width={16} height={16} src={"/map.png"} alt="map" />
        <p className="">
          Living in <b>Denver</b>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Image width={16} height={16} src={"/work.png"} alt="work" />
        <p className="">
          Working as a <b>Software Developer</b>
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image width={16} height={16} src={"/link.png"} alt="link" />
          <Link href={"/"} className="text-blue-500 font-medium">
            lama.dev
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Image width={16} height={16} src={"/date.png"} alt="date" />
          <p>Joined in November, 2020</p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <button className="w-full bg-blue-500 font-medium text-white py-2 rounded-md">Follow</button>

        <p className="text-xs cursor-pointer text-red-600 font-medium self-end">Block user</p>
      </div>
    </div>
  );
};

export default UserInfo;
