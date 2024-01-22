import React from "react";
import styled from "styled-components";
import { Blogs } from "../../assets/json/Blogs";

function HomeBlog() {
  return (
    <Main className="container">
      <TopSection>
        <span>Our Blogs</span>
        <h2>Read Our Blog and News</h2>
      </TopSection>
      <BlogSection>
        {Blogs.map(({ date, month, year, img, content }) => (
          <div key={img} className="blogs">
            <div className="images">
              <img src={img} alt="Image" />
            </div>
            <div className="contentSection">
              <div className="dates">
                <span>{date}</span>
                <div>{`${month} ${year}`}</div>
              </div>
              <h5>
                <a href="#">{content}</a>
                

                <button>
                  Read more
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
                </button>
              </h5>
            </div>
          </div>
        ))}
      </BlogSection>
    </Main>
  );
}
const Main = styled.div`
 // min-height: 100vh;
  //max-width: 1300px;
 // margin: auto;
 // padding: 50px;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;
const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  span {
    color: var(--primary-color);
    font-weight: 500;
  }
  h2 {
    color: var(--heading-color);
    margin-top: 20px;
  }
`;
const BlogSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 2em;
  .blogs {
    .images {
      overflow: hidden;
      height: 200px;
      img {
        transition: transform 0.5s;
        height: 100%;
        width: 100%;
      }
    }
    .contentSection {
      background: var(--white);
      border: 1px solid var(--color-5);
      padding: 35px 30px;
      position: relative;
      transition: all 0.5s ease-out 0s;
      margin: -80px 20px 50px;
      display: flex;
      gap: 30px;
      cursor: pointer;
      .dates {
        display: flex;
        flex-direction: column;
        font-family: var(--heading-font);
        span {
          color: var(--heading-color);
          font-weight: 500;
          font-size: 30px;
          line-height: 40px;
        }
        div {
          white-space: nowrap;
          font-weight: 500;
        }
      }
      h5 {
        max-width: 212px;
        font-size: 18px;
    line-height: 28px;
        a{
            color: var(--heading-color);
        }
        button {
          border: none;
          outline: none;
          background: none;
          margin-top: 0px;
          opacity: 0;
          visibility: hidden;
          font-size: 22px;
          transition: all .3s;
          color: var(--heading-color);
          svg {
            margin-left: 10px;
            height: 20px;
            path {
              fill: black;
          transition: all .3s;

            }
          }
          &:hover{
            color: var(--primary-color);
            svg path{
                fill: var(--primary-color);
            }
          }
        }
        
    }
    &:hover,&:active{
        h5 button{
            visibility: visible;
            opacity: 1;
            margin-top: 30px;
        }

      }
    }
    &:hover {
      img {
        transform: scale(1.3);
      }
    }
  }

  @media (max-width :1000px) {
    grid-template-columns: repeat(1,1fr);
    .blogs .images{
        height: 400px;
    }
  }
`;
export default HomeBlog;
