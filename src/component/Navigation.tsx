import SparkCleanLogo from "../assets/sparkClean_transparent.png";
import hamburgerIcon from "../assets/hamburger-icon.png";

// Routs Setup
import { NavLink, useNavigate } from "react-router-dom";

// hooks
import useToggleDrawerContext from "../hooks/useToggleDrawerContext";
import { useEffect } from "react";

// Material UI Component
import Drawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const drawerWidth = 200;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2.2, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function NavigationBar() {
  // context
  const { drawerStatus, toggleDrawerStatus } = useToggleDrawerContext();
  const theme = useTheme();
  const navigate = useNavigate();

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
      
      <Drawer anchor="right" open={drawerStatus} onClose={toggleDrawerStatus} sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': {width: drawerWidth, backgroundColor:"black"} }}>
        <DrawerHeader>
          <IconButton onClick={toggleDrawerStatus}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon fontSize="large" sx={{color: 'white'}}/> : <ChevronRightIcon fontSize="large" sx={{color: 'white'}}/>}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{borderColor: 'white'}}/>
        <List>
          <ListItem key={"Home"} disablePadding>
            <ListItemButton onClick={() => {
              toggleDrawerStatus();
              navigate('/');
            }}>
              <ListItemIcon><HomeIcon fontSize="medium" sx={{color: 'white'}} /></ListItemIcon>
              <ListItemText primary={'Home'} sx={{color: 'white'}}/>
            </ListItemButton>
          </ListItem>
          <ListItem key={"Track Your Order"} disablePadding>
            <ListItemButton onClick={() => {
              toggleDrawerStatus();
              navigate('/order-status');
            }}>
              <ListItemIcon><GpsFixedIcon fontSize="medium" sx={{color: 'white'}} /></ListItemIcon>
              <ListItemText primary={'Track Order'} sx={{color: 'white'}}/>
            </ListItemButton>
          </ListItem>
          <ListItem key={"Make Payment"} disablePadding>
            <ListItemButton onClick={() => {
              toggleDrawerStatus();
              navigate('/order-payment');
            }}>
              <ListItemIcon><AccountBalanceWalletIcon fontSize="medium" sx={{color: 'white'}}/></ListItemIcon>
              <ListItemText primary={'Make Payment'} sx={{color: 'white'}}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </nav>
  )
} 