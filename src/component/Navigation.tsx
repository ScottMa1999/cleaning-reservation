import logo from "../assets/react.svg";

// Routs Setup
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav className="Navigation">
      <section className="logo-title">
        <img src={logo} alt="react-test-logo" className="logo"/>
        <h1>Ange's Cleaning Business</h1>
      </section>
      <section className="links">
        <NavLink to="/">Check Our Services</NavLink>
        <NavLink to="/order-status">Track Your Order</NavLink>
        <NavLink to="order-payment">Make Payment</NavLink>
      </section>
    </nav>
  )
}