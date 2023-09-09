import express from "express"  //after adding type as module in package json, we can use import insted of require(ES6 and later)
import dotenv from 'dotenv' //env file is used to store environment variables so  that they cant be missused
import morgan from "morgan"
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'

//config env
dotenv.config()

//database config
connectDB()

//rest object
const app = express()

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/category', categoryRoutes);
app.use("/api/v1/product", productRoutes);
// app.use("/api/v1/prediction");


//rest api
app.get('/', (req, res) => {
    res.send("<h1>Welcome</h1>")
})

//PORT

const PORT = process.env.PORT || 8080; //PORT variable resent in env file

//run listen
app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
})