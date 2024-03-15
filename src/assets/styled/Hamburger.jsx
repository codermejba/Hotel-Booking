import React, { useState } from "react";
import styled from "styled-components";

const Hamburger = ( { showMenu, setShowMenu }) => {
  
  return (
    <Hamburg>
      <div id="hamburgIcon" className=" d-flex d-lg-none" onClick={() => setShowMenu(!showMenu)}>
        <div id="hamburg" className={showMenu ? "clicked" : ""} ></div>
      </div>
    </Hamburg>
  );
};
const Hamburg = styled.div`
  #hamburgIcon {
    height: 40px;
    width: 40px;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    #hamburg {
      height: 2px;
      width: 100%;
      background: #ffffff;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        margin-top: -10px;
        width: 100%;
        height: 2px;
        background: #ffffff;
        transform: rotate(0deg);
        transition: margin-top 0.3s 0.3s, transform 0.3s 0s;
      }
      &::after {
        content: "";
        position: absolute;
        margin-top: 10px;
        width: 100%;
        height: 2px;
        background: #ffffff;
        transform: rotate(0deg);
        transition: margin-top 0.3s 0.3s, transform 0.3s 0s;
      }
    }
  }
  .clicked {
    background: transparent !important;
  }
  .clicked::before {
    margin-top: 0 !important;
    transform: rotate(45deg) !important;
    transition: margin-top 0.3s, transform 0.3s 0.3s !important;
  }
  .clicked::after {
    margin-top: 0 !important;
    transform: rotate(-45deg) !important;
    transition: margin-top 0.3s, transform 0.3s 0.3s !important;
  }
`;
export default Hamburger;
