"use client";

const UserInfoInteraction = ({ userID, loggedInUserID, isBlocked, isFollowing, isFollowingRequestSent }: { userID: string; loggedInUserID: string; isBlocked: Boolean; isFollowing: Boolean; isFollowingRequestSent: Boolean }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <button disabled={!isFollowing && isFollowingRequestSent} className="w-full bg-blue-500 font-medium text-white py-2 rounded-md">
        {isFollowing ? "Following" : isFollowingRequestSent ? "Request sent" : "Follow"}
      </button>

      <p className="text-xs cursor-pointer text-red-600 font-medium self-end">{isBlocked ? "Unblock user" : "Block user"}</p>
    </div>
  );
};

export default UserInfoInteraction;
