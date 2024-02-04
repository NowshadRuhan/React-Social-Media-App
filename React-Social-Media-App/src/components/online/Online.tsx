import "../../assets/Online.css";
interface Props {
  user: { id: Number; profilePicture: string; username: string };
}

export const Online = ({ user }: Props) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
};
