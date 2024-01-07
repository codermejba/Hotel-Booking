import React, { useState } from "react";
import styled from "styled-components";

const Landing = () => {
  //useState for auto play video
  const [playVideosrc, setPlayVideosrc] = useState();
  function playVideo() {
    setPlayVideosrc("https://www.youtube.com/embed/2u4QKDoA5cc?si=8ZE0hIsSV4I33hME&autoplay=1");
  }
  return (
    <LandingSection>
      <div className="landingBg">
        <h1>The Best Hotel</h1>
        <h2>Deals in the World</h2>
        <div>
          <input type="checkbox" id="play" />
          <label htmlFor="play" onClick={playVideo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 512 512"
              viewBox="0 0 512 512"
              id="video-player"
            >
              <path
                d="M414.233,246.999L180.627,133.949c-3.098-1.5-6.75-1.3-9.668,0.529c-2.917,1.829-4.688,5.029-4.688,8.472V369.05
	c0,3.442,1.771,6.644,4.688,8.473c1.618,1.015,3.462,1.527,5.313,1.527c1.486,0,2.976-0.331,4.355-0.999l233.606-113.05
	c3.452-1.67,5.644-5.167,5.644-9.001C419.877,252.166,417.685,248.669,414.233,246.999z M186.271,353.101V158.899L386.921,256
	L186.271,353.101z M256,0C114.841,0,0,114.841,0,256c0,141.159,114.841,256,256,256s256-114.841,256-256
	C512,114.841,397.159,0,256,0z M256,492C125.869,492,20,386.131,20,256C20,125.87,125.869,20,256,20S492,125.87,492,256
	C492,386.131,386.131,492,256,492z"
              ></path>
            </svg>
          </label>
          <iframe
            width="700"
            height="400"
            src={playVideosrc}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      
    </LandingSection>
  );
};

const LandingSection = styled.div`
    height: 100vh;
  .landingBg {
      height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    color: white;
    font-family: var(--heading-font);
    font-size: 2.5rem;
    h1 {
      margin: 100px 0 0 100px;
    }
    h2 {
      margin: 0 0 0 300px;
    }
    #play {
      display: none;
    }
    #play:checked ~ iframe {
      display: block;
    }
    label {
      svg {
        height: 100px;
        position: absolute;
        right: 10%;
        bottom: 10%;
        cursor: pointer;
        path {
          fill: white;
        }
      }
    }
    iframe {
      position: absolute;
      top: 0;
      right: 0;
      display: none;
      max-width: 100vw;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: url(img/benner.jpg) center center/cover;
    height: 135%;
    width: 100%;
    z-index: -1;
  }
  & ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(#00000082, #00000036);
    height:135%;
    width: 100%;
    z-index: -1;
  }

  @media(max-width: 950px){
    .landingBg{
    font-size: 2rem;
    align-items: center;

    h1{
      margin: 0;
    }
    h2{
      margin: 0 0 0 240px;
    }
    }
  }
  @media(max-width: 750px){
    .landingBg{
      align-items: start;
      padding: 40px;
      font-size: 1.5rem;
    }
  }
  @media(max-width: 650px){
    .landingBg{
      font-size: unset;
      align-items: center;
      h1,h2{
        white-space: nowrap;
      margin: 0;
    }
    h2{
      font-size: 2rem;
    }
    
    label svg{
      right: 35%;
    bottom: 15%;
    }}
  }
  
`;

export default Landing;
