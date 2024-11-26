import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";
import UserInfo from "./UserInfo";

export const RightMenu = ({ userID }: { userID?: String }) => {
  return (
    <div className="flex flex-col gap-6">
      {userID && <UserInfo userID={userID} />}
      <FriendRequests />
      <Birthdays />
    </div>
  );
};
