import styled from "styled-components";

export const ReadButton2 = styled.button`
  cursor: pointer;
  background: transparent;
  color: var(--primary-color);
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  padding: 16px 43px;
  text-align: center;
  font-weight: 700;
  font-family: var(--heading-font);
  z-index: 3;
  position: relative;
  transition: all 0.4s ease-out 0s;
  text-transform: uppercase;
  overflow: hidden;
  outline: none;
  border: 1px solid var(--primary-color);
  &::before,
  &::after {
    content: "";
    position: absolute;
    background: var(--primary-color);
    transition: all 0.4s ease-out 0s;
    height: 100%;
    width: 0;
    opacity: 0;
    z-index: -1;
  }

  &::before {
    top: 0;
    left: 0;
  }
  &:hover:before {
    opacity: 1;
    width: 50%;
  }
  &::after {
    top: 0;
    right: 0;
  }
  &:hover::after {
    opacity: 1;
    width: 50%;
  }

  &:hover {
    // background: var(--white);
    color: var(--white);
    left: 0;
    svg path {
      fill: var(--white);
    }
  }

  svg {
    margin-left: 14px;

     path {
      fill: var(--primary-color);
      transition: all 0.4s ease-out 0s;
    }
  }
`;
