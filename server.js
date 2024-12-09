import express from 'express'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import blogRouter from './routes/blogRoutes.js';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

//Routes
app.use('/api/v1/blogs',blogRouter)
console.log(PORT)
app.listen(PORT, () => console.log('Server running on port 5000'));
