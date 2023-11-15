import CustomButton from "./form_button";
import "./sideBar.css";
const SideBar = () => {
  return (
    <div className="SidebarMainDiv">
      <div className="LogoDiv">
        <img src="" alt="" />
        <span>Logo</span>
      </div>
      <div className="UserDetailsDiv">
        <img src="" alt="" />
        <span>Aetom</span>
        <span>Role</span>
      </div>
      <div className="DashboardPagesDiv"></div>
      <div className="LogoutBtnDIv">
        <CustomButton text={"Logout"} className={"LogOutButton"} />
      </div>
    </div>
  );
};
export default SideBar;
