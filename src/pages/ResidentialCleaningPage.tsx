import BackgroundVideo from "../assets/residential-background.mp4";
import WhatweofferIcon from "../assets/what-we-offer-icon.png"; 
import ApproveIcon from "../assets/approve-icon.png";
import { residentialServiceData } from "../data/ResidentialServicesData";
import ResidentialCustomerInfoForm from "../component/ResidentialCustomerInfoForm";

export default function ResidentialPage() {
  return (
    <section className="Residential">
      <video autoPlay muted loop>
        <source src={BackgroundVideo} type="video/mp4"></source>
        </video>
      <section className="Room-reservation">
        <section id="What-we-offer">
          <div id="what-we-offer-filter">
            <div id="what-we-offer-title">
              <img src={WhatweofferIcon} alt="what-we-offer-icon" id="What-we-offer-icon" />
              <h1>What we offer</h1>
            </div>
            <div id="what-we-offer-list">
              {
                residentialServiceData.length > 0 && residentialServiceData.map(service => (
                  <section id="what-we-offer-list-service" key={service.name}>
                    <img src={ApproveIcon} alt="approve-icon" id="what-we-offer-approve-icon"/>
                    <h1>{service.name}</h1>
                  </section>
                ))
              }
            </div>
          </div>
        </section>
        <section className="Residential-form">
          <ResidentialCustomerInfoForm />
        </section>
      </section>
    </section>
  )
}