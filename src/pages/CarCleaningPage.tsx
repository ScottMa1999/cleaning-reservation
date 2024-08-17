import BackgroundVideo from "../assets/car-background.mp4";
import WhatweofferIcon from "../assets/what-we-offer-icon.png";
import {carWashServicesData} from "../data/CarWashServicesData";
import ApproveIcon from "../assets/approve-icon.png";

import CustomerInfoForm from "../component/CustomerInfoForm";

export default function CarCleaningPage() {
  return (
    <section className="Car">
      <video autoPlay muted>
        <source src={BackgroundVideo} type="video/mp4"></source>
        </video>
      <section className="Car-reservation">
        <section className="What-we-offer">
          <div className="what-we-offer-filter">
            <div className="what-we-offer-title">
              <img src={WhatweofferIcon} alt="what-we-offer-icon" id="What-we-offer-icon" />
              <h1>What we offer</h1>
            </div>
            <div className="what-we-offer-list">
              {
                carWashServicesData.length > 0 && carWashServicesData.map(service => (
                  <section className="what-we-offer-list-service" key={service.name}>
                    <img src={ApproveIcon} alt="approve-icon" id="what-we-offer-approve-icon"/>
                    <h1>{service.name}</h1>
                  </section>
                ))
              }
            </div>
          </div>
        </section>
        <section className="Car-form">
          <CustomerInfoForm />
        </section>
      </section>
    </section>
  )
}