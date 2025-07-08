import React from "react";
import styled from "styled-components";

//icons
import Callicon from "../../public/icon/Callicon";
import MailIcon from "../../public/icon/MailIcon";
import MapIcon from "../../public/icon/MapIcon";

const Information = () => {
  return (
    <Main className="cardBody">
      <div className="cardItem " >
       <MapIcon/>
        <p>GXF4+8HQ Chippenham United Kingdom</p>
      </div>
      <div className="cardItem ">
        <MailIcon/>
        <p>info.help@gmail.com</p>
      </div>
      <div className="cardItem ">
        <Callicon />
        <p>+880 1636154002</p>
      </div>
    </Main>
  );
};
const Main = styled.div`
  .cardItem {
    display: flex;
    margin-bottom: 15px;
p{
  padding: 0;
}
   
  }
   svg {
      height: 30px;
      path{
        fill: var(--primary-color);
      }
    }
`;
export default Information;
