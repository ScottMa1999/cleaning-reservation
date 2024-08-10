import AddressIcon from "../assets/address-icon.png";
import EmailIcon from "../assets/email-icon.png";
import PhoneIcon from "../assets/phone-icon.png";
import FaceBookIcon from "../assets/facebook-icon.png";
import InstagramIcon from "../assets/Instagram-icon.png";
import YelpIcon from "../assets/yelp-icon.png";

import { ContactInformation } from "../data/ContactInformation";


export default function HomeFooter() {
  return (
    <section className="HomeFooter">
      <h1 className="HomeFooter-title">Contact Us</h1>
      <section className="contact-information">
        <div className="address">
          <img src={AddressIcon} alt="address-icon" className="address-icon" />
          <p>{ContactInformation.address}</p>
        </div>
        <div className="email">
          <img src={EmailIcon} alt="email-icon" className="email-icon" />
          <p>{ContactInformation.email}</p>
        </div>
        <div className="phone-number">
          <img src={PhoneIcon} alt="phone-icon" className="phone-icon" />
          <p>{ContactInformation.phoneNumber}</p>
        </div>
      </section>
      <section className="social-media">
        <a href="https://www.facebook.com/" target="_blank"><img src={FaceBookIcon} alt="facebook-icon" id="social-media-icon" /></a>
        <a href="https://www.instagram.com/" target="_blank"><img src={InstagramIcon} alt="instagram-icon" id="social-media-icon" /></a>
        <a href="https://www.instagram.com/" target="_blank"><img src={YelpIcon} alt="yelp-icon" id="social-media-icon" /></a>
      </section>
    </section>
  )
}