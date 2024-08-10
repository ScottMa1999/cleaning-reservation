import { useNavigate } from "react-router-dom";

function OurServices() {
  // states
  const navigate = useNavigate();

  // function expression
  const handleSamePageNavigation = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <section className="OurService">
      <p className="OurService-title">Our Services</p>
        <ul className="OurService-ul">
          <li>- Residential Cleaning</li>
          <li>- Car Cleaning</li>
        </ul>
      <button className="OurService-button" onClick={() => handleSamePageNavigation('HomeServices')}>MORE INFO</button>
    </section>
  )
}

export default OurServices;