import dotenv from 'dotenv';
dotenv.config()

import express from "express";
import mongoose from "mongoose";
import Product from "./models/product-models.js";


const app = express()
app.use(express.json())

const dbURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("hi world")
})
//  app.post("/api/products",async(req,res)=>{
//   try {
//     const product = await Product.create(req.body)
//     res.status(200).json(product)
//   } catch (error) {
//     res.status(500).json({message:error.message})
//   }
//  })

app.get("/api/products", async (req, res) => {
  try {
    const product = await Product.find({})
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

mongoose.connect(dbURI)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`);
    })
  })
  .catch((error) => {
    console.error("connection error", error.message);

  })