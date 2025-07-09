import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js';
dotenv.config();



const app = express();
app.use(express.json());

app.use(cors({
    origin:['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],

}));



app.get("/", (req, res) => {
    res.send("Hello from server");
})
app.use('/api/auth', authRoutes);

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
