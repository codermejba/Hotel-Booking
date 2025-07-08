import React from "react";
import styled from "styled-components";
import { ReadButton } from "../../assets/styled/ReadButton";

const Accomodation = () => {
  return (
    <Main>
      <div className="container">
        <div class="row gap-5 gap-lg-0 d-flex justify-around items-center">
          <div class="col-xl-5 col-lg-6 lg-mb-50">
            <div class="accommodations__area-title">
              <span class="subtitle__one">Accommodations</span>
              <h2>Welcome Our Hotels And Resorts</h2>
              <p>
                Savvy travelers are looking for more than just the next
                destination on the map. They are looking for a memorable
                experience and to make new friends along the way.
              </p>
              <ReadButton> read more</ReadButton>
            </div>
          </div>
          <div class="col-xl-7 col-lg-6">
            <div class="accommodations__area-right">
              <div class="accommodations__area-right-image">
                {/* img */}
                <img src="/img/accommodations1.webp" alt="Room Photo 1" />
                <div class="accommodations__area-right-image-two">
                  {/* img */}
                  <img src="/img/accommodations2.webp" alt="Room Photo 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
  padding: 120px 0;
  .subtitle__one {
    display: inline-block;
    position: relative;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 5px;
    font-family: var(--heading-font);
    color: var(--primary-color);
  }
  .accommodations__area-title h2 {
    margin-bottom: 14px;
    max-width: 425px;
  }
  img {
    max-width: 100%;
    height: 80%;
    height: auto;
    transition: all 0.4s ease-out 0s;
  }
  .accommodations__area-right-image {
    position: relative;
    margin: 90px 0 0;
  }

  .accommodations__area-right-image-two {
    position: absolute;
    top: -90px;
    right: 0;
  }
  @media (max-width: 1199px) {
    h2 {
    font-size: 40px;
    line-height: 54px;
  }
  }
`;

export default Accomodation;
