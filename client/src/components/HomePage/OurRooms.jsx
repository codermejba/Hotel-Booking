import React, { useEffect, useState } from "react";
import { Rooms, RoomsType } from "../../assets/json/Rooms";
import styled from "styled-components";

function OurRooms() {
  const [clickedButton, setClickedButton] = useState("all rooms");

  const [filterData, setFilterData] = useState(Rooms);
  const Datafiltaring = (value) => {
    setClickedButton(value);

    if (value === "all rooms") {
      setFilterData(Rooms);
    } else {
      const filteredRooms = Rooms.filter((room) => {
        return value.toLowerCase() === room.type.toLowerCase();
      });
      setFilterData(filteredRooms);
    }
  };

  return (
    <Main>
      <TopSection>
        <div className="left">
          <span>Deluxe And Luxury</span>
          <h1>Our Luxury Rooms</h1>
        </div>
        <div className="right">
          {RoomsType.map((value, i) => (
            <Box
              key={i}
              $isselected={value === clickedButton}
              onClick={() => Datafiltaring(value)}
            >
              {value}
            </Box>
          ))}
        </div>
      </TopSection>
      <CardSection>
        {filterData.map(({ price, title, image }) => (
          <Cards key={title}>
            <div className="cardsContent">
              <p>
                <span>${price}</span> / Night
              </p>
              <h2>{title}</h2>
              <div className="hideBookingBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="RightArrow"
                >
                  <path
                    d="M16.9614258,11.80896c-0.0254517-0.0614624-0.0622559-0.1168213-0.1085815-0.1630249l-4.4993896-4.4993896c-0.1937256-0.1871948-0.5009155-0.1871948-0.6947021,0c-0.1986084,0.1918335-0.2041016,0.5083618-0.0122681,0.7069702L15.2930298,11.5H7.5C7.223877,11.5,7,11.723877,7,12s0.223877,0.5,0.5,0.5h7.7930298l-3.6465454,3.6464844c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C11.5,16.776062,11.723877,16.999939,12,17c0.1326294,0.0001221,0.2598267-0.0525513,0.3534546-0.1464844l4.4997559-4.4997559c0.0462646-0.0462036,0.0828247-0.1015015,0.1082153-0.1628418c0.0239258-0.0580444,0.0354004-0.1194458,0.0366211-0.1812134C16.9981079,12.0062866,17,12.003418,17,12c0-0.0023804-0.0012817-0.0043945-0.0013428-0.0067749C16.9978027,11.930481,16.9857788,11.8678589,16.9614258,11.80896z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9682617,0.0056152,8.9943848,4.0317383,9,9C21,16.9705811,16.9705811,21,12,21z"
                    fill="#ffffff"
                    className="color000000 svgShape"
                  ></path>
                </svg>
                <input type="button" defaultValue={"booking now"} />
              </div>
            </div>
            <div className="cardImg">
              <img src={image} alt="img" />
            </div>
          </Cards>
        ))}
      </CardSection>
    </Main>
  );
}

const Main = styled.div`
  background: var(--color-4);
  padding: 100px 0;
`;

const TopSection = styled.section`
  display: flex;
  align-items: end;
  justify-content: space-around;
  .left {
    padding: 20px 10px;
    span {
      color: var(--primary-color);
      font-weight: 600;
    }
    h1 {
      letter-spacing: 1px;
      padding-top: 30px;
      font-size: 2.3rem;
      font-family: var(--heading-font);
      font-weight: 500;
    }
  }
  .right {
    padding: 20px 0;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
    margin: 0 auto;
  }
  @media (max-width: 1200px) {
    align-items: center;
    flex-direction: column;
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  @media (max-width: 576px) {
  }
`;
const Box = styled.button`
  cursor: pointer;
  font-weight: 600;
  font-family: var(--heading-font);
  //using react props
  background-color: ${(props) =>
    props.$isselected ? `var(--primary-color)` : "white"};
  color: ${(props) => (!props.$isselected ? "black" : "white")};
  margin-top: 10px;
  padding: 11px 25px 13px;
  margin-right: 10px;
  border: none;
  outline: none;
  text-transform: capitalize;
`;
const CardSection = styled.section`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 50px;
  justify-content: center;
  @media (min-width: 1400px) {
    max-width: 1320px;
    margin: 50px auto 0 auto;
  }

  @media (min-width: 993px) and (max-width: 1310px) {
    > :last-child {
      width: 880px;
      .cardImg img {
        max-width: unset;
        min-width: unset;
        width: 100%;
      }
    }
  }
`;

const Cards = styled.div`
  position: relative;
  .cardsContent {
    position: absolute;
    left: 0;
    bottom: 0;
    color: #ffffff;
    z-index: 1;
    padding: 20px;
    width: 100%;
    cursor: pointer;
    transition: all 0.5s;
    span {
      color: var(--primary-color);
    }
    h2 {
      font-size: 24px;
      transition: all 0.5s;
      &:hover{
        color: var(--primary-color);
      }
    }
    //hover effect on cards
    &:hover {
      bottom: 55px;
      
      .hideBookingBtn {
        opacity: 1;
      }
    }
    .hideBookingBtn {
      border-top: 1px solid var(--color-2);
      display: flex;
      cursor: pointer;
      opacity: 0;
      transition: all 0.5s ease-in;
      position: absolute;
      bottom: -40px;
      padding-top: 10px;
      width: 100%;
      left: 0;
      padding-left: 10px;

      svg {
        height: 25px;
        margin-right: 5px;
        path {
          fill: var(--color-2);
        }
      }
      input {
        cursor: pointer;
        border: none;
        background: none;
        outline: none;
        position: relative;
        color: var(--color-2);
        font-weight: 600;
        font-family: var(--heading-font);
        font-size: 14px;
        text-transform: uppercase;
      }
      &:hover {
        input,
        svg path {
          fill: var(--primary-color);
          color: var(--primary-color);
        }
      }
    }
  }
  .cardImg {
    height: 380px;

    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0%;
      height: 100%;
      width: 100%;
      background: linear-gradient(transparent, black);
    }

    img {
      height: 100%;
      max-width: 540px;
      min-width: 320px;
    }
  }
  @media (min-width: 1311px) {
    .cardImg img {
      max-width: 580px;
      min-width: unset;
      width: 100%;
    }
  }
  @media (max-width: 992px) {
    .cardImg {
      height: 450px;
      width: 80vw;
      img {
        max-width: unset;
        min-width: unset;
        width: 100%;
      }
    }
  }
`;
export default OurRooms;
