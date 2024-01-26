import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {

  const getUsernameFromLocalStorage = () => {
    // Logic to get the username from Local Storage
    // For example, assuming you stored it with the key "username"
    const storedUsername = localStorage.getItem('username');
    return storedUsername || 'GUEST';
  };

  const handleLogoClick = () => {
    // Navigate to "ALLGARDENS" page
  };

  const handleLogoutClick = () => {
    // Handle logout logic
  };

  const handleAddGardenClick = () => {
    // Handle add garden logic
  };

  const handleAddUserClick = () => {
    // Handle add user logic
  };


  return <>
  
  <Header
        onLogoClick={handleLogoClick}
        onLogoutClick={handleLogoutClick}
        onAddGardenClick={handleAddGardenClick}
        onAddUserClick={handleAddUserClick}
        username={getUsernameFromLocalStorage() }
      />
  
  <Outlet />

  <Footer/>
  </>

};

export default Layout;