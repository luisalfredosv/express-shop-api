import mongoose from "mongoose";
const Schema = mongoose.Schema;

// // Model Products 4
const productAddonsSchema = new Schema({
  id_product: { type: String, required: [true, "El id es necesario"] },
  name: String,
  type: Number,
  quality: Number,
  min: Number,
  date_created: { type: Date, default: Date.now },
  date_update: { type: Date, default: Date.now},
  status: Number
});


const Addon = mongoose.model("Addon", productAddonsSchema);

// 
export default Addon;
