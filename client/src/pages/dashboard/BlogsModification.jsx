import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import AdminLayout from "../../components/admin/AdminLayout";
import { ReadButton2 } from "../../assets/styled/ReadButton2";
import RightArrow from "../../../public/icon/RightArrow";
import { getAllBlogs, deleteBlog } from "../../services/BlogsService";

const BlogsModification = () => {
  const [blogs, setBlogs] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  const getBlogs = async () => {
    try {
      const result = await getAllBlogs();
      if (result.error) throw new Error(result.message);
      setBlogs(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);


  const handleToggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    const result = await deleteBlog(id);
    if (result.error) {
      toast.error(result.message || "Failed to delete blog");
    } else {
      toast.success(result.message || "Blog deleted successfully");
      setBlogs(blogs.filter((b) => b._id !== id)); // remove from UI
      setOpenMenuId(null); // close dropdown
    }
  };

  return (
    <AdminLayout>
      <Main className="container">
        <div className="d-flex flex-column gap-3">
          <ToastContainer />
          {Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog._id}
                className="row align-items-center bg-right flex justify-between py-5 position-relative"
              >
                {/* 3 dot menu */}
                <div
                  className="position-absolute top-0 end-0"
                  ref={menuRef}
                >
                  <button
                    className="btn"
                    onClick={() => handleToggleMenu(blog._id)}
                  >
                    <i className="bi bi-three-dots"></i>
                  </button>

                  {openMenuId === blog._id && (
                    <ul
                      className="dropdown-menu show"
                      style={{ display: "block" }}
                    >
                      <li>
                        <button className="dropdown-item">✏️ Edit</button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={() => handleDelete(blog._id)}
                        >
                          🗑️ Delete
                        </button>
                      </li>
                    </ul>
                  )}
                </div>

                {/* Blog content */}
                <div className="col-xl-6 col-lg-6 order-last order-lg-first">
                  <div className="content p-5">
                    <span>{blog.category}</span>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                    <ReadButton2>
                      read more <RightArrow />
                    </ReadButton2>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 order-first order-lg-last">
                  <div className="image">
                    <img src={blog.image} alt={blog.title} loading="lazy" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="vh-100 d-flex align-items-center justify-content-center">
              No Blogs Found
            </p>
          )}
        </div>
      </Main>
    </AdminLayout>
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

export default BlogsModification;
