import mongoose from "mongoose";
const Schema = mongoose.Schema;

// // Model Products 4
const stablishimentProductSchema = new Schema({
  id_stablishiment: { type: String, required: [true, "El id es necesario"] },
  slug_stablishiment:String,
  slug:String,
  name: String,
  type: Number,
  quality: Number,
  min: Number,
  addons: Number,
  time: String,
  date_created: { type: Date, default: Date.now },
  date_update: { type: Date, default: Date.now},
  status: Number
});


const Product = mongoose.model("Product", stablishimentProductSchema);

// 
export default Product;
