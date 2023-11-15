import NavBar from "../components/navbar.jsx";
import VideoBg from "../components/video_bg.jsx";
import HomeSection1 from "../components/home_section-1.jsx";
import HomeSection2 from "../components/home_section-2.jsx";
import './home_page.css'

const HomePage = () => {
  return (
    <>
      <div id="homepage-section-1">
        <HomeSection1 />
        {/* <VideoBg /> */}
        <NavBar />
      </div>
     <section id="homepage-section-2">
     <HomeSection2/>
     </section>
    </>
  );
};

export default HomePage;
