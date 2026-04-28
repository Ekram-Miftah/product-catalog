import mongoose from "mongoose";
import dotenv from "dotenv";
import { Product } from "./models/product.js";
dotenv.config();
const uri = process.env.MONGO_URI as string;
async function main() {
  await mongoose.connect(uri);
  console.log("Connected Successfully to MonoDb");

  //   const all = await Product.find();
  //   console.log("All Products:", all);
  //   const names = await Product.find().select("name price -_id");
  //   console.log("Name Products:", names);
  //   const sorted = await Product.find().select("name price -_id").sort("price");
  //   console.log(
  //     "Sorted Products:",
  //     sorted.map((p) => p.name)
  //   );

  //   const cheap = await Product.find({ price: { $lt: 50 } });
  //   console.log("checheapap Products:", cheap);

  //   const midRange = await Product.find({ price: { $gte: 30, $lt: 150 } }).select(
  // //     "name price -_id"
  // //   );
  // //   console.log("30-150 Products:", midRange);

  //   const Filtered = await Product.find({
  //     category: { $in: ["Electronics ", "Accessories"] },
  //   }).select("name price -_id");
  //   console.log("filtered elec and acess  Products:", Filtered);

  const pageSize = 3;
  const page = 2;
  const paginated = await Product.find()
    .sort("name")
    .skip((page - 1) * page)
    .limit(pageSize);
  console.log(
    `Page ${page}:`,
    paginated.map((p) => p.name)
  );
}
main().catch((err) => {
  console.log("Connected Failed  to MonoDb:", err);
  process.exit(1);
});
