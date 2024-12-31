import express from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions ={
    origin:true,
    credentials:true
}

//testing
app.get("/", (req, res)=>{
    res.send("api is working");
});

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected successfully");
    } catch (err) {
      console.error("MongoDB connection failed:", err.message);
    }
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);


app.listen(port, ()=> {
    connect();
    console.log("server listening on port", port);
})