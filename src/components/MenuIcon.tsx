import React from 'react';
import { NavLink } from 'react-router-dom'

// Menu icon and hide on mobile devices

interface IMenuIcon {
  link?: any;
  icon?: any;
  hideOnMobile?: any
  quantity?: number
}

const MenuIcon: React.FC<IMenuIcon> = ({ link, icon, hideOnMobile }) => {

  return (
    <NavLink className={`menu-icon ${hideOnMobile ? "d-none d-md-flex" : ""} `} to={link}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme"></span>
      <i className={icon}></i>
    </NavLink>
  )
}

export default MenuIcon