import Feed from "@/app/components/feed/Feed";
import LeftMenu from "@/app/components/leftMenu/LeftMenu";
import { RightMenu } from "@/app/components/rightMenu/RightMenu";
import prisma from "@/app/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProfilePage = async ({ params }: { params: { id: string } }) => {
  const username = await params?.id;

  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });

  if (!user) {
    return notFound();
  }

  let isBlocked;
  const { userId: loggedInUser } = auth();

  if (loggedInUser) {
    const res = await prisma.blockRequests.findFirst({
      where: {
        blockerID: user.id,
        blockedID: loggedInUser,
      },
    });

    if (res) {
      isBlocked = true;
    } else {
      isBlocked = false;
    }
  }

  if (isBlocked) {
    return notFound();
  }

  return (
    <div className="flex gap-6 p-0 md:p-4 ">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image fill src={user.coverPic || "/noCover.png"} alt="coverPic" className=" object-cover" />

              <Image width={128} height={128} src={user.avatar || "/noAvatar.png"} alt="avatar" className="w-32 h-32 rounded-full object-cover absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10" />
            </div>

            <h1 className="mt-20 text-2xl font-medium">{user.firstName && user.lastName ? user.firstName + " " + user.lastName : user.username}</h1>
          </div>

          <div className="flex items-center justify-center gap-12">
            <div className="flex flex-col gap-2 items-center">
              <p className="font-medium">{user._count.posts}</p>
              <p className="text-sm">Posts</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="font-medium">{user._count.followers}</p>
              <p className="text-sm">Followers</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="font-medium">{user._count.followings}</p>
              <p className="text-sm">Following</p>
            </div>
          </div>

          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
