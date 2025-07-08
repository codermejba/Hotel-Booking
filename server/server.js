import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js';
dotenv.config();

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello from server");
})
app.use('/api/auth', authRoutes);

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
