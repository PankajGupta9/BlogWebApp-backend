import Blog from "../models/Blog.js";

// Create a new blog
export const createBlog = async (req, res) => {
  try {
    const { title,category, content, tags, avatar, image } = req.body;

    const newBlog = new Blog({
      title,
      category,
      content,
      tags,
      avatar,
      image,
    });
    console.log(req.body)
    await newBlog.save();

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog: newBlog,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create blog", error: error.message });
  }
};

// Update an existing blog
export const updateBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedBlog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      blog: updatedBlog,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update blog", error: error.message });
  }
};

// Delete a blog
export const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete blog", error: error.message });
  }
};

// Get a single blog by ID
export const getBlogById = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch blog", error: error.message });
  }
};

// Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch blogs", error: error.message });
  }
};
