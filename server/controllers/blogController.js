import Blog from "../models/Blog.js";
import cloudinary from "../utils/cloudinary.js";
import streamify from "streamifier";
// @route POST /api/blogs
export const createBlog = async (req, res) => {
  const { title, content, category } = req.body;


  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required." });
  }

  try {
    let imageUrl = "";
    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        const steam = cloudinary.uploader.upload_stream(
          { folder: "blogs" },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }

        );
        streamify.createReadStream(req.file.buffer).pipe(steam);
      });

      imageUrl = result.secure_url;
    }

    const newBlog = new Blog({
      title,
      content,
      image: imageUrl,
      category,
    });

    await newBlog.save();
    res
      .status(201)
      .json({ message: "Blog created successfully", blog: newBlog });
  } catch (err) {
    console.error("Blog creation failed:", err.message);
    res.status(500).json({ error: "Server error while creating blog" });
  }
};
// @route GET /api/blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

// @route Delete /api/blogs/:id
export const deleteBlog = async (req, res) => {
  try {
   const blog = await Blog.findById(req.params.id);
   if (!blog) {
    return res.status(404).json({ error: "Blog not found" });
   }
   
   // Remove image from Cloudinary if it exists

    if (blog.image) {
      // extract public_id from blog.image (Cloudinary URL)
      const publicId = blog.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(`blogs/${publicId}`);
    }
    await blog.deleteOne();
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete blog" });
  }
};