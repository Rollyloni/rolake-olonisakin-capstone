import React from "react";
import "../Header/Header.scss";
import siteLogo from "../../assets/Group 2.png";
import dashboardIcon from "../../assets/dashboard.png";
import notificationIcon from "../../assets/notification.png";
import avatarIcon from "../../assets/Ellipse 1.png";
import { NavLink } from "react-router-dom";
import { FaShoppingBasket, FaUsers } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { ImSearch } from "react-icons/im";
const Header = () => {
  return (
    <header>
      <article>
        <NavLink to="/" className="navbar__link">
          <img src={siteLogo} alt="site logo" width="30px" />
        </NavLink>
      </article>
      <article>
        <ul className="navbar__container">
          <NavLink to="/" className="navbar__link">
            <li>
              <img
                src={dashboardIcon}
                alt="dashboard icon"
                className="navbar__icon"
              />
              Dashboard
            </li>
          </NavLink>
          <NavLink to="/orders" className="navbar__link">
            <li>
              <FaShoppingBasket className="navbar__icon" />
              Orders
            </li>
          </NavLink>
          <NavLink to="/customers" className="navbar__link">
            <li>
              <FaUsers className="navbar__icon" />
              Customers
            </li>
          </NavLink>
          <NavLink to="/" className="navbar__link">
            <li>
              <IoIosSettings className="navbar__icon" />
              Settings
            </li>
          </NavLink>
        </ul>
      </article>
      <section>
        <ImSearch />

        <img
          src={notificationIcon}
          alt="notidication icon"
          className="navbar__edge--icon"
        />
        <img
          src={avatarIcon}
          alt="avatar icon"
          className="navbar__edge--icon"
          width="60px"
        />
      </section>
    </header>
  );
};

export default Header;
