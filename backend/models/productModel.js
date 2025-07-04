import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: [String], required: true }, // specify array of strings
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: [String], required: true }, // specify array of strings
  bestseller: { type: Boolean, default: false },
  date: { type: Number, required: true },
});

// Fix model registration to avoid "OverwriteModelError"
const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
