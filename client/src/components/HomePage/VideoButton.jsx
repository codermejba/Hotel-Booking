import React, { useState } from "react";
import styled from "styled-components";

const VideoButton = () => {
  //useState for auto play video
  const [playVideosrc, setPlayVideosrc] = useState("");
  function playVideo() {
    playVideosrc === ""
      ? setPlayVideosrc(
          "https://www.youtube.com/embed/JnX7Oc8LqD8?si=asi6z-Q2A1y3bjHa&autoplay=1"
          /* "https://www.youtube.com/embed/2u4QKDoA5cc?si=2yAoeqyOgyoNeXPH&autoplay=1" */
        )
      : setPlayVideosrc("");
  }

  return (
    <VideoPlayButton>
      <input type="checkbox" id="play" />
      <label htmlFor="play" onClick={playVideo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 512 512"
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
        height="315"
        src={playVideosrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </VideoPlayButton>
  );
};

const VideoPlayButton = styled.div`
  //height: 50vh;
  //width: 100%;
  #play {
    display: none;
  }

  label {
    svg {
      height: 100px;
      cursor: pointer;
      path {
        fill: white;
      }
    }
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;

    ///display: none;
  }
  @media (max-width: 576px) {
    iframe {
      max-width: 100vw;
    }
  }
`;

export default VideoButton;
