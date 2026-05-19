import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// App Config
const app=express()
const port=process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors({
  origin: [
    "https://apna-store-frontd.vercel.app",
    "https://apna-store-admin-1.vercel.app"
  ],
  credentials: true
}));


app.get("/",(req,res)=>{
    res.send("Welcome to the server");
})

// api end point
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

// app.listen(port,()=>{
//     console.log("server started");
// })
export default app;
