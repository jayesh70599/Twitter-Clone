import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse req.body
app.use(express.urlencoded({ extended: true})); // to parse form data

app.use(cookieParser());

app.use('/api/auth', authRoutes);

app.listen(PORT, (err)=>{
    
    if(err){
        console.log(err);
    }
    console.log(`server is running on port: ${PORT}`);
    connectMongoDB(); 
});