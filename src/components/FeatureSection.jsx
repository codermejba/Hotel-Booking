//This section maked by Bootstrap

import React from 'react'
import styled from 'styled-components'
// index.js or index.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReadButton2 } from '../assets/styled/ReadButton2';
import RightArrow from '../../public/icon/RightArrow';

const FeatureSection = () => {
  return (
    <Main>
      <div className="container d-flex flex-column gap-3" bis_skin_checked="1">
      <div
        className="row align-items-center bg-left mb-60 flex justify-between py-5"
        bis_skin_checked="1"
      >
        <div className="col-xl-6 col-lg-6" bis_skin_checked="1">
          <div className="image" bis_skin_checked="1">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="1"
              src="img/Services/restaurant.jpg"
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6" bis_skin_checked="1">
          <div className="content" bis_skin_checked="1">
            <div className="p-5" bis_skin_checked="1">
              <span >Our Food</span>
              <h2>Restaurant Silo</h2>
              <p>
                Proin massa augue, lacinia at blandit ac, fringilla scelerisque
                tortor. Mauris sit amet lectus porta,
              </p>
              <ReadButton2>Read More
             <RightArrow/>
              </ReadButton2>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row align-items-center bg-right mb-60 flex justify-between py-5"
        bis_skin_checked="1"
      >
        <div
          className="col-xl-6 col-lg-6 order-last order-lg-first"
          bis_skin_checked="1"
        >
          <div className="content" bis_skin_checked="1">
            <div className="p-5" bis_skin_checked="1">
              <span >Read Our Books</span>
              <h2>The Library</h2>
              <p>
                Proin massa augue, lacinia at blandit ac, fringilla scelerisque
                tortor. Mauris sit amet lectus porta,
              </p>
              <ReadButton2>read more
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
              </ReadButton2>

            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6" bis_skin_checked="1">
          <div className="image" bis_skin_checked="1">
            <img
              alt=""
              loading="lazy"
              height="350"
              decoding="async"
              data-nimg="1"
              src="img/Services/library.jpg"
            />
          </div>
        </div>
      </div>
      <div
        className="row align-items-center bg-left mb-60 flex justify-between py-5"
        bis_skin_checked="1"
      >
        <div className="col-xl-6 col-lg-6" bis_skin_checked="1">
          <div className="image" bis_skin_checked="1">
            <img
              alt=""
              loading="lazy"
              height="350"
              decoding="async"
              data-nimg="1"
              src="img/Services/exercise.jpg"
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6" bis_skin_checked="1">
          <div className="content" bis_skin_checked="1">
            <div className="p-5" bis_skin_checked="1">
              <span >Fitness Equipment</span>
              <h2>Exercise equipment</h2>
              <p>
                Proin massa augue, lacinia at blandit ac, fringilla scelerisque
                tortor. Mauris sit amet lectus porta,
              </p>
              <ReadButton2>read more
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
              </ReadButton2>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row align-items-center bg-right flex justify-between py-5"
        bis_skin_checked="1"
      >
        <div
          className="col-xl-6 col-lg-6 order-last order-lg-first"
          bis_skin_checked="1"
        >
          <div className="content" bis_skin_checked="1">
            <div className="p-5" bis_skin_checked="1">
              <span >Experiences</span>
              <h2>Swimming Pool</h2>
              <p>
                Proin massa augue, lacinia at blandit ac, fringilla scelerisque
                tortor. Mauris sit amet lectus porta,
              </p>
              <ReadButton2>read more
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
              </ReadButton2>

            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6" bis_skin_checked="1">
          <div className="image" bis_skin_checked="1">
            <img
              alt=""
              loading="lazy"
              height="350"
              decoding="async"
              data-nimg="1"
              src="img/Services/swimming pool.jpg"
            />
          </div>
        </div>
      </div>
    </div>
    </Main>
  )
}
const Main=styled.div`
.bg-left,.bg-right{
        position: relative;
    z-index: 0;
    }

    .bg-left::after,.bg-right::before{
        position: absolute;
    content: "";
    left: 12px;
    top: 0;
    width: 90%;
    height: 100%;
    background: var(--color-4);
    z-index: -1;
    }
    .bg-left::before,.bg-right::after{
        position: absolute;
    content: "";
    right: 0;
    top: 0;
    width: 25%;
    height: 100%;
    background: white;
    z-index: -1;
    }
    .bg-left::before{
        right: 12px;
        width: 90%;
        background: var(--color-4);

    }
    .bg-left::after{
        left: 0;
        width: 25%;
        background: white;
    }

    @media (max-width:992px) {
        .bg-left::before,.bg-left::after,.bg-right::before,.bg-right::after{
            height: 0;
            width: 0;
        }
        .content{
            background:var(--color-4);
        }
    }
    //img style
    .image {

        img{
            height: 400px;
            width: 100%;
        }
    }
    .content{
        span{
            color: var(--primary-color);
            font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 5px;
    font-family: var(--heading-font);
        }
        h2{
            font-size: 45px;
    line-height: 60px;
        }
        p{
            margin-bottom: 55px !important;
    max-width: 420px;
        }
    }
`
export default FeatureSection
