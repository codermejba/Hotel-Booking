import React from "react";
import styled from "styled-components";

const ExtraSurvice = () => {
  const survices = [
    {
      title: "Room Cleaning",
      details:
        "Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 3"
          viewBox="0 0 64 64"
          id="Mop"
        >
          <rect
            width="30"
            height="4"
            x="2"
            y="53"
            fill="#f4ddb0"
            className="colorf4b2b0 svgShape"
          ></rect>
          <rect
            width="6"
            height="8"
            x="14"
            y="18"
            fill="#f4ddb0"
            className="colorf4b2b0 svgShape"
          ></rect>
          <path
            fill="#f4ddb0"
            d="M37.535 36A4 4 0 0144 31.36a4 4 0 016.05.05 3.993 3.993 0 017.82-.4A.57.57 0 0158 31a3 3 0 012.238 5zM17 2a2 2 0 00-2 2V9h4V4A2 2 0 0017 2z"
            className="colorf4b2b0 svgShape"
          ></path>
          <path
            fill="#b89146"
            d="M2 58H3v4a1 1 0 001 1H30a1 1 0 001-1V58h1a1 1 0 001-1V53a1 1 0 00-1-1H26V48.325a9.759 9.759 0 00-6-9.015V27a1 1 0 001-1V18a1 1 0 00-1-1V4a3 3 0 00-6 0V17a1 1 0 00-1 1v8a1 1 0 001 1V39.31a9.759 9.759 0 00-6 9.015V52H2a1 1 0 00-1 1v4A1 1 0 002 58zm27 3H5V58H29zM24 48.325V52H22V47a1 1 0 00-1-1H20V41.542A7.756 7.756 0 0124 48.325zM20 48v4H14V48zM15 25V19h4v6zM17 3a1 1 0 011 1V8H16V4A1 1 0 0117 3zm-1 7h2v7H16zm2 17V46H16V27zM10 48.325a7.756 7.756 0 014-6.783V46H13a1 1 0 00-1 1v5H10zM3 54H31v2H3zM57.982 62.189l5-26A1 1 0 0062 35h-.142a3.943 3.943 0 00-3.26-4.956 4.993 4.993 0 00-9.035-.338A5.126 5.126 0 0044 30a4.973 4.973 0 00-7.888 5H36a1 1 0 00-.982 1.189l5 26A1 1 0 0041 63H57A1 1 0 0057.982 62.189zM60.382 37l-.7 1.4a11.945 11.945 0 01-21.368 0l-.7-1.4zM38 34a3 3 0 015.249-1.979 1.034 1.034 0 001.5 0 3 3 0 014.537.037 1 1 0 001.751-.5 2.993 2.993 0 015.862-.3A1 1 0 0058.01 32a2 2 0 011.719 3H38.194A2.986 2.986 0 0138 34zm3.826 27L38.134 41.8a13.956 13.956 0 0021.732 0L56.174 61z"
            className="colorb3404a svgShape"
          ></path>
        </svg>
      ),
    },
    {
      title: "Room Wifi",
      details:
        "Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="wifi">
          <path
            d="M24.4,25.25a1,1,0,0,1,0-1.41,36.19,36.19,0,0,1,51.2,0,1,1,0,0,1,0,1.41,1,1,0,0,1-.7.3,1,1,0,0,1-.71-.3,34.21,34.21,0,0,0-48.38,0A1,1,0,0,1,24.4,25.25ZM46.07,41.6A3.93,3.93,0,1,0,50,37.67,3.93,3.93,0,0,0,46.07,41.6Zm21.5-10.73a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41,25.88,25.88,0,0,0-36.56,0,1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0,23.86,23.86,0,0,1,33.72,0A1,1,0,0,0,67.57,30.87ZM58.78,36.2a1,1,0,0,0,.7-.29,1,1,0,0,0,0-1.42,13.4,13.4,0,0,0-19,0,1,1,0,1,0,1.41,1.42,11.4,11.4,0,0,1,16.14,0A1,1,0,0,0,58.78,36.2ZM40,67.77a1,1,0,1,0-1-1A1,1,0,0,0,40,67.77Zm-20,0a1,1,0,1,0-1-1A1,1,0,0,0,20,67.77Zm60,0a1,1,0,1,0-1-1A1,1,0,0,0,80,67.77Zm-20,0a1,1,0,1,0-1-1A1,1,0,0,0,60,67.77Zm27,6v3a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1v-3a1,1,0,0,1,1-1H86A1,1,0,0,1,87,73.77ZM35.56,75a1,1,0,0,0-1-1H29.88a1,1,0,1,0,0,2h4.68A1,1,0,0,0,35.56,75Zm3.2,0a1,1,0,0,0-1-1h-.4a1,1,0,0,0,0,2h.4A1,1,0,0,0,38.76,75ZM28.68,60.77h5.7L15.63,23.27a.93.93,0,0,0-1.56-.1A.87.87,0,0,0,14,24Zm42.64,0L86,24a.87.87,0,0,0-.09-.84.93.93,0,0,0-1.56.1L65.62,60.77Zm23.68,7V68h-.91a1,1,0,0,0,0,2H95v1h-.91a1,1,0,0,0,0,2H95v3.78a5,5,0,0,1-5,5H10a5,5,0,0,1-5-5v-9a5,5,0,0,1,5-5H90A5,5,0,0,1,95,67.77ZM8.82,75.52a1,1,0,0,0-2,0v.41a1,1,0,0,0,2,0Zm0-7.47a1,1,0,0,0-2,0v4.68a1,1,0,0,0,2,0ZM77,66.77a3,3,0,1,0,3-3A3,3,0,0,0,77,66.77Zm-20,0a3,3,0,1,0,3-3A3,3,0,0,0,57,66.77Zm-20,0a3,3,0,1,0,3-3A3,3,0,0,0,37,66.77Zm-20,0a3,3,0,1,0,3-3A3,3,0,0,0,17,66.77Zm72,7a3,3,0,0,0-3-3H14a3,3,0,0,0-3,3v3a3,3,0,0,0,3,3H86a3,3,0,0,0,3-3ZM92.29,72a1,1,0,0,0-1-1h-.41a1,1,0,0,0,0,2h.41A1,1,0,0,0,92.29,72ZM78,86.77a1,1,0,0,0,1-1v-2H21v2a1,1,0,0,0,1,1Z"
            data-name="ICON 12"
            fill="#b89146"
            className="color000000 svgShape"
          ></path>
        </svg>
      ),
    },
    {
      title: "Pickup & Drop",
      details:
        "Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 512 512"
          id="Location"
        >
          <g
            data-name="&amp;lt;Group&amp;gt;"
            fill="#b89146"
            className="color000000 svgShape"
          >
            <polygon
              points="44 309.115 124 345.444 124 63.839 44 27.511 44 309.115"
              data-name="&amp;lt;Path&amp;gt;"
              fill="#b89146"
              className="color000000 svgShape"
            ></polygon>
            <path
              d="M220 27.51L140 63.839V345.444L180.176 327.2A153.462 153.462 0 0 1 220 243.387zM317 63.839L236 27.51V228.584c23-18 50-29.809 81-32.78zM413 27.511L333 63.839V195.072A151.269 151.269 0 0 1 413 218.5z"
              data-name="&amp;lt;Path&amp;gt;"
              fill="#b89146"
              className="color000000 svgShape"
            ></path>
            <path
              d="M331.607,211.06c-75.385,0-136.715,61.33-136.715,136.715S256.222,484.49,331.607,484.49s136.715-61.33,136.715-136.715S406.992,211.06,331.607,211.06Zm3.7,227.377a8,8,0,0,1-8.618,0c-3.082-1.97-75.483-48.911-75.483-105.9C251.208,290.28,287,255.9,331,255.9s79.792,34.378,79.792,76.634C410.792,389.526,338.391,436.467,335.309,438.437Z"
              data-name="&amp;lt;Compound Path&amp;gt;"
              fill="#b89146"
              className="color000000 svgShape"
            ></path>
            <path
              d="M331,271.9c-35.175,0-63.792,27.2-63.792,60.634,0,13.639,5.789,35.763,33.366,63.709A235,235,0,0,0,331,422.006c14.967-10.623,63.8-48.434,63.8-89.47C394.792,299.1,366.175,271.9,331,271.9Zm0,109.307a46.782,46.782,0,1,1,46.782-46.781A46.834,46.834,0,0,1,331,381.209Z"
              data-name="&amp;lt;Compound Path&amp;gt;"
              fill="#b89146"
              className="color000000 svgShape"
            ></path>
            <circle
              cx="331"
              cy="334.428"
              r="30.782"
              data-name="&amp;lt;Path&amp;gt;"
              fill="#b89146"
              className="color000000 svgShape"
            ></circle>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <Main>
      {survices.map(({ title, details, icon }) => (
        <Survices key={title}>
          <div className="icon">{icon}</div>
          <div className="content">
            <h2>{title}</h2>
            <p>{details}</p>
          </div>
        </Survices>
      ))}
    </Main>
  );
};
const Main = styled.div`
  min-height: 40vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 50px;
  @media (min-width: 1300px) {
    max-width: 1300px;
    margin: 0 auto;
  }
  @media (max-width: 992px) {
    /* styles for laptops and small desktops */
    grid-template-columns: repeat(2, 1fr);

    row-gap: 1em;
  }

  @media (max-width: 768px) {
    /* styles for tablets */
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
const Survices = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  .icon {
    background: var(--color-4);
    height: 75px;
    border-radius: 50%;
    margin-right: 30px;
    svg {
      padding: 20px;
      height: 100%;
    }
  }
  .content {
    h2 {
      font-size: 20px;
      color: var(--heading-color);
      font-family: var(--heading-font);
      font-weight: 500;
    }
  }
  @media (max-width: 576px) {
    flex-direction: column;
    row-gap: 2em;
  }
`;
export default ExtraSurvice;
