import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../assets/styled/Button";

const RoomCheckout = () => {
    const [value,setValue]=useState(1)
  return (
    <CheckOutSection>
      <div className="checkOutCalculation">
        <p>Check in</p>
        <input type="date" className="inDate" />
      </div>
      <div className="checkOutCalculation">
        <p>check out</p>
        <input type="date" className="outDate" />
      </div>
      <div className="checkOutCalculation">
        <p>room</p>
        <div className="counter">
          <input type="button" className="btn" value={"-"} onClick={()=>setValue(value-1)} />
          <input type="number" className="countNumber" value={value} />
          <input type="button" className="btn" value={"+"} onClick={()=>setValue(value+1)} />
        </div>
      </div>
      <Button><span>check now</span></Button>
    </CheckOutSection>
  );
};

const CheckOutSection = styled.div`
  display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 80vw;
    margin: 0 auto;

  .checkOutCalculation {
    height: 100px;
    border-right: 1px solid #fff;
    background: var(--heading-color);
    padding: 10px;
    p {
      color: var(--color-2);
      font-family: var(--heading-font);
      font-weight: 700;
      text-transform: capitalize;
      text-align: center;
    }
    .inDate,
    .outDate {
      padding: 10px 20px;
      width: 100%;
      margin-top: 10px;
      font-size: 16px;
      cursor: pointer;
    }
    .counter {

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
      display: flex;
      padding: 10px 0px;
      align-items: center;
      justify-content: center;
      .btn {
        margin: 0px 5px;
        background: var(--primary-color);
        border: none;
        outline: none;
        font-size: 2rem;
        height: 40px;
        width: 50px;
        border-radius: 2px;
        cursor: pointer;
      }
      .countNumber {
        padding: 10px 20px;
        font-size: 16px;
        width: 100px;
        margin: 0 5px;
        text-align: center;
        border: none;
        outline: none;
        background: white;
      }
    }
  }
  span{
    white-space: nowrap;
    text-align: center;
    width: 100%;

  }
  /* Media Query for responsiveness */
  @media (min-width: 1400px){
    max-width: 1320px;
    margin: 0 auto;
  }
  @media (max-width: 1050px){
    width: 90vw;
  }
  @media (max-width: 975px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 730px) {
      grid-template-columns: 1fr;
      span{
        padding: 10px 0px;
      }
    }
    @media (max-width: 330px) {
      width: 95vw;
    }
    
`;
export default RoomCheckout;
