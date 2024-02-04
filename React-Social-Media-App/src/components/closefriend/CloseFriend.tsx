import "../../assets/CloseFriend.css";
interface Props {
  user: { id: Number; profilePicture: string; username: string };
}
export const CloseFriend = ({ user }: Props) => {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};
