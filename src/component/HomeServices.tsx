import { carWashServicesData } from "../data/CarWashServicesData"
import { residentialServiceData } from "../data/ResidentialServicesData";
import CarIcon from "../assets/car-wash.png";
import ApproveIcon from "../assets/approve-icon.png";
import HomeIcon from "../assets/home-icon.png";
import { useNavigate } from "react-router-dom";

export default function HomeServices() {
  const navigate = useNavigate();
  return (
    <section id="HomeServices">
      <h1 className="HomeServices-title">Our Services</h1>
      <section className="HomeServices-lists">
        <section className="HomeService-car">
          <div id="filter"></div>
          <img src={CarIcon} alt="Car-icon" className="Car-icon"/>
          <h1>Car</h1>
          <section className="HomeService-car-services">
            {
              carWashServicesData.length > 0 && carWashServicesData.map(data => (
                <section className="car-services" key={data.id}>
                  <img src={ApproveIcon} alt="approve icon" id="approve-icon" />
                  <p>{data.name}</p>
                </section>
              ))
            }
          </section>
          <button onClick={() => navigate('/car')}>RESERVE NOW</button>
        </section>
        <section className="HomeService-residential">
          <div id="filter"></div>
          <img src={HomeIcon} alt="Home-icon" className="Home-icon" />
          <h1>Residential</h1>
          <section className="HomeService-residential-services">
            {
              residentialServiceData.length > 0 && residentialServiceData.map(service => (
                <section className="home-services" key={service.id}>
                  <img src={ApproveIcon} alt="approve icon" id="approve-icon" />
                  <p>{service.name}</p>
                </section>
              ))
            }
          </section>
          <button onClick={() => navigate('/residential')}>RESERVE NOW</button>
        </section>
      </section>
    </section>
  )
}