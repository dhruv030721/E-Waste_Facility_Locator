import NavBar from "../components/navbar.jsx";
import VideoBg from "../components/video_bg.jsx";
import HomeTitle from "../components/home_title.jsx";
import './home_page.css'

const HomePage = () => {
  return (
    <>
      <div id="home-page">
        <HomeTitle />
        <VideoBg />
        <NavBar />
      </div>
    </>
  );
};

export default HomePage;
