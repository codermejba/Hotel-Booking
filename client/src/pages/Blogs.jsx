//This section maked by Bootstrap

import React, { useEffect, useState } from "react";
import styled from "styled-components";
// index.js or index.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { ReadButton2 } from "../assets/styled/ReadButton2";
import RightArrow from "/public/icon/RightArrow";
import { getAllBlogs } from "../services/BlogsService";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    try {
      const result = await getAllBlogs();
      if (result.error) {
        throw new Error(result.message);
      }
      console.log(result.data);
      setBlogs(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <Main className="container">
      <div className="d-flex flex-column gap-3" bis_skin_checked="1">
        {blogs.map((blog) => (
          <div 
          key={blog._id}
            className="row align-items-center bg-right flex justify-between py-5"
            bis_skin_checked="1"
          >
            <div
              className="col-xl-6 col-lg-6 order-last order-lg-first"
              bis_skin_checked="1"
            >
              <div className="content" bis_skin_checked="1">
                <div className="p-5" bis_skin_checked="1">
                  <span>{blog.category}</span>
                  <h2>{blog.title}</h2>
                  <p>
                    {blog.content}
                  </p>
                  <ReadButton2>
                    read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 16 16"
                      id="right-arrow"
                    >
                      <path
                        fill="#ffffff"
                        d="M12.707 4.293a1 1 0 010 1.414L9.414 8l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      ></path>
                    </svg>
                  </ReadButton2>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 order-first order-lg-last"
              bis_skin_checked="1"
            >
              <div className="image" bis_skin_checked="1">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  data-nimg="1"
                  src={blog.image}
                />
              </div>
            </div>
          </div>
        ))}{" "}
      
      </div>
    </Main>
  );
};
const Main = styled.div`
  .bg-left,
  .bg-right {
    position: relative;
    z-index: 0;
  }

  .bg-left::after,
  .bg-right::before {
    position: absolute;
    content: "";
    left: 12px;
    top: 0;
    width: 90%;
    height: 100%;
    background: var(--color-4);
    z-index: -1;
  }
  .bg-left::before,
  .bg-right::after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    width: 25%;
    height: 100%;
    background: white;
    z-index: -1;
  }
  .bg-left::before {
    right: 12px;
    width: 90%;
    background: var(--color-4);
  }
  .bg-left::after {
    left: 0;
    width: 25%;
    background: white;
  }

  @media (max-width: 992px) {
    .bg-left::before,
    .bg-left::after,
    .bg-right::before,
    .bg-right::after {
      height: 0;
      width: 0;
    }
    .content {
      background: var(--color-4);
    }
  }
  //img style
  .image {
    img {
      height: 400px;
      width: 100%;
    }
  }
  .content {
    span {
      color: var(--primary-color);
      font-weight: 600;
      text-transform: capitalize;
      margin-bottom: 5px;
      font-family: var(--heading-font);
    }
    h2 {
      font-size: 45px;
      line-height: 60px;
    }
    p {
      margin-bottom: 55px !important;
      max-width: 420px;
    }
    @media (max-width: 440px) {
      h2 {
        font-size: 30px;
        line-height: 40px;
      }
      div {
        padding: 50px 1rem !important;
      }
    }
  }
`;
export default Blogs;
