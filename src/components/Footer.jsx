import React from "react";
import styled from "styled-components";
import Information from "./Information";
import SocialLinkIcons from "./SocialLinkIcons";
import FooterContainer from "./FooterContainer";

function Footer() {
  return (
    <FooterSection>
     <FooterContainer/>
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
    text-decoration: none;
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
  @media (max-width: 330px) {
    footer {
      flex-direction: column;
      .footerRight {
        align-items: center;
        flex-direction: column;
        width: 100%;
        p {
          border-right: 0;
          border-bottom: 1px solid var(--primary-color);
        }
      }
    }
  }
`;


export default Footer;
