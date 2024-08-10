import SparkCleanLogo from "../assets/sparkClean_transparent.png";
import hamburgerIcon from "../assets/hamburger-icon.png";

// Routs Setup
import { NavLink } from "react-router-dom";

// hooks
import useToggleDrawerContext from "../hooks/useToggleDrawerContext";
import { useEffect } from "react";

// Material UI Component
import Drawer from '@mui/material/Drawer';

export default function NavigationBar() {
  // context
  const { drawerStatus, toggleDrawerStatus } = useToggleDrawerContext();

  // function expression
  const handleHamburgerOnClick = () => {
    toggleDrawerStatus();
  }

  // effects
  useEffect(() => {
    console.log(drawerStatus);
  },[drawerStatus])

  return (
    <nav className="Navigation">
      <section className="logo-title">
        <a href="/"><img src={SparkCleanLogo} alt="sparkClean-logo" className="logo"/></a>
      </section>
      <section className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/order-status">Track Your Order</NavLink>
        <NavLink to="order-payment">Make Payment</NavLink>
      </section>
      <section className="hamburger">
        <button onClick={handleHamburgerOnClick}><img src={hamburgerIcon} alt="hamburger-icon" className="hamburger-icon" /></button>
      </section>
      <Drawer anchor="right" open={drawerStatus} onClose={toggleDrawerStatus}>Test</Drawer>
    </nav>
  )
} 