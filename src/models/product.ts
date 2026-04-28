import mongoose, { Schema, Document } from "mongoose";
//Typescript interface  it defines the shape of a product
export interface IProduct extends Document {
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  tags: string[];
  createdAt: Date;
}

//Mongoose Schema it defines the rules that mongoDb enforces
const productSchema = new Schema<IProduct>({
  name: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  inStock: { type: Boolean, default: true },
  tags: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

export const Product = mongoose.model<IProduct>("Product", productSchema);
