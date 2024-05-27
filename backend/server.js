import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderModel from "./models/orderModel.js";
import orderRouter from "./routes/orderRoutes.js";

//app config
const app=express();
const port=4000;

//middleware
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/food",foodRouter)
app.use("/api/user",userRouter);
app.use("/images",express.static("uploads"));
app.use("/api/cart",cartRouter);
app.use("/api/orders",orderRouter);

app.get("/",(req,res)=>{
    res.send("API working");
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})
