import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import navlinks from "../../../constants/navlinks";
import Signin from "../../../auth/Signin";
import Signup from "../../../auth/Signup";
import { MdArrowDropDown } from "react-icons/md";

const Toolbar = (props) => {
  const location = props.location.pathname;

  return (
    <header>
      <nav className="toolbar_navigation">
        <div className="toolbar_toggle_button">
          <DrawerToggleButton
            handleDrawerToggleClick={props.handleDrawerToggleClick}
          />
        </div>
        <div className="toolbar_logo">
          <Link to="/">
            <img
              src={require("../../../../assets/img/a1000coupons_logo.png")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="toolbar_navigation_items">
          <ul className="categories">
            <li>
              Browse Categorires
              <MdArrowDropDown className="categories_dropdown-icon" />
              <ul className="categories__dropdown">
                <li>
                  <Link to="graphics">Graphics & Vectors</Link>
                </li>
                <li>
                  <Link to="/fonts">Fonts</Link>
                </li>
                <li>
                  <Link to="animations">Motions & Animations</Link>
                </li>
                <li>
                  <Link to="modelstextures">3D Models & Textures</Link>
                </li>
                <li>
                  <Link to="photosimages">Photos & Images</Link>
                </li>
                <li>
                  <Link to="musicsound">Music & Sound</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Stores</Link>
            </li>
            <li>
              <Link>Hot Deals</Link>
            </li>
            <li>
              <Link>Sell</Link>
            </li>
          </ul>

          <article>
            {location === "/" && (
              <form>
                <input
                  type="text"
                  placeholder="Search for Templates, Pictures, Music and More"
                />
              </form>
            )}

            <ul className="login_signup">
              {location === "/" ? (
                <li>
                  <Signin />
                </li>
              ) : (
                <li className="dashbaord-dropdown">
                  <article>
                    {/* <img
                    src={require("../../../../assets/img/76.png")}
                    alt="user"
                  /> */}
                    <h5>Johnstine</h5>
                  </article>

                  <ul>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/messages">Message</Link>
                    </li>

                    <li>
                      <Link to="/settings">Settings</Link>
                    </li>
                    <li>
                      <Link to="/dashboard">Logout</Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </article>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Toolbar);
