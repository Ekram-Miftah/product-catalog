import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.MONGO_URI as string;
async function main() {
  await mongoose.connect(uri);
  console.log("Connected Successfully to MonoDb");
}
main().catch((err) => {
  console.log("Connected Failed  to MonoDb:", err);
  process.exit(1);
});
