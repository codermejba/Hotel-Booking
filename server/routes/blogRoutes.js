import express from "express";
import { createBlog, getAllBlogs } from "../controllers/blogController.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.post("/", upload.single("image"), createBlog);
router.get("/all", getAllBlogs);


export default router;
