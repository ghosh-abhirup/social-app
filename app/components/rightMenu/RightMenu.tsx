import { User } from "@prisma/client";
import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";

import { Suspense } from "react";
import UserInfo from "./UserInfo";

export const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user && (
        <Suspense fallback="loading">
          <UserInfo user={user} />
        </Suspense>
      )}
      <FriendRequests />
      <Birthdays />
    </div>
  );
};
