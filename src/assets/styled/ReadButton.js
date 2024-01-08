import styled from "styled-components";

export const ReadButton=styled.button`
    margin-top: 50px;
    cursor: pointer;
    background: var(--primary-color);
    color: var(--white);
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    padding: 16px 43px;
    text-align: center;
    font-weight: 700;
    font-family: var(--heading-font);
    z-index: 3;
    position: relative;
    transition: all .4s ease-out 0s;
    text-transform: uppercase;
    overflow: hidden;
    outline: none;
    border: none;
    &::before,
    &::after {
        content: '';
        position: absolute;
        background: var(--black);
        transition: all .4s ease-out 0s;
        height: 100%;
        width: 0;
        opacity: 0;
        z-index: -1;
    }

    &::before {
        top: 0;
        left: 0;
    }
    &:hover:before{
        opacity: 1;
        width: 50%;
    }
    &::after {
        top: 0;
        right: 0;
    }
    &:hover::after{
        opacity: 1;
        width: 50%;
    }

    &:hover{
        //background: var(--black);
        color: var(--white);
        left: 0;
    }
`