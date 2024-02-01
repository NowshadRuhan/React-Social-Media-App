import { NavBar } from "../../components/navbar/NavBar";
import { Feed } from "../../components/feed/Feed";
//import { RightBar } from "../../components/rightbar/RightBar";
import { SideBar } from "../../components/sidebar/SideBar";
import "../../assets/Home.css";

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        {/* <RightBar /> */}
      </div>
    </>
  );
};
