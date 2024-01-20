import React from "react";
import styled from "styled-components";
import SocialLinkIcons from "./SocialLinkIcons";
import Information from "./Information";
import DownArrowIcon from "../../public/icon/DownArrowIcon";
import DoneIcon from "../../public/icon/DoneIcon";

const FooterContainer = () => {
  return (
    <FooterContainerSec>
      <div className="container">
        <div className="row">
          <div className="footerCard col-lg-3 col-md-6">
            <h5><div className=" logo ">
              <img src="img/logo.png" alt="Logo" />
            </div></h5>
            <div className="cardBody">
              <p>
                Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus
              </p>
              <div className=" mt-5">

              <SocialLinkIcons />
              </div>
            </div>
          </div>
          <div className="footerCard col-lg-3 col-md-6">
            <div className="CardTitle">
              <h5>Information</h5>
            </div>
            <Information />
          </div>
          <div className="footerCard col-lg-3 col-md-6">
            <div className="CardTitle">
              <h5>Pages Links</h5>
            </div>
            <div className="cardBody iconSlider ">
              <div>
                <a href="/">
                  <DownArrowIcon />
                  About Us
                </a>
              </div>
              <div>
                <a href="/">
                  <DownArrowIcon />
                  Blog
                </a>
              </div>
              <div>
                <a href="/">
                  <DownArrowIcon />
                  Contact Us
                </a>
              </div>
              <div>
                <a href="/">
                  <DownArrowIcon />
                  Room List
                </a>
              </div>
            </div>
          </div>
          <div className="footerCard col-lg-3 col-md-6">
            <div className="CardTitle">
              <h5>Subscribe</h5>
            </div>
            <div className="cardBody subscription">
              <input type="email" placeholder="Email Address" name="email" />
              <div className="">
                <DoneIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterContainerSec>
  );
};
const FooterContainerSec = styled.div`
padding: 50px 0;
  background: #000;
  color: white;
  .logo {
    cursor: pointer;
    height: 35px;
    img {
      height: 100%;
      width: 60%;
    }
  }
 
  .footerCard {
    padding-top: 50px;
  }
 .CardTitle {
    margin-top:8px;
  }
  .cardBody{
    margin: 30px 0;
    p,a{
        margin-bottom: .5em !important;
    }
  }
  .subscription {
    display: flex;

    input,
    input:focus {
      background: none;
      border: 1px solid var(--primary-color);
      outline: none;
      box-shadow: none;
    }

    input {
      border: 1px solid var(--color-1);
      width: 100%;
      font-size: 16px;
      color: white;
      padding: 10px;
    }
    svg {
      background: var(--primary-color);
      height: 50px;
      padding: 8px;
    }
  }


  .iconSlider {
    svg {
      height: 15px;
      width: 15px;
      transform: rotate(270deg);
      float: left;
      z-index: -11;
      transition: all 0.5s;
      opacity: 0;
    }
    a {
      margin-left: -15px;
      display: block;
      transition: all 0.5s;

      &:hover {
        margin-left: 8px;
        svg {
          height: 15px;
          opacity: 1;
          path {
            fill: var(--primary-color);
          }
        }
      }
    }
  }
`;
export default FooterContainer;
