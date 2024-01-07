import React from "react";
import styled from "styled-components";

function Footer() {
    const inlineCss={
        marginTop: '0'
    }
  return (
    <FooterSection>
      <FooterContainer>
        <div className="container">
          <div className="footerCard">
            <div className="img">
              <img src="img/logo.png" alt="Logo" />
            </div>
            <div className="cardBody">
              <p>
                Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus
              </p>
              <div className="cardIcon">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="Facebook"
                  >
                    <path
                      d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
                      fill="#ffffff"
                      className="color000000 svgShape"
                    ></path>
                  </svg>
                </i>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="Twitter"
                  >
                    <path
                      d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                      fill="#ffffff"
                      className="color000000 svgShape"
                    ></path>
                  </svg>
                </i>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    id="whatsapp"
                  >
                    <path
                      d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
                      fill="#ffffff"
                      className="color000000 svgShape"
                    ></path>
                  </svg>
                </i>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="Linkedin"
                  >
                    <circle
                      cx="4.983"
                      cy="5.009"
                      r="2.188"
                      fill="#ffffff"
                      className="color000000 svgShape"
                    ></circle>
                    <path
                      d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                      fill="#ffffff"
                      className="color000000 svgShape"
                    ></path>
                  </svg>
                </i>
              </div>
            </div>
          </div>
          <div className="footerCard">
            <h2>Information</h2>
            <div className="cardBody">
              <div
                className="cardIcon simpleCardIcon"
                style={inlineCss}
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="-15 15 512 512"
                    id="location"
                  >
                    <g data-name="<Group>">
                      <g data-name="<Group>">
                        <path
                          fill="#00efd1"
                          d="M426.331,8.907a10.087,10.087,0,0,0-9.588-.708L324.558,49.9,232.383,8.2a10.017,10.017,0,0,0-8.25,0L131.967,49.9,39.8,8.2a9.691,9.691,0,0,0-9.383.708A9.852,9.852,0,0,0,26,17.31V316.477a9.853,9.853,0,0,0,5.717,9.11l96.205,43.569a9.864,9.864,0,0,0,8.185,0l55.855-25.279-8.232-18.222L142,344.544V67.33l76-34.519V249h20V32.811L315,67.33V205h20V67.33l76-34.519V236h20V17.31A10.085,10.085,0,0,0,426.331,8.907ZM46,32.811,122,67.33V344.544L46,310.025Z"
                          data-name="<Compound Path>"
                        ></path>
                      </g>
                      <g data-name="<Group>">
                        <path
                          fill="#00acea"
                          d="M331,256.1c-45.1,0-81.792,35.274-81.792,78.633,0,58.073,73.286,105.593,76.406,107.587a10,10,0,0,0,10.772,0c3.12-1.994,76.406-49.514,76.406-107.587C412.792,291.377,376.1,256.1,331,256.1Zm0,165.647a232.868,232.868,0,0,1-29.051-24.765c-14.934-15.145-32.736-38.238-32.736-62.249,0-32.33,27.72-58.633,61.792-58.633s61.792,26.3,61.792,58.633C392.792,373.855,346.938,410.272,331,421.75Z"
                          data-name="<Compound Path>"
                        ></path>
                        <path
                          fill="#00acea"
                          d="M331,287.846a48.782,48.782,0,1,0,48.782,48.782A48.837,48.837,0,0,0,331,287.846Zm0,77.564a28.782,28.782,0,1,1,28.782-28.782A28.815,28.815,0,0,1,331,365.41Z"
                          data-name="<Compound Path>"
                        ></path>
                        <path
                          fill="#00acea"
                          d="M331.607,195.261c-85.31,0-154.715,69.405-154.715,154.714S246.3,504.69,331.607,504.69s154.715-69.4,154.715-154.715S416.917,195.261,331.607,195.261Zm0,289.429c-74.282,0-134.715-60.433-134.715-134.715s60.433-134.714,134.715-134.714,134.715,60.432,134.715,134.714S405.889,484.69,331.607,484.69Z"
                          data-name="<Compound Path>"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </i>
                <p>GXF4+8HQ Chippenham United Kingdom</p>
              </div>
              <div className="cardIcon simpleCardIcon">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="5 5 24 24"
                    id="Mail"
                  >
                    <path
                      d="M16.006 6.5a.5.5 0 0 0-.049.002.5.5 0 0 0-.27.1L13.18 8.48H8.504v3.504l-1.697 1.272a.5.5 0 0 0-.29.637.5.5 0 0 0-.013.115v10.967a.5.5 0 0 0 .002.076.5.5 0 0 0 .02.097.5.5 0 0 0 .017.045.5.5 0 0 0 0 .002.5.5 0 0 0 .021.043.5.5 0 0 0 0 .002.5.5 0 0 0 .168.18.5.5 0 0 0 .002 0 .5.5 0 0 0 .041.025.5.5 0 0 0 .002 0 .5.5 0 0 0 .141.047.5.5 0 0 0 .002 0 .5.5 0 0 0 .047.006.5.5 0 0 0 .002 0 .5.5 0 0 0 .004 0 .5.5 0 0 0 .03.002.5.5 0 0 0 .015 0h17.88a.5.5 0 0 0 .606-.576V14.008a.5.5 0 0 0-.037-.197.5.5 0 0 0-.264-.538l-1.7-1.271V8.48H18.8L16.285 6.6a.5.5 0 0 0-.28-.1zm-.018 1.125 1.143.855h-2.283l1.14-.855zM9.504 9.48h13V14.674l-6.518 4.07-6.482-4.04V9.48zm3 .989v1.062h6.984V10.47h-6.984zm-1 2.031v1.063h9V12.5h-9zm-3 .734v.848l-.617-.385.617-.463zm15 .016.582.436-.582.363v-.799zm-10 1.25v1.063h5V14.5h-5zm11 .104v9.47l-5.217-3.486a.5.5 0 0 0-.283-.09v.002a.5.5 0 0 0-.274.92l4.614 3.08H8.654l4.62-3.08a.5.5 0 0 0-.288-.92.5.5 0 0 0-.267.088l-5.215 3.478v-9.431l1 .623 7.219 4.5.033.021h.006a.5.5 0 0 0 .002.002.5.5 0 0 0 .002 0 .5.5 0 0 0 .013.006.5.5 0 0 0 .076.027.5.5 0 0 0 .03.008.5.5 0 0 0 .02.004.5.5 0 0 0 .003 0 .5.5 0 0 0 .045.006.5.5 0 0 0 .006 0 .5.5 0 0 0 .123-.008.5.5 0 0 0 .02-.004.5.5 0 0 0 .095-.033.5.5 0 0 0 .016-.008h.006l.027-.017a.5.5 0 0 0 .006-.004l7.252-4.53 1-.624z"
                      color="#000"
                      fontFamily="sans-serif"
                      fontWeight="400"
                      overflow="visible"
                      fill="#ffffff"
                      className="color000000 svgShape"
                    ></path>
                  </svg>
                </i>
                <p>info.help@gmail.com</p>
              </div>
              <div className="cardIcon simpleCardIcon">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 33 33"
                    id="call"
                  >
                    <g
                      transform="translate(-156 -292)"
                      fill="#ffffff"
                      className="color000000 svgShape"
                    >
                      <path
                        fillRule="evenodd"
                        d="m 173.85547,301.89648 a 1,1 0 0 0 -0.92578,0.79297 1,1 0 0 0 0.77343,1.1836 c 1.63286,0.34401 2.66043,1.92184 2.31641,3.55468 a 1,1 0 0 0 0.77344,1.1836 1,1 0 0 0 1.18359,-0.77149 c 0.56686,-2.6905 -1.17081,-5.35698 -3.86133,-5.92382 a 1,1 0 0 0 -0.25976,-0.0195 z"
                        color="#000"
                        fill="#ffffff"
                        className="color000000 svgShape"
                      ></path>
                      <path
                        fillRule="evenodd"
                        d="m 174.62695,297.98633 a 1,1 0 0 0 -0.87109,0.78906 1,1 0 0 0 0.77148,1.18359 c 3.79454,0.79946 6.20571,4.49845 5.40625,8.29297 a 1,1 0 0 0 0.77344,1.18555 1,1 0 0 0 1.18359,-0.77344 c 1.0223,-4.85218 -2.09897,-9.63982 -6.95117,-10.66211 a 1,1 0 0 0 -0.3125,-0.0156 z"
                        color="#000"
                        fill="#ffffff"
                        className="color000000 svgShape"
                      ></path>
                      <path
                        fillRule="evenodd"
                        d="M175.37305 294.08398a.99999499.99999499 0 00-.79297.77735.99999499.99999499 0 00.77148 1.18359c5.95621 1.2549 9.75098 7.07505 8.4961 13.03125a.99999499.99999499 0 00.77343 1.18555.99999499.99999499 0 001.1836-.77344c1.47772-7.01386-3.02716-13.92266-10.04102-15.40039a.99999499.99999499 0 00-.39062-.004zM162.98047 294.01172c-.98492-.0178-1.90172.43314-2.45117 1.34375-3.28962 5.4519-3.39002 12.29826-.18164 17.87305a1.0001 1.0001 0 00.002.006c3.23676 5.55933 9.22998 8.89168 15.60742 8.77539 1.21528-.0221 2.15131-.75945 2.57227-1.83399l1.4375-3.66797c.51477-1.31399.12221-2.82162-.96875-3.71679l-2.58008-2.11524c-1.32752-1.08929-3.35959-.72448-4.22656.75781l-.9668 1.65039c-1.64502-.85898-3.11472-2.085-4.08984-3.76562v-.002c-1.01959-1.76568-1.33095-3.74687-1.19727-5.6836l1.83008.11719c1.70931.1098 3.11184-1.44331 2.83008-3.13281l-.54688-3.2793c-.2321-1.39165-1.3395-2.48347-2.73437-2.69531l-3.91016-.59375c-.14259-.0217-.28508-.0346-.42578-.0371zm.125 2.01367l3.91015.5957c.54734.0831.97144.50081 1.0625 1.04688l.54688 3.2793c.0774.46424-.26078.83681-.73047.80664l-2.88867-.18555a1.0001 1.0001 0 00-1.05078.83984c-.42446 2.65227.0322 5.45735 1.44922 7.91016a1.0001 1.0001 0 000 .002c1.35385 2.33418 3.42087 4.07747 5.78711 5.06641a1.0001 1.0001 0 001.24804-.41797l1.47852-2.52734c.26508-.45323.82652-.55377 1.23242-.22071l2.57813 2.11719c.42703.3504.57649.92512.375 1.43945l-1.43555 3.66797c-.0693.177-.61768.56212-.74609.56446-5.65845.10318-10.97213-2.85101-13.84376-7.78321-2.84321-4.94487-2.75158-11.00379.16407-15.83594.0663-.1099.67509-.39381.86328-.36523z"
                        color="#000"
                        fill="#ffffff"
                        className="color000000 svgShape"
                      ></path>
                    </g>
                  </svg>
                </i>
                <p>+880 1636154002</p>
              </div>
            </div>
          </div>
          <div className="footerCard">
            <h2>Pages Links</h2>
            <div className="cardBody iconSlider">
              <div>
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="6 0 24 24"
                    id="DownArrow"
                  >
                    <g
                      data-name="Layer 2"
                      fill="#ffffff"
                      className="color000000 svgShape"
                    >
                      <g
                        data-name="arrowhead-down"
                        fill="#ffffff"
                        className="color000000 svgShape"
                      >
                        <path
                          d="M17.37 12.39 12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z"
                          fill="#ffffff"
                          className="color000000 svgShape"
                        ></path>
                        <path
                          d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z"
                          fill="#ffffff"
                          className="color000000 svgShape"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  About Us
                </a>
              </div>
              <div>
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="6 0 24 24"
                    id="DownArrow"
                  >
                    <g
                      data-name="Layer 2"
                      fill="#ffffff"
                      className="color000000 svgShape"
                    >
                      <g
                        data-name="arrowhead-down"
                        fill="#ffffff"
                        className="color000000 svgShape"
                      >
                        <path
                          d="M17.37 12.39 12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z"
                          fill="#ffffff"
                          className="color000000 svgShape"
                        ></path>
                        <path
                          d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z"
                          fill="#ffffff"
                          className="color000000 svgShape"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  Blog
                </a>
              </div>
              <div>
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="6 0 24 24"
                    id="DownArrow"
                  >
                    <g
                      data-name="Layer 2"
                      fill="#ffffff"
                      className="color000000 svgShape"
                    >
                      <g
                        data-name="arrowhead-down"
                        fill="#ffffff"
                        className="color000000 svgShape"
                      >
                        <path
                          d="M17.37 12.39 12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z"
                          fill="#ffffff"
                          className="color000000 svgShape"
                        ></path>
                        <path
                          d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z"
                          fill="#ffffff"
                          className="color000000 svgShape"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  Contact Us
                </a>
              </div>
              <div>
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="6 0 24 24"
                    id="DownArrow"
                  >
                    <g
                      data-name="Layer 2"
                      fill="#ffffff"
                      className="color000000 svgShape"
                    >
                      <g
                        data-name="arrowhead-down"
                        fill="#ffffff"
                        className="color000000 svgShape"
                      >
                        <path
                          d="M17.37 12.39 12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z"
                          fill="#ffffff"
                          className="color000000 svgShape"
                        ></path>
                        <path
                          d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z"
                          fill="#ffffff"
                          className="color000000 svgShape"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  Room List
                </a>
              </div>
            </div>
          </div>
          <div className="footerCard">
            <h2>Subscribe</h2>
            <div className="cardBody subscription">
              <input type="email" placeholder="Email Address" />
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </FooterContainer>
      <footer>
        <div>
          Copyright © 2023 by <a href="/">Hostily</a>
        </div>
        <div className="footerRight">
          <p>
            <a href="/">FAQ</a>
          </p>
          <p>
            <a href="/">Terms of Use</a>
          </p>
          <p>
            <a href="/">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </FooterSection>
  );
}

