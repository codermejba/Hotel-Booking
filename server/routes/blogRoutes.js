import express from "express";
import { createBlog, deleteBlog, getAllBlogs } from "../controllers/blogController.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.post("/", upload.single("image"), createBlog);
router.get("/all", getAllBlogs);
router.delete("/:id", deleteBlog);

export default router;
