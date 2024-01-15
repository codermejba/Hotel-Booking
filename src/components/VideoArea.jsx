import React from "react";
import styled from "styled-components";
import VideoButton from "./VideoButton";

const VideoArea = () => {
  return (
    <Main>
      <div className="contentSection">
        <h2>Book hotel rooms, get deals & book flights online.</h2>
        <VideoButton />
      </div>
    </Main>
  );
};

const Main = styled.div`
  position: relative;
  height: 80vh;
  background: url("img/video.jpg") center center/cover;
  background-attachment: fixed;
  color: white;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: #00000042;
    z-index: -1;
  }
  .contentSection {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 10vw;
    gap: 5rem;
    justify-content: center;
    h2 {
      width: 70%;
      padding: 10px;
      letter-spacing: 2px;
      font-size: 2.5rem;
      font-family: var(--heading-font);
      line-height: 3.2rem;
      text-align: center;
    }
  }

  @media (max-width: 992px) {
    /* styles for laptops and small desktops */
    .contentSection {
      flex-direction: column;
      margin: 0;
    }
  }
  @media (max-width: 768px) {
    /* styles for tablets */
    .contentSection h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 576px) {
    /* styles for phones */
    .contentSection {
      h2 {
        width: 100%;
      }
    }
  }
`;

export default VideoArea;