const FooterSection = styled.div`
  a {
    color: white;
    transition: all 0.3s;
    &:hover {
      color: var(--primary-color);
    }
  }
  footer {
    min-height: 15vh;
    border-top: 1px solid var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
    background: #000000;
    color: white;
    font-size: 16px;
    .footerRight {
      display: flex;
      > :last-child {
        border-right: none;
      }
      p {
        padding: 0px 10px;
        border-right: 2px solid var(--primary-color);
      }
    }
  }
  @media (max-width:330px){
    footer{
      flex-direction: column;
      .footerRight{
        align-items: center;
        flex-direction: column;
        width: 100%;
        p{
          border-right: 0;
          border-bottom: 1px solid var(--primary-color);
        }
      }
    }
  }
`;
const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  //min-height: 80vh;
  padding: 50px;
  background: #000;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    height: 100%;
    min-width: 300px;
    color: white;
    .img {
      cursor: pointer;
      border-bottom: 1px solid var(--primary-color);
      img {
        height: 35px;
        padding-bottom: 10px;
      }
    }
    .footerCard {
      display: flex;
      flex-direction: column;
      //height: 50vh;
      width: 100%;
      padding: 30px;
      //border: 1px solid;
      h2 {
        padding-bottom: 4px;
        border-bottom: 1px solid var(--primary-color);
      }
      .cardBody {
        padding: 30px 0px;
        margin-top: 20px;
        p,
        a {
          color: var(--color-3);
          cursor: pointer;
          transition: all 0.5s;
          padding: 8px 0px;
        }
        p:hover,
        a:hover {
          color: var(--primary-color);
        }
        .cardIcon {
          min-width: 200px;
          margin-top: 25px;
          display: flex;
          align-items: center;
          gap: 10px;
          i {
            display: flex;
            height: 40px;
            width: 40px;
            background: var(--primary-color);
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            border: 1px solid white;
            transition: all 0.5s;
            &:hover {
              background: white;
              circle,
              path {
                fill: var(--primary-color);
              }
            }
          }
          i svg {
            height: 20px;
            width: 20px;
            circle,
            path {
              transition: all 0.5s;
            }
          }
        }
        .simpleCardIcon {
          i {
            cursor: auto;
            background: inherit;
            border: none;
            &:hover {
              background: inherit;
            }
            svg {
              height: 40px;
              width: 40px;
              circle,
              path {
                fill: var(--primary-color);
              }
            }
          }
        }
      }
      .subscription {
        display: flex;
        align-items: center;
        min-width: 200px;
        input {
          border: none;
          outline: none;
          padding: 16px 10px;
          width: 150px;
          font-size: 1rem;
        }
        svg {
          cursor: pointer;
          border: 1px solid;
          height: 50px;
          background: var(--primary-color);
          padding: 8px;
        }
      }
    }
    /* Media Query for responsiveness */

    @media (max-width: 975px) {
      grid-template-columns: repeat(2, 1fr);
      .subscription input{
        width: 0px;
        min-width: 200px;
      }
    }
    @media (max-width: 730px) {
      grid-template-columns: 1fr;
    }
    @media (max-width:330px){
      max-width: 250px;
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
  @media (min-width: 1000px) and (max-width: 1200px) {
    padding: 0px;
  }
  @media (min-width: 1300px) {
    min-height: 0;
  }
  @media (min-height: 1300px) {
    min-height: 0;
    height: 30vh;
  }
`;

export default Footer;
