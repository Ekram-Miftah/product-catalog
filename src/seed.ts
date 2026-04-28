import mongoose from "mongoose";
import dotenv from "dotenv";
import { Product } from "./models/product.js";

dotenv.config();
const products = [
  {
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 149.99,
    inStock: true,
    tags: ["keyboard", "gaming"],
  },
  {
    name: "Wirless Mouse ",
    category: "Electronics",
    price: 49.99,
    inStock: true,
    tags: ["mouse", "wirless"],
  },
  {
    name: "USB-C Hub ",
    category: "Electronics",
    price: 35.0,
    inStock: false,
    tags: ["hub", "usb"],
  },
  {
    name: "Standing Desk ",
    category: "Furniture",
    price: 449.99,
    inStock: true,
    tags: ["desk", "ergonomic"],
  },

  {
    name: "Monitor Stand ",
    category: "Furniture",
    price: 29.99,
    inStock: true,
    tags: ["stand", "Monitor"],
  },

  {
    name: "Laptop Sleeve ",
    category: "Acessories",
    price: 19.99,
    inStock: false,
    tags: ["laptop", "case"],
  },

  {
    name: "Noise Cancling HeadPhones ",
    category: "Electronics",
    price: 299.99,
    inStock: true,
    tags: ["audio", "wirless"],
  },
  {
    name: "Webcam 4k  ",
    category: "Electronics",
    price: 129.99,
    inStock: true,
    tags: ["camera", "streaming"],
  },
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI as string);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Database seed");
  process.exit(0);
}

seed().catch(console.error);
