// components
import HomeWelcome from "../component/HomeWelcome";
import HomeIntroduction from "../component/HomeIntroduction";
import HomeProjects from "../component/HomeProjects";
import HomeServices from "../component/HomeServices";
import HomeFooter from "../component/HomeFooter";

function HomePage() {
  return (
    <section className="Home">
      <HomeWelcome title="Ange's Cleaning Business" description="Recreating Dream Homes That Last"/>
      <HomeIntroduction />
      <HomeServices />
      <HomeProjects />
      <HomeFooter />
    </section>
  )
}

export default HomePage;
