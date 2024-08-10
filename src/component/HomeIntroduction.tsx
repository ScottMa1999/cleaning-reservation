// component
import OurServices from "./OurServices";
import AboutUs from "./AboutUs";

// icons
import ratingIcon from "../assets/rating-icon.png";
import teamIcon from "../assets/team-icon.png";
import highFinishIcon from "../assets/finish-icon.png";
import supportIcon from "../assets/support-icon.png";


function HomeIntroduction() {
  return (
    <section className="HomeIntroduction">
      <div className="HomeIntroduction-service-image"></div>
      <div className="HomeIntroduction-service-list"><OurServices /></div>
      <div className="HomeIntroduction-icon-1">
        <img src={ratingIcon} alt="rating-icon" className="rating-icon"/>
        <p>Vast Experience</p>
      </div>
      <div className="HomeIntroduction-icon-2">
        <img src={teamIcon} alt="team-icon" className="team-icon"/>
        <p>Professional Team</p>
      </div>
      <div className="HomeIntroduction-icon-3">
        <img src={highFinishIcon} alt="highFinish-icon" className="highFinish-icon"/>
        <p>High Finish</p>
      </div>
      <div className="HomeIntroduction-icon-4">
        <img src={supportIcon} alt="support-icon" className="support-icon"/>
        <p>24h Support</p>
      </div>
      <div className="HomeIntroduction-about-description"><AboutUs /></div>
      <div className="HomeIntroduction-about-image"></div>
    </section>
  )
}

export default HomeIntroduction;