import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();

app.use(express.json());

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("mongoDB seucces");
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(8000, () => {
    console.log("port in 8000 on not error server");
});

app.use("/api/user", userRoutes);

app.use("/api/auth", authRoutes);