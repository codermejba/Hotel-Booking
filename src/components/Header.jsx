import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

function Header() {
  return (
    <HeaderSection>
      <div>
        <img src="/img/logo.png" alt="" />
      </div>

      <NavBar>
        <input type="checkbox" id="check" />
        <label for="check" className="checkedbtn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Menu">
            <g data-name="Layer 2" fill="#ffffff" class="color000000 svgShape">
              <g data-name="menu" fill="#ffffff" class="color000000 svgShape">
                <rect
                  width="18"
                  height="2"
                  x="3"
                  y="11"
                  rx=".95"
                  ry=".95"
                  fill="#ffffff"
                  class="color000000 svgShape"
                ></rect>
                <rect
                  width="18"
                  height="2"
                  x="3"
                  y="16"
                  rx=".95"
                  ry=".95"
                  fill="#ffffff"
                  class="color000000 svgShape"
                ></rect>
                <rect
                  width="18"
                  height="2"
                  x="3"
                  y="6"
                  rx=".95"
                  ry=".95"
                  fill="#ffffff"
                  class="color000000 svgShape"
                ></rect>
              </g>
            </g>
          </svg>
        </label>
        <ul className="menu">
          <li>Home</li>
          <li>Pages</li>
          <li>
            Room
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="DownArrow"
            >
              <g
                data-name="Layer 2"
                fill="#ffffff"
                class="color000000 svgShape"
              >
                <g
                  data-name="arrowhead-down"
                  fill="#ffffff"
                  class="color000000 svgShape"
                >
                  <path
                    d="M17.37 12.39 12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z"
                    fill="#ffffff"
                    class="color000000 svgShape"
                  ></path>
                  <path
                    d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z"
                    fill="#ffffff"
                    class="color000000 svgShape"
                  ></path>
                </g>
              </g>
            </svg>
            <ul className="dropdown">
              <li>Room Style</li>
              <li>Room Modern</li>
              <li>Room List</li>
              <li>Room Details</li>
            </ul>
          </li>
          <li>Blog</li>
          <li>Contact</li>
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
  border-bottom: 1px solid var(--color-2);
  height: 15vh;
  padding: 0px 50px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 150px;
    cursor: pointer;
  }
  .bookNowBtn {
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;
const NavBar = styled.nav`
  #check,
  .checkedbtn {
    display: none;
    cursor: pointer;
  }
  .checkedbtn svg {
    height: 50px;
  }
  .menu {
    display: flex;
    transition: all 0.5s;
    align-items: center;
  }
  li {
    position: relative;
    color: var(--white);
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
    transition: all 0.4s ease-out 0s;
    text-transform: capitalize;
    padding: 30px;
    font-family: var(--heading-font);
    cursor: pointer;
    svg {
      height: 15px;
      margin: 5px;
      transition: all 0.3s;
    }

    &:hover {
      color: var(--primary-color);
    }
    &:hover svg {
      transform: rotate(180deg);
      g,
      path {
        fill: var(--primary-color);
      }
    }
    &:hover .dropdown {
      top: 15vh;
    }
  }

  .dropdown {
    border: 1px solid black;
    padding: 0px 18px;
    position: absolute;
    width: 218px;
    left: 0;
    top: -115vh;
    z-index: -999;
    background: #ffffff;
    transition: all 0.5s;
    > :last-child {
      border-bottom: none;
    }
    li {
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

  @media (max-width: 1000px) {
    .checkedbtn {
      display: block;
    }
    //css logic for toggle .menu
    
    #check:checked ~ .menu {
      top: 15vh;
    }
    .menu {
      position: fixed;
      height: 50vh;
      margin: 0 auto;
      left: 10vw;
      right: 10vw;
      top: -100%;
      background: var(--white);
      flex-direction: column;
      align-items: normal;
    }
    li {
      display: block;
      color: var(--black);
      padding: 10px 35px;
      border-bottom: 1px solid var(--primary-color);
      svg {
        border-radius: 2px;
        height: 20px;
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
