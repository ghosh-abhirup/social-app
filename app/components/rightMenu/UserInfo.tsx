import prisma from "@/app/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import UserInfoInteraction from "./UserInfoInteraction";

const UserInfo = async ({ user }: { user?: User }) => {
  const createdAtDate = new Date(user?.createdAt);
  const formattedDate = createdAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let isBlocked = false;
  let isFollowing = false;
  let isFollowingRequestSent = false;

  const { userId: currentUser } = await auth();

  if (currentUser) {
    const blockedUser = await prisma.blockRequests.findFirst({
      where: {
        blockerID: currentUser,
        blockedID: user?.id,
      },
    });

    blockedUser ? (isBlocked = true) : (isBlocked = false);

    const followRes = await prisma.follower.findFirst({
      where: {
        followerID: currentUser,
        followingID: user?.id,
      },
    });

    followRes ? (isFollowing = true) : (isFollowing = false);

    const followerRequestRes = await prisma.followerRequests.findFirst({
      where: {
        senderID: currentUser,
        recieverID: user?.id,
      },
    });

    followerRequestRes ? (isFollowingRequestSent = true) : (isFollowingRequestSent = false);
  }

  return (
    <div className="p-4 shadow-md rounded-lg overflow-scroll text-xs bg-white flex flex-col gap-4 scrollbar-hide">
      <div className="flex items-center justify-between font-medium">
        <p className="text-gray-500">User</p>
        <Link href={"/"} className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      <div className="flex items-center gap-2 font-medium">
        <p className="text-gray-700 text-xl">{user?.firstName && user?.lastName ? user?.firstName + " " + user?.lastName : user?.username}</p>
        <p className="text-gray-500 text-sm">@{user?.username}</p>
      </div>

      <p>{user?.desc}</p>

      {user?.city && (
        <div className="flex items-center gap-2">
          <Image width={16} height={16} src={"/map.png"} alt="map" />
          <p className="">
            Living in <b>{user.city}</b>
          </p>
        </div>
      )}

      {user?.work && (
        <div className="flex items-center gap-2">
          <Image width={16} height={16} src={"/work.png"} alt="work" />
          <p className="">
            Working as a <b>{user?.work}</b>
          </p>
        </div>
      )}
      <div className="flex items-center justify-between">
        {user?.website && (
          <div className="flex items-center gap-2">
            <Image width={16} height={16} src={"/link.png"} alt="link" />
            <Link href={user?.website} className="text-blue-500 font-medium">
              user?.website
            </Link>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Image width={16} height={16} src={"/date.png"} alt="date" />
          <p>Joined in {formattedDate}</p>
        </div>
      </div>

      <UserInfoInteraction userID={user?.id} loggedInUserID={currentUser} isBlocked={isBlocked} isFollowing={isFollowing} isFollowingRequestSent={isFollowingRequestSent} />
    </div>
  );
};

export default UserInfo;
