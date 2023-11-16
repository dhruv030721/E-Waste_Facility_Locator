import NavBar from "../components/navbar.jsx";
import VideoBg from "../components/video_bg.jsx";
import HomeSection1 from "../components/home_section-1.jsx";
import CopyRightFooter from "../components/copyright_footer.jsx";
import Footer from "../components/footer.jsx";
import "./home_page.css";

const HomePage = () => {
  return (
    <>
      <div id="homepage-section-1">
        <HomeSection1 />
        {/* <VideoBg /> */}
        <NavBar />
      </div>
      <div id="homepage-section-2"></div>
      <div id="homepage-section-3">
        <Footer></Footer>
      </div>
      <CopyRightFooter></CopyRightFooter>
    </>
  );
};

export default HomePage;
