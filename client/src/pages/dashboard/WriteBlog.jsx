import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import AdminLayout from "../../components/admin/AdminLayout";
import { createBlogs } from "../../services/BlogsService";

const WriteBlog = () => {
  const [imagePreview, setImagePreview] = useState(null);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // Image Preview
const handleImageChange = (e) => {
  const file = e.target.files[0];
  console.log(URL.createObjectURL(file));
  
  if (file) {
    setImagePreview(URL.createObjectURL(file));
  }
};
  const onSubmit = async (data) => {
    try {
      const response = await createBlogs(data);
      if (response.error) {
        throw new Error(response.message);
      }
      toast.success(response.message);
      reset();
    } catch (error) {
     console.error(error.message);
     toast.error(error.message);
     
    }
  };

  return (
    <AdminLayout>
      <ToastContainer />
      <div className="container">
        <h3 className="mb-4">📝 Write a New Blog</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Title */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              id="title"
              type="text"
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              placeholder="Enter blog title"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <div className="invalid-feedback">{errors.title.message}</div>
            )}
          </div>

          {/* Content */}
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <textarea
              id="content"
              rows="6"
              className={`form-control ${errors.content ? "is-invalid" : ""}`}
              placeholder="Write blog content here..."
              {...register("content", { required: "Content is required" })}
            ></textarea>
            {errors.content && (
              <div className="invalid-feedback">{errors.content.message}</div>
            )}
          </div>

            {/* Image Upload */}
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                className={`form-control ${errors.image ? "is-invalid" : ""}`}
                placeholder="Upload blog image"
                {...register("image", { required: "Image is required" })}
                onChange={handleImageChange}
              />
              {errors.image && (
                <div className="invalid-feedback">{errors.image.message}</div>
              )}

              {imagePreview && 
              <div style={{width: "200px"}} className=" mt-3">
                <img className="w-100 " src={imagePreview} alt="Preview" />
              </div>
              }
            </div>
          {/* Category */}
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              {...register("category")}
              defaultValue=""
            >
              <option value="" disabled>
                Choose category
              </option>
              <option value="Our Food">Our Food</option>
              <option value="Read Our Books">Read Our Books</option>
              <option value="Fitness Equipment">Fitness Equipment</option>
              <option value="Experiences">Experiences</option>
              <option value="Updates">Updates</option>
            </select>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary">
            Publish Blog
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default WriteBlog;
