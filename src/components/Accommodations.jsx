import React from "react";
import styled from "styled-components";
import { ReadButton } from "../assets/styled/ReadButton";

function Accommodations() {
  return (
    <AccommodationsSection>
      <div className="ContentSide">
        <div className="leftSide">
          <span>Accommodations</span>
          <h1>Welcome Our Hotels And Resorts</h1>
          <p>
            Savvy travelers are looking for more than just the next destination
            on the map. They are looking for a memorable experience and to make
            new friends along the way.
          </p>
          <ReadButton> read more</ReadButton>
        </div>
        <div className="rightSide">
          <div className="accoimg1">
            <img src="/img/accommodations1.jpg" alt="Room Photo 1" />
            <div className="accoimg2">
              <img src="/img/accommodations2.jpg" alt="Room Photo 2" />
            </div>{" "}
          </div>
        </div>
      </div>
    </AccommodationsSection>
  );
}

const AccommodationsSection = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 50px;
  .ContentSide {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-gap: 2rem;
    align-items: end;
    .leftSide {
      padding: 20px 10px;
      height: 100%;
      span {
        color: var(--primary-color);
      }
      h1,
      p {
        padding-top: 30px;
      }
    }
    .rightSide {
      .accoimg1 {
        height: 300px;
        position: relative;
        img {
          height: 100%;
        }
      }
      .accoimg2 {
        position: absolute;
        left: 280px;
        top: -200px;
        height: 350px;
        img {
          height: 100%;
          transform: rotate(90deg);
        }
      }
    }
  }
  // Media Query for responsiveness
  @media (min-width: 1400px) {

    max-width: 1320px;
    margin: 0 auto;
  }
  @media (max-width: 1050px) {
    .ContentSide {
      grid-template-columns: 1fr;
      .leftSide {
        width: 50%;
      }
      .rightSide {
        padding: 50px 0 0 120px;
        .accoimg2 {
          left: 380px;
        }
      }
    }
  }
  @media (max-width: 992px) {
    //padding: 100px 10px;
    justify-content: center;
    .ContentSide {
      .rightSide {
        padding: 50px 0 0 50px;
        .accoimg2 {
          left: 50%;
          top: -30%;
          height: 300px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 100px 10px;
    .ContentSide {
      .rightSide {
        padding: 50px 0 0 50px;
        .accoimg2 {
          left: 50%;
          top: -30%;
          height: 300px;
        }
      }
      .leftSide {
        width: 80%;
      }
    }
  }
  @media (max-width: 576px) {
    padding: 100px 10px;
    .ContentSide {
      .leftSide {
        width: 100%;
      }
      .rightSide {
        padding: 50px 0 0 20px;
        .accoimg1 {
          height: 200px;
        }
        .accoimg2 {
          //display: none;
          left: 50%;
          top: -30%;
          height: 150px;
        }
      }
    }
  }
`;

export default Accommodations;
