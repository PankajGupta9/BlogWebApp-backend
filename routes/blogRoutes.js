import express from "express";
import {createBlog,updateBlog,deleteBlog,getBlogById,getAllBlogs,} from "../controllers/blogController.js";

const router = express.Router();

router.post("/create", createBlog);
router.put("/update/:id", updateBlog);
router.delete("/delete/:id", deleteBlog);
router.get("/:id", getBlogById);
router.get("/", getAllBlogs);

export default router;
