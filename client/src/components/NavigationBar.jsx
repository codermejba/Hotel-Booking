import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../assets/styled/Button";
import { Link } from "react-router-dom";
import MenuIcon from "../../public/icon/MenuIcon";
import DropDownArrowIcon from "../../public/icon/DropDownArrowIcon";
import Hamburger from "../assets/styled/Hamburger";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <HeaderSection>
      <Link to="/">
        <img src="/img/logo.png" alt="" />
      </Link>

      <NavBar>
        <Hamburger showMenu={showMenu} setShowMenu={setShowMenu} />
        <ul className={"menu" + (showMenu ? " visible" : "")}>
          <Link to="/">
            <li onClick={() => setShowMenu(false)}>Home</li>
          </Link>
          <Link to="error page">
            <li onClick={() => setShowMenu(false)}>pages</li>
          </Link>
          <li>
            Room
            <DropDownArrowIcon />
            <ul className="dropdown">
              <li>Room Style</li>
              <li>Room Modern</li>
              <li>Room List</li>
              <li>Room Details</li>
            </ul>
          </li>
          <Link to={"blogs"}>
            <li onClick={() => setShowMenu(false)}>Blogs</li>
          </Link>
          <Link to="contact">
            <li onClick={() => setShowMenu(false)}>Contact</li>
          </Link>
        </ul>
      </NavBar>
      <div className="bookNowBtn">
        <Button>
          Book Now{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 16 16"
            id="right-arrow"
          >
            <path
              fill="#ffffff"
              d="M10.3180195,3.6109127 L13.8535534,7.14644661 C14.0488155,7.34170876 14.0488155,7.65829124 13.8535534,7.85355339 L10.3180195,11.3890873 C10.1227573,11.5843494 9.80617485,11.5843494 9.6109127,11.3890873 C9.41565056,11.1938252 9.41565056,10.8772427 9.6109127,10.6819805 L12.292,7.99946609 L2.5,8 C2.25454011,8 2.05039163,7.82312484 2.00805567,7.58987563 L2,7.5 C2,7.25454011 2.17687516,7.05039163 2.41012437,7.00805567 L2.5,7 L12.292,6.99946609 L9.6109127,4.31801948 C9.41565056,4.12275734 9.41565056,3.80617485 9.6109127,3.6109127 C9.80617485,3.41565056 10.1227573,3.41565056 10.3180195,3.6109127 Z"
            ></path>
          </svg>
        </Button>
      </div>
    </HeaderSection>
  );
}

//all header styled are here but Button styled imported
const HeaderSection = styled.div`
  border-bottom: 1px solid var(--primary-color);
  height: 15vh;
  padding: 0px 50px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 999;
  img {
    max-width: 150px;
    cursor: pointer;
  }
  .bookNowBtn {
    @media (max-width: 1000px) {
      display: none;
    }
  }
  @media (max-width: 576px) {
    padding: 0px 10px;
  }
`;
const NavBar = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;

  .visible {
    opacity: 1 !important;
    visibility: visible !important;
  }
  .menu {
    height: 100%;
    display: flex;
    transition: all 0.5s;
    align-items: center;
    margin-bottom: unset;
  }
  li {
    height: 100%;
    position: relative;
    color: var(--white);
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.4s ease-out 0s;
    text-transform: capitalize;
    padding: 0px 30px;
    font-family: var(--heading-font);
    cursor: pointer;
    a {
      transition: color 0.4s ease-out 0s;

      color: var(--white);
    }
    svg {
      height: 15px;
      margin: 5px;
      transition: all 0.3s;
    }

    &:hover,
    a:hover {
      color: var(--primary-color);
      z-index: 1;
    }
    &:hover svg {
      transform: rotate(180deg);
      g,
      path {
        fill: var(--primary-color);
      }
    }
    &:hover .dropdown {
      opacity: 1;
      height: 200px;
      padding: 0px 18px;
    }
  }

  .dropdown {
    width: 200px;
    border: 1px solid black;
    position: absolute;
    left: 0;
    top: 15vh;
    height: 0;
    padding: 0px;
    background: #ffffff;
    transition: all 0.5s;
    overflow: hidden;
    opacity: 0;
    > :last-child {
      border-bottom: none;
    }
    li {
      height: 50px;
      white-space: nowrap;
      color: black;
      display: flex;
      align-items: center;
      padding: 10px 20px;
      border-bottom: 1px solid var(--black);

      &:hover {
        color: var(--primary-color);
      }
    }
  }

  //using media query for navigation bar
  @media (max-width: 1125px) {
    li {
      padding: 35px 20px;
    }
  }
  @media (max-width: 1000px) {
    .menu {
      position: absolute;
      min-height: 100vh;
      margin: 0 auto;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      left: 0;
      right: 0;
      top: 15vh;
      background: var(--white);
      flex-direction: column;
      align-items: normal;
    }
    li {
      display: block;
      color: var(--black);
      a {
        color: var(--black);
        &:hover {
          color: var(--black);
        }
      }
      padding: 15px 35px;
      height: unset;
      border-bottom: 1px solid var(--primary-color);
      svg {
        border-radius: 2px;
        height: 15px;
        margin: 0;
        margin-top: 5px;
        background: var(--primary-color);
        float: right;
      }
      &:hover svg,
      &:active svg {
        g,
        path {
          fill: #ffffff;
        }
      }
      &:hover {
        color: var(--black);
        .dropdown {
          top: 0;
          display: block;
        }
      }
    }

    .dropdown {
      border: 1px solid var(--primary-color);
      width: 100%;
      position: relative;
      display: none;
      margin-top: 10px;
      li {
        border-bottom: inherit;
      }
    }
  }
`;

export default Header;
