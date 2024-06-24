import React from 'react'
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <h1>Co-Working Space Booking System</h1>
          <div className="nav">
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/available'>Available Desk</NavLink>
              <NavLink to='/booked'>Booked Desk</NavLink>
              
      </div>
    </div>
  );
}

export default Header