import React from 'react'
import styled from 'styled-components'
import Error404 from '../../../public/icon/Error404';
import { ReadButton } from '../../assets/styled/ReadButton';
import NavigationBar from '../NavigationBar'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
    <Main>
      <TopSection className="  position-relative ">
        <div className="contactBgImg position-absolute top-0 h-100 w-100 "></div>
        <div className="container d-flex flex-column align-items-center justify-content-center h-100">
          <h2 className="text-center">Not Found</h2>

          <div>
            <a href="#">Home</a> - <span>404 page</span>
          </div>
        </div>
      </TopSection>
      <div className="container">
        < ButtomSection>

            <Error404/>
            <Link to ="/">
            <ReadButton >
                back to home
            </ReadButton>
            </Link>
        </ButtomSection>
      </div>
    </Main>
    </>
  )
}

const Main = styled.div`
 h2 {
    text-transform: capitalize;
  }
`;
const TopSection = styled.div`
  height: 70vh;
  background: var(--contact-bg-color);

  .contactBgImg {
    background: url("img/Rooms/Family Room.jpg") center center/cover;
    z-index: -1;
  }

  h2 {
    color: white;
    font-size: 3em;
  }

  a {
    color: white;
    transition: color 0.5s;
    &:hover {
      color: var(--primary-color);
    }
  }

  span {
    color: var(--primary-color);
    font-weight: 600;
  }
`;

const ButtomSection=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 60px 0;

svg{
    padding: 20px;
    padding-top: 0;
    max-width: 100%;
}
`

export default ErrorPage
