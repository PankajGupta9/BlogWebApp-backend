import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, 
    },
    category:{
      type:String,
      required:true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
    },
    image:{
      type:String
    }
      
  },
  { timestamps: true }
);

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
