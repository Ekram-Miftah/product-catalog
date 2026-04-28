import mongoose from "mongoose";
import dotenv from "dotenv";
import { Product } from "./models/product.js";
dotenv.config();
const uri = process.env.MONGO_URI as string;
async function main() {
  await mongoose.connect(uri);
  console.log("Connected Successfully to MonoDb");

  const product = new Product({
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 149.99,
    inStock: true,
    tags: ["Keyboard", "peripheral", "gaming"],
  });
  const result = await product.save();
  console.log("Saved :", result);
}
main().catch((err) => {
  console.log("Connected Failed  to MonoDb:", err);
  process.exit(1);
});
